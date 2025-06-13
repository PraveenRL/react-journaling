import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import "./BigCalendar.scss";
import entryService from "../../../services/entryService";
import { useNavigate } from "react-router-dom";

// --- Helper Functions for Date Logic ---
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday

const formatDateToYYYYMMDD = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getMonthName = (date) =>
  date.toLocaleString("default", { month: "long" });

// --- Components (from previous context, simplified for standalone) ---

// This would typically be a reusable component from your components/ directory
const EntryCard = ({ entry }) => {
  const navigate = useNavigate();

  return (
    <div className="entry-card">
      <div>
        <h3 className="entry-card-title">
          {entry.title} {entry?.moods?.map((each) => each.icon)}
        </h3>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            type="button"
            startIcon={<EditIcon />}
            onClick={() => navigate("/addEdit", { state: entry })}
          >
            Edit
          </Button>
        </Box>
        <p className="entry-card-date">{entry.description}</p>
        <div className="entry-card-tags">
          {entry.tags &&
            entry.tags.map((tag) => (
              <span key={tag} className="entry-card-tag">
                {tag}
              </span>
            ))}
        </div>
      </div>
      {/* Edit/Delete actions can be added here if needed */}
    </div>
  );
};

// --- Calendar Page Component ---
const BigCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Current month/year being viewed
  const [journalEntries, setJournalEntries] = useState([]); // All fetched entries
  const [selectedDate, setSelectedDate] = useState(
    formatDateToYYYYMMDD(new Date())
  ); // Currently selected day
  const [entriesForSelectedDay, setEntriesForSelectedDay] = useState([]); // Entries for the selected day
  const [loadingEntries, setLoadingEntries] = useState(true);
  const [loadingSelectedDayEntries, setLoadingSelectedDayEntries] =
    useState(false);

  // Fetch all entries on component mount
  useEffect(() => {
    const fetchAllEntries = async () => {
      setLoadingEntries(true);
      const fetchedEntries = await entryService.getEntries();
      setJournalEntries(fetchedEntries);
      setLoadingEntries(false);
    };
    fetchAllEntries();
  }, []);

  // Fetch entries for the selected day whenever selectedDate changes
  useEffect(() => {
    const fetchSelectedDayEntries = async () => {
      if (selectedDate) {
        setLoadingSelectedDayEntries(true);
        const entries =
          (await entryService.getEntriesByDate(selectedDate)) ?? [];
        setEntriesForSelectedDay(entries);
        setLoadingSelectedDayEntries(false);
      } else {
        setEntriesForSelectedDay([]);
      }
    };
    fetchSelectedDayEntries();
  }, [selectedDate]); // Dependency on selectedDate

  // Function to navigate to the previous month
  const goToPreviousMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() - 1,
        1
      );
      return newDate;
    });
  }, []);

  // Function to navigate to the next month
  const goToNextMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + 1,
        1
      );
      return newDate;
    });
  }, []);

  // Handle click on a day in the calendar
  const handleDayClick = useCallback(
    (day) => {
      const newSelectedDate = `${currentDate.getFullYear()}-${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
      setSelectedDate(newSelectedDate);
    },
    [currentDate]
  );

  // Render the calendar grid
  const renderCalendarDays = useCallback(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const numDays = getDaysInMonth(year, month);
    const firstDayOfWeek = getFirstDayOfMonth(year, month); // 0 = Sunday, 1 = Monday

    const days = [];
    const todayYYYYMMDD = formatDateToYYYYMMDD(new Date());

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day-empty"></div>);
    }

    // Add actual days of the month
    for (let day = 1; day <= numDays; day++) {
      const currentDayDate = new Date(year, month, day);
      const currentDayYYYYMMDD = formatDateToYYYYMMDD(currentDayDate);
      const hasEntries = journalEntries.find(
        (entry) => entry.dateFormatted === currentDayYYYYMMDD
      );
      const isToday = currentDayYYYYMMDD === todayYYYYMMDD;
      const isSelected = currentDayYYYYMMDD === selectedDate;

      // Conditional classes for styling
      let dayClasses = "calendar-day";
      if (isToday) dayClasses += " calendar-day-today";
      if (isSelected) dayClasses += " calendar-day-selected";

      days.push(
        <div
          key={day}
          className={dayClasses}
          onClick={() => handleDayClick(day)}
          role="button"
          aria-pressed={isSelected}
        >
          <span className="calendar-day-number">{day}</span>

          {hasEntries && (
            <>
              <div className="calendar-day-icons">
                {hasEntries?.moods?.map((each) => each.icon)}
              </div>
              <div className="calendar-day-dot" aria-label="Has entries"></div>
            </>
          )}
        </div>
      );
    }
    return days;
  }, [currentDate, journalEntries, selectedDate, handleDayClick]);

  return (
    <div className="calendar-page-container">
      {/* Header */}
      <header className="calendar-header">
        <button
          onClick={goToPreviousMonth}
          className="material-icons calendar-nav-button"
          aria-label="Previous month"
        >
          chevron_left
        </button>
        <h1 className="text-h1">
          {getMonthName(currentDate)} {currentDate.getFullYear()}
        </h1>
        <button
          onClick={goToNextMonth}
          className="material-icons calendar-nav-button"
          aria-label="Next month"
        >
          chevron_right
        </button>
      </header>

      {/* Weekday Headers */}
      <div className="calendar-weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-weekday-item">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {loadingEntries ? (
          <div className="loading-container" style={{ gridColumn: "span 7" }}>
            <div className="loading-spinner"></div>
            <p className="text-gray-600">Loading calendar entries...</p>
          </div>
        ) : (
          renderCalendarDays()
        )}
      </div>

      {/* Entries for Selected Day */}
      <section className="entries-section">
        <h2 className="entries-section-title">
          Entries for {selectedDate || "Selected Day"}
        </h2>
        {loadingSelectedDayEntries ? (
          <div className="loading-container">
            <div
              className="loading-spinner"
              style={{
                width: "2rem",
                height: "2rem",
                borderTopWidth: "2px",
                borderBottomWidth: "2px",
              }}
            ></div>{" "}
            {/* Smaller spinner */}
            <p className="text-gray-600" style={{ marginTop: "1rem" }}>
              Loading entries...
            </p>
          </div>
        ) : entriesForSelectedDay.length > 0 ? (
          <div className="entries-grid">
            {entriesForSelectedDay.map((entry) => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <p className="no-entries-message">No entries for this date.</p>
        )}
      </section>
    </div>
  );
};

export default BigCalendar;

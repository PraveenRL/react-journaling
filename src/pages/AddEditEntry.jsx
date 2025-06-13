import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import Chips from "../components/ui/Chips";
import entryService from "../services/entryService";

const AddEditEntryPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const initialData = useMemo(
    () =>
      location?.state
        ? {
            ...location.state,
            date: location.state.date ? dayjs(location.state.date) : dayjs(),
          }
        : {},
    [location.state]
  );
  let mode = initialData?.id ? "edit" : "add";
  const [moods, setMoods] = useState(initialData?.moods ?? []);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(initialData);

  useEffect(() => {
    if (initialData?.id) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onAddChip = (chip) => {
    setMoods((prev) => {
      const exists = prev.some((entry) => entry.id === chip.id);
      return exists ? prev : [...prev, chip];
    });
  };

  const updateChips = (chip) => {
    setMoods((prev) => prev.filter((entry) => entry.id !== chip.id));
  };

  const onSubmit = async (data) => {
    const date = data?.date ? data.date.format() : dayjs().format();
    if (mode === "add") {
      const id = crypto.randomUUID();
      await entryService.addEntry({
        ...data,
        id,
        date,
        dateFormatted: dayjs(date).format("YYYY-MM-DD"),
        moods,
      });
    } else {
      await entryService.updateEntry(initialData.id, {
        ...data,
        date,
        dateFormatted: dayjs(date).format("YYYY-MM-DD"),
        moods,
      });
    }
    navigate("/");
  };

  return (
    <>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {mode === "add" ? "Add" : "Edit"} Entry
      </Typography>
      <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete="off"
          sx={{ "& .MuiTextField-root": { width: "100%" } }}
        >
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            {...register("title", { required: "Title is required" })}
            inputProps={{
              maxLength: 50,
            }}
            error={!!errors?.title}
            helperText={errors?.title?.message ?? "Maximum 50 characters"}
          />
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ "& .MuiFormControl-root": { width: "100%" } }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      label="Select Date"
                      value={field?.value || null}
                      format="DD-MM-YYYY"
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ "& .MuiTextField-root": { width: "100%" } }}
            >
              <Controller
                name="tags"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    value={value || []}
                    limitTags={2}
                    options={tags}
                    filterSelectedOptions
                    onChange={(evt, value) => onChange(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Tags" />
                    )}
                  />
                )}
              />
            </Grid>
          </Grid>
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            multiline
            rows={5}
            {...register("description", {
              required: "Description is required",
            })}
            inputProps={{
              maxLength: 250,
            }}
            error={!!errors?.description}
            helperText={errors?.description?.message}
            sx={{ mb: 2, width: "100%" }}
          />
          <Typography
            variant="p"
            noWrap
            component="p"
            sx={{ flexGrow: 1, mb: 1 }}
          >
            Choose your mood
          </Typography>
          <Chips
            onAdd={onAddChip}
            onDelete={updateChips}
            selectedChips={moods}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
              gap: 2,
              mt: 2,
            }}
          >
            <Button
              variant="outlined"
              type="button"
              sx={isMobile ? { flexGrow: 1 } : { width: 150, height: 36 }}
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={isMobile ? { flexGrow: 1 } : { width: 150, height: 36 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default AddEditEntryPage;

const tags = [
  "Daily",
  "Routine",
  "Reflection",
  "Ideas",
  "Insights",
  "Thoughts",
  "Mindfulness",
  "Brainstorm",
  "Happy",
  "Sad",
  "Anxiety",
  "Gratitude",
  "Frustration",
  "Joy",
  "Stress",
  "Calm",
  "Goals",
  "Progress",
  "Achievements",
  "Challenges",
  "Planning",
  "Future",
  "Work",
  "Career",
  "Projects",
  "Productivity",
  "Learning",
  "Family",
  "Friends",
  "Love",
  "Social",
  "Connections",
  "Health",
  "Fitness",
  "Diet",
  "Sleep",
  "Self-Care",
  "Wellbeing",
  "Creative",
  "Hobby",
  "Art",
  "Writing",
  "Music",
  "Reading",
  "Inspiration",
  "Dream",
  "Travel",
  "Experience",
  "Nature",
  "Morning",
  "Evening",
  "Weekly",
  "Monthly",
  "Yearly",
  "Lesson Learned",
  "Todo",
  "Action",
  "Quote",
];

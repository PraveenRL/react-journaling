# Journaling App UX Design

This UX design outlines the essential elements for a journaling application, including key screens, components, and interactions. The design prioritizes simplicity, usability, and a distraction-free writing experience, with a clean and modern aesthetic suitable for React development.

## Design Principles
- **Minimalist**: Clean interface with minimal distractions to focus on writing.
- **Intuitive**: Easy navigation and clear actions for creating, editing, and organizing entries.
- **Responsive**: Adaptable to desktop and mobile devices.
- **Personalized**: Support for basic customization (e.g., themes, fonts).

## Key Screens and Components

### 1. Home Screen (Entry List)
**Purpose**: Displays a list of journal entries with options to create, search, and filter.
**Layout**:
- **Header**:
  - Title: "My Journal"
  - Actions: "New Entry" button (primary CTA), Search icon, Filter/Sort icon.
  - Profile/Settings icon (top-right corner).
- **Main Content**:
  - Scrollable list of journal entries, each displayed as a card or list item.
  - Each entry shows: Title (or first line preview), Date, and Tags (if any).
  - Clicking an entry opens the Entry View Screen.
- **Sidebar** (Desktop) or Bottom Navigation (Mobile):
  - Navigation links: Home, Calendar, Tags, Settings.
- **Footer** (Mobile):
  - Fixed "New Entry" floating action button (FAB) for quick access.

**Components**:
- **Entry Card/List Item**:
  - Title/Preview: Truncated text (e.g., first 50 characters).
  - Date: Formatted as "MMM DD, YYYY" (e.g., Jun 04, 2025).
  - Tags: Small, colored badges (e.g., #Personal, #Work).
  - Actions: Edit (pencil icon), Delete (trash icon).
- **Search Bar** (collapsible):
  - Input field with placeholder: "Search entries...".
  - Filters: By date range, tags, or keywords.
- **Sort Options**:
  - Dropdown or modal with options: Newest, Oldest, Title A-Z.

**Interactions**:
- Click "New Entry" to navigate to Entry Creation Screen.
- Search icon expands/collapses the search bar.
- Filter/Sort icon opens a modal or dropdown for filtering/sorting entries.
- Click an entry card to view/edit the entry.
- Long-press or right-click an entry for quick actions (edit/delete).

### 2. Entry Creation/Edit Screen
**Purpose**: Allows users to write or edit a journal entry with rich text support and metadata.
**Layout**:
- **Header**:
  - Back arrow to return to Home Screen.
  - Save button (primary CTA).
  - Optional: Share/Export button (e.g., export as PDF).
- **Main Content**:
  - Title input field: Placeholder "Entry Title".
  - Rich text editor: Supports bold, italic, lists, and basic formatting.
  - Metadata section: Date (auto-filled, editable), Tags input (comma-separated or chip-based).
- **Footer** (optional):
  - Word count display (e.g., "250 words").
  - Auto-save indicator (e.g., "Saved" or "Saving...").

**Components**:
- **Rich Text Editor**:
  - Toolbar with formatting options: Bold, Italic, Bulleted List, Numbered List.
  - Text area with placeholder: "Write your thoughts...".
- **Tags Input**:
  - Chip-based input for adding/removing tags.
  - Suggestions based on previously used tags.
- **Date Picker**:
  - Calendar widget for selecting entry date.
- **Save Button**:
  - Disabled until changes are made.
  - Shows loading state during save.

**Interactions**:
- Auto-save on pause (after 3 seconds of inactivity).
- Save button confirms changes and returns to Home Screen.
- Back arrow prompts to save unsaved changes (modal: "Save changes?").
- Tags input supports autocomplete for existing tags.

### 3. Calendar Screen
**Purpose**: Displays entries on a calendar view for easy navigation.
**Layout**:
- **Header**:
  - Month/Year display with arrows to navigate months.
  - Toggle between Month and Week views.
- **Main Content**:
  - Calendar grid with days highlighted if entries exist.
  - Clicking a day shows a list of entries for that day (below or in a modal).
- **Sidebar/Bottom Navigation**: Same as Home Screen.

**Components**:
- **Calendar Grid**:
  - Days with entries marked with a dot or highlight.
  - Current day highlighted differently.
- **Entry Preview List**:
  - Shows entry titles and times for the selected day.

**Interactions**:
- Click a day to view entries or create a new entry for that date.
- Month navigation updates the calendar dynamically.
- Toggle between Month/Week views adjusts the grid.

### 4. Tags Screen
**Purpose**: Manage and filter entries by tags.
**Layout**:
- **Header**:
  - Title: "Tags"
  - Search bar for tags.
- **Main Content**:
  - List of tags with entry counts (e.g., "Personal (15)").
  - Clicking a tag shows filtered entries (similar to Home Screen).
- **Sidebar/Bottom Navigation**: Same as Home Screen.

**Components**:
- **Tag List Item**:
  - Tag name and entry count.
  - Delete option for unused tags.
- **Filtered Entry List**:
  - Same as Home Screen entry list but filtered by selected tag.

**Interactions**:
- Click a tag to view associated entries.
- Delete unused tags with confirmation modal.

### 5. Settings Screen
**Purpose**: Customize the app experience.
**Layout**:
- **Header**: Title: "Settings"
- **Main Content**:
  - Theme toggle: Light, Dark, System Default.
  - Font settings: Select from 2-3 font options (e.g., Sans-serif, Serif).
  - Export/Backup: Option to export all entries as JSON or PDF.
  - Account: Sign-out or profile management (if applicable).

**Components**:
- **Theme Toggle**:
  - Radio buttons or switch for theme selection.
- **Font Dropdown**:
  - Simple dropdown with font previews.
- **Export Button**:
  - Triggers file download or email export.

**Interactions**:
- Theme/font changes apply instantly with a preview.
- Export prompts for format selection (JSON/PDF).

## User Flows
1. **Creating a New Entry**:
   - From Home Screen, click "New Entry" (FAB or header button).
   - Enter title, write content, add tags, and adjust date if needed.
   - Save or auto-save returns to Home Screen.
2. **Editing an Entry**:
   - From Home Screen, click an entry card.
   - Edit title, content, tags, or date.
   - Save or cancel to return.
3. **Searching/Filtering**:
   - On Home Screen, use search bar or filter icon.
   - View filtered results; click to edit/view entries.
4. **Calendar Navigation**:
   - From Calendar Screen, select a day to view entries.
   - Click "New Entry" to create an entry for a specific date.
5. **Tag Management**:
   - From Tags Screen, view or delete tags.
   - Click a tag to filter entries.
6. **Customization**:
   - From Settings Screen, adjust theme/font.
   - Export entries for backup.

## Visual Design Notes
- **Color Scheme**:
  - Primary: Soft blue (#4A90E2) for buttons and highlights.
  - Secondary: Neutral gray (#4A4A4A) for text and borders.
  - Background: White (#FFFFFF) or Dark (#1C2526) based on theme.
- **Typography**:
  - Headings: Sans-serif, bold (e.g., Roboto, 18-24px).
  - Body: Sans-serif, regular (e.g., Roboto, 14-16px).
- **Spacing**:
  - Consistent padding/margins (16px for major elements, 8px for minor).
  - Card-based layout with subtle shadows for depth.
- **Icons**:
  - Use a consistent icon set (e.g., Material Icons) for actions like edit, delete, and search.

## Accessibility Considerations
- Keyboard navigation support for all actions.
- High-contrast mode for text and buttons.
- ARIA labels for interactive elements (e.g., buttons, inputs).
- Responsive font sizes for readability on small screens.

## Technical Notes for React Development
- **Component Structure**:
  - Reusable components: `EntryCard`, `RichTextEditor`, `CalendarGrid`, `TagChip`.
  - Layout components: `Header`, `Sidebar`, `BottomNav`.
- **State Management**:
  - Use React Context or Redux for managing entries, tags, and settings.
  - Local storage or backend API for persisting entries.
- **Routing**:
  - Use React Router for navigating between Home, Calendar, Tags, and Settings.
- **Styling**:
  - Use Tailwind CSS for responsive, utility-first styling.
  - Support light/dark themes via CSS variables or Tailwind’s dark mode.
- **Rich Text Editor**:
  - Consider libraries like `react-quill` or `draft-js` for rich text functionality.
- **Data Structure** (suggested):
  ```json
  {
    "entries": [
      {
        "id": "uuid",
        "title": "string",
        "content": "string",
        "date": "YYYY-MM-DD",
        "tags": ["string"],
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ],
    "tags": ["string"]
  }
  ```

## Additional Features (Optional for Future Development)
- Mood tracking: Add a mood selector (e.g., emoji-based) for each entry.
- Reminders: Set daily/weekly writing reminders.
- Statistics: Display writing streaks or word count trends.
- Cloud sync: Support for syncing entries across devices (requires backend).
# Journaling App Figma-Style UX Design

This design specification provides a Figma-like blueprint for a journaling application, detailing screens, components, layouts, styles, and interactions for React development. It emphasizes a clean, modern, and intuitive interface for writing, organizing, and reviewing journal entries, with precise visual and functional details.

## Design System

### Typography
- **Font Family**: Roboto (Sans-serif, Google Fonts)
- **Weights**:
  - Regular (400): Body text, inputs
  - Medium (500): Subheadings, buttons
  - Bold (700): Headings
- **Sizes**:
  - H1: 24px (Main titles, e.g., "My Journal")
  - H2: 18px (Section titles, entry titles)
  - Body: 16px (Main content, entry text)
  - Caption: 14px (Metadata, e.g., dates, word counts)
  - Small: 12px (Tags, secondary info)

### Colors
- **Primary**: #4A90E2 (Soft blue, buttons, highlights)
- **Secondary**: #4A4A4A (Dark gray, text, borders)
- **Background**:
  - Light Theme: #FFFFFF (White)
  - Dark Theme: #1C2526 (Dark gray)
- **Accent**: #F5A623 (Yellow, for active states or alerts)
- **Error**: #D32F2F (Red, for error states)
- **Success**: #388E3C (Green, for save confirmation)

### Spacing
- **Grid**: 8px base unit
  - Small: 8px (e.g., between icons and text)
  - Medium: 16px (e.g., between components, padding)
  - Large: 24px (e.g., section margins)
  - Extra Large: 32px (e.g., screen padding)
- **Border Radius**:
  - Buttons: 8px
  - Cards: 12px
  - Inputs: 6px

### Icons
- **Set**: Material Icons (Google)
- **Size**: 24px (default), 20px (small contexts)
- **Examples**:
  - Add: `add_circle`
  - Edit: `edit`
  - Delete: `delete`
  - Search: `search`
  - Calendar: `calendar_today`

### Shadows
- **Card Shadow**: 0px 2px 4px rgba(0, 0, 0, 0.1)
- **Button Hover**: 0px 4px 8px rgba(0, 0, 0, 0.15)
- **Modal Shadow**: 0px 8px 16px rgba(0, 0, 0, 0.2)

## Screens

### 1. Home Screen (Entry List)
**Purpose**: Displays all journal entries with options to create, search, and filter.
**Layout** (Desktop: 1440px, Mobile: 375px):
- **Header** (64px height):
  - Left: H1 "My Journal" (24px, Bold, Primary color)
  - Right: Buttons (Search icon, Filter icon, Profile/Settings icon, 32px square, 8px spacing)
  - "New Entry" button: Primary color, 40px height, 120px width, 16px padding
- **Main Content** (flex, scrollable):
  - Entry cards in a grid (Desktop: 3 columns, Mobile: 1 column)
  - Card: 300px width (Desktop), 100% width (Mobile), 120px height, 12px radius, Card Shadow
  - Card content: Title (H2, 18px, truncate at 50 chars), Date (Caption, 14px), Tags (Small, 12px, 6px radius badges)
  - Card actions: Edit/Delete icons (20px, Secondary color, hover: Accent)
- **Sidebar** (Desktop, 240px width):
  - Links: Home, Calendar, Tags, Settings (16px, Medium weight, 16px padding)
  - Active link: Primary color underline
- **Bottom Navigation** (Mobile, 56px height):
  - Icons: Home, Calendar, Tags, Settings (24px, centered)
  - Floating Action Button (FAB): 56px diameter, Primary color, `add_circle` icon, bottom-right, 16px from edge
- **Constraints**:
  - Desktop: 32px screen padding
  - Mobile: 16px screen padding

**Interactions**:
- Click "New Entry" → Navigate to Entry Creation Screen
- Search icon → Expand search bar (300px width, 40px height, 6px radius)
- Filter icon → Open modal with sort options (Newest, Oldest, A-Z)
- Click entry card → Navigate to Entry View/Edit Screen
- Hover card actions → Change to Accent color
- Long-press card (Mobile) → Show context menu (Edit, Delete)

### 2. Entry Creation/Edit Screen
**Purpose**: Create or edit a journal entry with rich text and metadata.
**Layout**:
- **Header** (64px height):
  - Left: Back arrow (24px, Secondary color)
  - Right: Save button (Primary color, 40px height, 80px width), Share icon (24px)
- **Main Content** (flex, column):
  - Title input: 100% width, 48px height, 16px font, 6px radius, 8px padding
  - Rich text editor: 100% width, 400px height (Desktop), auto-height (Mobile), 6px radius
  - Toolbar: Bold, Italic, Bulleted List, Numbered List (24px icons, 8px spacing)
  - Metadata: Date picker (16px font, 40px height), Tags input (chip-based, 32px height, 6px radius)
- **Footer**:
  - Word count (Caption, 14px, right-aligned)
  - Auto-save indicator (Small, 12px, e.g., "Saved" in Success color)

**Interactions**:
- Auto-save after 3s inactivity (show "Saving..." → "Saved")
- Save button → Disabled until changes, click to save and return
- Back arrow → Modal if unsaved changes ("Save changes? Yes/No/Cancel")
- Tags input → Autocomplete from existing tags, add on comma/Enter
- Date picker → Pop-up calendar, default to today

### 3. Calendar Screen
**Purpose**: View entries by date in a calendar format.
**Layout**:
- **Header** (64px height):
  - Month/Year (H1, 24px, center)
  - Left/Right arrows (24px, Secondary color)
  - Toggle: Month/Week (16px, toggle switch, Primary color)
- **Main Content**:
  - Calendar grid: 7 columns (days), 5-6 rows (weeks), 40px cell height
  - Days with entries: Blue dot (8px, Primary color)
  - Current day: Accent color border
  - Selected day: Background fill (Primary color, 20% opacity)
  - Entry list (below calendar): Same as Home Screen cards, filtered by day
- **Sidebar/Bottom Navigation**: Same as Home Screen

**Interactions**:
- Click day → Show entries below or in modal
- Click "New Entry" → Create entry for selected date
- Month arrows → Update calendar dynamically
- Month/Week toggle → Adjust grid layout

### 4. Tags Screen
**Purpose**: Manage and filter entries by tags.
**Layout**:
- **Header** (64px height):
  - Title: "Tags" (H1, 24px)
  - Search bar (200px width, 40px height, 6px radius)
- **Main Content**:
  - Tag list: 100% width, 48px height per item
  - Tag item: Name (16px), Count (14px, in parentheses), Delete icon (20px, hover: Error color)
  - Filtered entries: Same as Home Screen cards
- **Sidebar/Bottom Navigation**: Same as Home Screen

**Interactions**:
- Click tag → Show filtered entries
- Delete tag → Confirmation modal ("Delete tag? Yes/No")
- Search tags → Filter tag list dynamically

### 5. Settings Screen
**Purpose**: Customize app settings.
**Layout**:
- **Header** (64px height): Title: "Settings" (H1, 24px)
- **Main Content** (flex, column):
  - Theme: Radio buttons (Light, Dark, System, 16px, 40px height)
  - Font: Dropdown (Roboto, Open Sans, 16px, 40px height)
  - Export: Button (Primary color, 40px height, 120px width)
  - Sign-out: Button (Secondary color, 40px height, 120px width)
- **Constraints**: 16px spacing between sections

**Interactions**:
- Theme change → Apply instantly, save to local storage
- Font change → Preview in dropdown, apply on select
- Export → Modal to choose format (JSON/PDF)
- Sign-out → Redirect to login (if applicable)

## Component Library

### 1. Entry Card
- **Structure**: Flex, column, 300px width (Desktop), 100% (Mobile), 120px height
- **Elements**:
  - Title: H2, 18px, truncate at 50 chars
  - Date: Caption, 14px, Secondary color
  - Tags: Chips (12px, 6px radius, Primary color background)
  - Actions: Edit/Delete icons (20px, 8px spacing)
- **States**:
  - Default: Card Shadow, white/dark background
  - Hover: Shadow intensifies, actions turn Accent color
  - Selected: Primary color border (2px)

### 2. Rich Text Editor
- **Structure**: 100% width, 400px height, 6px radius
- **Toolbar**: 40px height, icons (24px, 8px spacing)
- **Text Area**: 16px font, 8px padding, placeholder: "Write your thoughts..."
- **States**:
  - Focused: Primary color border
  - Disabled: Grayed out (50% opacity)

### 3. Button
- **Types**:
  - Primary: Primary color background, white text, 8px radius
  - Secondary: Secondary color border, transparent background, 8px radius
- **Sizes**: 40px height, 80-120px width, 16px font
- **States**:
  - Default: Solid color/border
  - Hover: Shadow, slight scale (1.05)
  - Disabled: 50% opacity
  - Loading: Spinner (20px, centered)

### 4. Tag Chip
- **Structure**: 32px height, auto width, 6px radius
- **Elements**: Text (12px), Delete icon (16px, optional)
- **States**:
  - Default: Primary color background, white text
  - Hover: Accent color background
  - Selected: Thicker border (2px)

### 5. Modal
- **Structure**: 400px width (Desktop), 90% width (Mobile), 12px radius
- **Elements**:
  - Title: H2, 18px
  - Body: 16px text, 16px padding
  - Buttons: Primary/Secondary, 40px height, 16px spacing
- **States**:
  - Open: Modal Shadow, centered
  - Closed: Hidden

## User Flows
1. **Create Entry**:
   - Home Screen → Click "New Entry" → Entry Creation Screen
   - Enter title, content, tags → Save → Return to Home
2. **Edit Entry**:
   - Home Screen → Click entry card → Entry Edit Screen
   - Modify fields → Save or Cancel
3. **Search/Filter**:
   - Home Screen → Search bar or Filter modal → View filtered entries
4. **Calendar View**:
   - Calendar Screen → Select day → View entries or create new
5. **Tag Filter**:
   - Tags Screen → Click tag → View filtered entries
6. **Settings**:
   - Settings Screen → Adjust theme/font → Apply instantly
   - Export → Choose format → Download file

## Accessibility
- **Keyboard Navigation**: Tab order for all interactive elements
- **ARIA Labels**:
  - Buttons: `aria-label="New Entry"`, `aria-label="Save Entry"`
  - Inputs: `aria-label="Entry Title"`, `aria-label="Search Entries"`
- **Contrast**: Minimum 4.5:1 for text (WCAG 2.1)
- **Screen Reader**: Descriptive labels for cards, modals

## Technical Notes for React
- **Component Structure**:
  - `EntryCard`, `RichTextEditor`, `Button`, `TagChip`, `Modal`
  - Layout: `AppLayout`, `Header`, `Sidebar`, `BottomNav`
- **Styling**: Tailwind CSS with custom variables for colors/themes
  ```css
  :root {
    --primary: #4A90E2;
    --secondary: #4A4A4A;
    --background: #FFFFFF;
  }
  .dark {
    --background: #1C2526;
  }
  ```
- **Routing**: React Router (`/home`, `/calendar`, `/tags`, `/settings`, `/entry/:id`)
- **Rich Text Editor**: Use `react-quill` with custom toolbar
- **State**: Context API or Redux for entries, tags, settings
- **Data**:
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

## Responsive Design
- **Desktop (1440px)**: 3-column grid, sidebar visible
- **Tablet (768px)**: 2-column grid, sidebar collapsible
- **Mobile (375px)**: 1-column grid, bottom navigation, FAB
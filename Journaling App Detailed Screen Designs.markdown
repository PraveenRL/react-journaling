# Journaling App Detailed Screen Designs

Below is a detailed textual description of the designs for each screen (Home, Entry Creation/Edit, Calendar, Tags, and Settings) for both desktop (1440px) and mobile (375px) views. The descriptions include precise layouts, component placements, colors, typography, and interactions, following the Figma-style UX design previously provided. The aesthetic remains clean and modern, with Primary color #4A90E2 (soft blue), Secondary color #4A4A4A (dark gray), and responsive layouts.

## 1. Home Screen (Entry List)

### Desktop View (1440px)
- **Overall Layout**: A 1440px-wide screen with a fixed 240px sidebar on the left, a 64px header, and the main content area taking the remaining space (1152px wide, excluding 32px padding on each side).
- **Sidebar**:
  - Background: #FFFFFF (light theme) with a subtle 0px 2px 4px rgba(0, 0, 0, 0.1) shadow on the right edge.
  - Navigation links (stacked vertically, 16px padding):
    - "Home" (active, with a 2px #4A90E2 underline), "Calendar", "Tags", "Settings".
    - Each link: 16px Roboto Medium, #4A4A4A, hover state changes to #4A90E2.
  - Bottom: A small circular profile icon (40px diameter, #4A90E2 border).
- **Header**:
  - Background: #FFFFFF, 64px height, 32px padding on sides.
  - Left: Title "My Journal" (24px, Roboto Bold, #4A90E2).
  - Right: 
    - "New Entry" button (120px wide, 40px high, #4A90E2 background, white text, 8px radius, 16px Roboto Medium, hover: slight scale to 1.05).
    - Search icon (24px, #4A4A4A, Material Icons `search`), Filter icon (24px, `filter_list`), Profile/Settings icon (24px, `settings`), spaced 8px apart.
- **Main Content**:
  - Background: #FFFFFF, 32px padding.
  - Grid of entry cards: 3 columns (each card 300px wide, 120px high, 16px gap between cards).
  - **Entry Card**:
    - Background: #FFFFFF, 12px radius, 0px 2px 4px rgba(0, 0, 0, 0.1) shadow.
    - Top: Title (18px, Roboto Medium, #4A4A4A, truncated at 50 chars, e.g., "Morning Thoughts...").
    - Middle: Date (14px, Roboto Regular, #4A4A4A, e.g., "Jun 04, 2025").
    - Bottom: Tags (small chips, 12px, 6px radius, #4A90E2 background, white text, e.g., "Personal", "Work").
    - Right: Edit (Material Icons `edit`, 20px, #4A4A4A) and Delete (`delete`, 20px, #4A4A4A) icons, hover state: #F5A623 (yellow).
  - If no entries: A centered placeholder text "No entries yet. Start writing!" (16px, Roboto Regular, #4A4A4A).

### Mobile View (375px)
- **Overall Layout**: A 375px-wide screen with a 64px header, a scrollable main content area, and a fixed 56px bottom navigation bar.
- **Header**:
  - Background: #FFFFFF, 64px height, 16px padding on sides.
  - Left: Title "My Journal" (24px, Roboto Bold, #4A90E2).
  - Right: Search icon (24px, #4A4A4A), Filter icon (24px), Profile/Settings icon (24px), spaced 8px apart.
- **Main Content**:
  - Background: #FFFFFF, 16px padding.
  - Single-column list of entry cards (100% width, 120px high, 16px gap between cards).
  - **Entry Card**: Same as desktop but full-width (343px wide after padding).
- **Bottom Navigation**:
  - Background: #FFFFFF, 56px height, border-top: 1px #4A4A4A 20% opacity.
  - Icons (evenly spaced): Home (active, #4A90E2), Calendar, Tags, Settings (24px, #4A4A4A).
  - Floating Action Button (FAB): 56px diameter, #4A90E2, Material Icons `add_circle` (white, 24px), bottom-right, 16px from edges.
- **Interactions**:
  - Tap FAB → Navigate to Entry Creation Screen.
  - Tap entry card → Navigate to Entry View/Edit Screen.
  - Long-press card → Context menu (Edit, Delete).

## 2. Entry Creation/Edit Screen

### Desktop View
- **Overall Layout**: 1440px-wide screen, same 240px sidebar as Home Screen, 64px header, and main content (1152px wide, 32px padding).
- **Header**:
  - Left: Back arrow (24px, #4A4A4A, Material Icons `arrow_back`).
  - Right: Save button (80px wide, 40px high, #4A90E2, white text, 8px radius), Share icon (24px, `share`, #4A4A4A).
- **Main Content**:
  - Background: #FFFFFF, 32px padding.
  - **Title Input**: 100% width (1088px after padding), 48px height, 16px Roboto Regular, 6px radius, 8px padding, placeholder: "Entry Title", #4A4A4A border.
  - **Rich Text Editor**: 100% width, 400px height, 6px radius.
    - Toolbar (40px height): Bold, Italic, Bulleted List, Numbered List (24px icons, #4A4A4A, 8px spacing).
    - Text area: 16px Roboto Regular, 8px padding, placeholder: "Write your thoughts...", focused state: 2px #4A90E2 border.
  - **Metadata Section** (below editor, 16px gap):
    - Date Picker: 200px wide, 40px high, 16px text, #4A4A4A border, default: "Jun 04, 2025".
    - Tags Input: 400px wide, 32px high, chip-based (12px text, 6px radius, #4A90E2 background, white text), placeholder: "Add tags...".
- **Footer**:
  - Right-aligned: Word count ("250 words", 14px, #4A4A4A), Auto-save indicator ("Saved", 12px, #388E3C green).

### Mobile View
- **Overall Layout**: 375px-wide screen, 64px header, scrollable main content, 56px bottom navigation.
- **Header**:
  - Same as desktop but 16px padding on sides.
- **Main Content**:
  - Background: #FFFFFF, 16px padding.
  - **Title Input**: 100% width (343px after padding), same styling as desktop.
  - **Rich Text Editor**: 100% width, auto-height (minimum 300px), same styling as desktop.
  - **Metadata Section**: Same as desktop but full-width inputs (343px).
- **Footer**: Same as desktop, visible while scrolling.
- **Interactions**:
  - Auto-save after 3s → "Saving..." (#4A4A4A) to "Saved" (#388E3C).
  - Tap Back → Modal if unsaved ("Save changes? Yes/No/Cancel", 300px wide, 12px radius).

## 3. Calendar Screen

### Desktop View
- **Overall Layout**: Same sidebar and header structure as Home Screen.
- **Header**:
  - Center: "June 2025" (24px, Roboto Bold, #4A4A4A).
  - Left/Right: Arrows (24px, #4A4A4A, `chevron_left`, `chevron_right`).
  - Right: Toggle switch ("Month/Week", 16px, #4A90E2 when active).
- **Main Content**:
  - **Calendar Grid**: 1088px wide, 7 columns (days), 5 rows (weeks), 40px cell height.
    - Day cells: 16px text, #4A4A4A, days with entries have a #4A90E2 8px dot below.
    - Current day (Jun 04): 2px #F5A623 border.
    - Selected day: #4A90E2 20% opacity background.
  - **Entry List** (below calendar, 16px gap): Same entry cards as Home Screen, filtered by selected day.
- **Interactions**:
  - Click day → Show entries below.
  - Click "New Entry" → Create entry for selected date.

### Mobile View
- **Overall Layout**: Same header and bottom navigation as Home Screen.
- **Header**:
  - Same as desktop but 16 Magnum on sides.
- **Main Content**:
  - **Calendar Grid**: 343px wide, same styling as desktop but smaller cells (30px height).
  - **Entry List**: Same as desktop, full-width cards.
- **Interactions**: Same as desktop.

## 4. Tags Screen

### Desktop View
- **Overall Layout**: Same sidebar and header structure.
- **Header**:
  - Left: "Tags" (24px, Roboto Bold, #4A4A4A).
  - Right: Search bar (200px wide, 40px high, 6px radius, placeholder: "Search tags...").
- **Main Content**:
  - **Tag List**: 1088px wide, 48px height per item.
    - Tag Item: "Personal (15)" (16px, #4A4A4A), Delete icon (20px, hover: #D32F2F red).
  - **Filtered Entries** (on tag click): Same as Home Screen cards.
- **Interactions**:
  - Click tag → Show filtered entries.
  - Delete tag → Modal ("Delete tag? Yes/No").

### Mobile View
- **Overall Layout**: Same header and bottom navigation.
- **Header**: Same as desktop but 16px padding.
- **Main Content**:
  - **Tag List**: 343px wide, same styling.
  - **Filtered Entries**: Full-width cards.
- **Interactions**: Same as desktop.

## 5. Settings Screen

### Desktop View
- **Overall Layout**: Same sidebar and header structure.
- **Header**:
  - Left: "Settings" (24px, Roboto Bold, #4A4A4A).
- **Main Content**:
  - Sections (16px gap):
    - **Theme**: Radio buttons (Light, Dark, System, 16px, 40px height, #4A90E2 when selected).
    - **Font**: Dropdown (Roboto, Open Sans, 16px, 40px height, 6px radius).
    - **Export**: Button (120px wide, 40px high, #4A90E2, white text).
    - **Sign-out**: Button (120px wide, 40px high, #4A4A4A border, transparent background).
- **Interactions**:
  - Theme/Font change → Apply instantly.
  - Export → Modal ("Export as JSON/PDF").

### Mobile View
- **Overall Layout**: Same header and bottom navigation.
- **Header**: Same as desktop.
- **Main Content**: Same as desktop but 343px wide, full-width components.
- **Interactions**: Same as desktop.
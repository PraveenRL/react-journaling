-----

# Daily Journaling App (React POC)

This project is a Proof-of-Concept (POC) for a modern, responsive journaling application. Developed as a hands-on learning experience, it demonstrates core React principles, Material UI integration, and fundamental CRUD operations in a real-world scenario.

-----

## 🌟 Introduction

After six years immersed in frontend development with a strong foundation in **Angular**, I embarked on an exciting journey to learn **React**. This project is the culmination of that experience – a testament to adapting to a new framework, which proved to be different but not insurmountable. It's built to showcase key functionalities of a journaling app, providing a clean and intuitive user experience.

-----

## 🚀 Live Demo & Repository

Explore the application in action:

  * **Live Application:** [https://angular-binding-99cb4.web.app/](https://angular-binding-99cb4.web.app/)
  * **GitHub Repository:** [https://github.com/PraveenRL/react-journaling](https://github.com/PraveenRL/react-journaling)

-----

## ✨ Features

The application is designed with a focus on ease of use and responsiveness across devices.

### Desktop View 🖥️

  * **Minimizable Sidenav:** A sleek sidebar provides primary navigation, which can be minimized to maximize screen real estate for content.
  * **Dashboard:**
      * An "Add Entry" button is prominently displayed at the top, allowing quick navigation to the entry creation page.
      * Below, a comprehensive table lists all journal entries, displaying details like title, date, description, associated tags, and mood icons.
      * Each entry in the table includes action buttons for "View," "Edit," and "Delete."
      * **View Entry Dialog:** Clicking "View" opens a clean dialog displaying the full description of the entry. Within this dialog, "Edit" button allows direct navigation to the edit page for that entry, and "Close" dismisses the dialog.
      * **Edit & Delete Actions:** Both the "Edit" button in the table and the "Edit" button within the View dialog navigate to the dedicated "Edit Entry" page. The "Delete" button triggers a confirmation dialog for secure record removal.
  * **Add/Edit Entry Page:**
      * A user-friendly form allows creation of new entries or modification of existing ones.
      * Users can input a title, select a date, add multiple tags (chip-based input), write a detailed description, and choose mood icons to express their feelings.
  * **Calendar Page:**
      * A full-page calendar provides a visual overview of entries.
      * Dates with associated journal entries are highlighted with a small dot.
      * Mood icons related to entries are displayed directly on the corresponding dates, offering a quick emotional snapshot.
      * Month navigation buttons allow seamless movement through the calendar.
      * Selecting a specific date displays all entries for that day below the calendar.

### Mobile View 📱

The mobile experience retains all core functionalities with thoughtful adaptations for touch-first interaction:

  * **Bottom Navigation:** The sidebar is replaced by a bottom navigation bar, providing intuitive access to main sections.
  * **Full-Page View Dialog:** Instead of a smaller dialog, viewing an entry opens a full-page dialog, ensuring a clear and immersive reading experience for detailed journal entries on smaller screens.

-----

## 🛠️ Technologies Used

  * **React v19:** The core JavaScript library for building user interfaces.
  * **Material UI:** A popular React UI framework for beautiful and responsive design components.
  * **React Router DOM (Simulated):** For client-side routing within the application.
  * **React Hook Form (Simulated):** For efficient and robust form management and validation.
  * **Custom CSS:** Hand-crafted CSS for precise styling and responsiveness, adhering to a defined design system.

-----

## 👨‍💻 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/PraveenRL/react-journaling.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd react-journaling
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Start the development server:**
    ```bash
    npm start dev
    # or
    yarn start dev
    ```
    The application will typically open in your browser at `http://localhost:3000` or `http://localhost:5173/`.

-----

## 🤝 Contributing

While this is a POC project, feel free to explore the codebase. For any suggestions or questions, please open an issue in the GitHub repository.

-----

## 📄 License

This project is open-sourced under the MIT License.

-----

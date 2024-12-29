# Task List Web Application

## Overview

The **Task List** web application is a modern and user-friendly tool designed to help users efficiently manage their tasks. With features such as filtering, theming, and task management, this application provides a seamless experience for organizing daily activities.

## Features

- **Task Management**:
  - Add new tasks.
  - Mark tasks as completed.
  - Delete tasks.
- **Filtering Options**:
  - View all tasks.
  - Filter by active tasks.
  - Filter by completed tasks.
- **Theming**:
  - Toggle between light and dark themes.
- **Persistent Data**:
  - Tasks are saved using the browser's Local Storage, ensuring data remains available even after refreshing the page.

## Technologies Used

- **React**:
  - Core framework for building the user interface.
- **React Hooks**:
  - For managing state and lifecycle events efficiently.
- **React Components**:
  - Modular and reusable UI elements.
- **CSS**:
  - For styling the application and supporting the light/dark theme.
- **Local Storage**:
  - To persist user data across sessions.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-list.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-list
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000/`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be available in the `build/` directory.

## Usage

1. Open the application in your browser.
2. Add new tasks using the input field.
3. Use the filtering options to sort tasks by status.
4. Toggle the theme switch to switch between light and dark modes.
5. All changes are automatically saved to Local Storage.

## Project Structure

- `src/components`: Contains reusable React components.
- `src/styles`: CSS files for styling the application.
- `src/utils`: Utility functions for managing Local Storage and other helpers.

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Inspired by the need for a simple and efficient task management tool.
- Built with React and modern web development practices.

---

Enjoy using the **Task List** application! For any questions or issues, feel free to contact the project maintainer.

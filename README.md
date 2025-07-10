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
  - Tasks are stored in the database, and interaction takes place through Axios

## Technologies Used

- **React**:
  - Core framework for building the user interface.
- **React Hooks**:
  - For managing state and lifecycle events efficiently.
- **React Components**:
  - Modular and reusable UI elements.
- **React Context**:
  - For storing states.
- **Axios**:
  - Interaction with the backend.
- **CSS**:
  - For styling the application and supporting the light/dark theme.
- **Local Storage**:
  - Saving a theme.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/d-r-a-k-e-n/Task-list-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Task-list-frontend
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

## Acknowledgments

- Inspired by the need for a simple and efficient task management tool.
- Built with React and modern web development practices.

---

Enjoy using the **Task List** application! For any questions or issues, feel free to contact the project maintainer.

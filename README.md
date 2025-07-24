# Neurowarn Website

## About The Project

This repository contains the source code for the official website of **Neurowarn**, a research project dedicated to enhancing safety in EEG-controlled wheelchairs. The system leverages a Recurrent Neural Network (RNN) to predict potential hazards from sensor data and provide timely warnings, creating a safer and more reliable mobility experience for users with severe motor disabilities.

This website serves as a central hub for information about the project, showcasing the technology, the research findings, and the team behind it.

## Key Features

*   **Modern Tech Stack:** Built with **Next.js 15**, **React 19**, and **TypeScript** for a fast, modern, and type-safe web experience.
*   **Interactive UI:** Features a dynamic 3D carousel on the homepage to showcase project components, animated with **Framer Motion**.
*   **Responsive Design:** Styled with **Tailwind CSS** for a fully responsive and accessible interface that looks great on all devices.
*   **Integrated Document Viewer:** Includes an embedded PDF viewer to read the full research paper and user manual directly on the site, with options to download or open in a new tab.
*   **Detailed Content Pages:**
    *   **Home:** An engaging landing page with a project overview, key performance metrics (94% accuracy, 4.27/5 user satisfaction), and a promotional video.
    *   **About:** Introduces the five-member team with contact information and links to related articles and social media posts.
    *   **Paper:** Provides direct access to the research paper and user manual, along with special acknowledgments for contributors.

## Built With

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Library:** [React](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and a package manager (npm, yarn, or pnpm) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/mattenarle10/neurowarn-site.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd neurowarn-site
    ```
3.  Install the required dependencies:
    ```sh
    npm install
    ```

### Running the Application

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website. The page will auto-update as you make edits to the source files.

## Available Scripts

In the project directory, you can run the following commands:

*   `npm run dev`: Starts the application in development mode.
*   `npm run build`: Creates a production-ready build of the application.
*   `npm run start`: Starts a Next.js production server after a build has been created.
*   `npm run lint`: Runs ESLint to analyze the code for potential errors and style issues.

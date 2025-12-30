# React Quiz Application

A dynamic and interactive quiz application built with React and Vite. Test your React knowledge with multiple-choice questions, real-time feedback, and a detailed summary of your performance.

## 🚀 Features

- **Timed Questions**: Each question has a time limit (10 seconds), with a visual progress bar.
- **Real-time Feedback**: Instant visual feedback (Correct, Wrong, Answered) when selecting an option.
- **Dynamic Shuffling**: Answers are shuffled for every question to provide a fresh experience.
- **Automatic Question Skipping**: Skips to the next question if the timer runs out.
- **Detailed Summary**: A comprehensive overview at the end of the quiz, including:
  - Percentage of skipped, correctly answered, and incorrectly answered questions.
  - A list of all questions with your answers highlighted by correctness.
- **Responsive Design**: Modern and sleek UI that works across different screen sizes.

## 🛠️ Built With

- **React 19**: Modern functional components and hooks (`useState`, `useEffect`, `useCallback`, `useRef`).
- **Vite**: Ultra-fast development server and build tool.
- **Vanilla CSS**: Custom-styled components for a premium look and feel.

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Navigate to the project directory:
   ```bash
   cd react-quiz
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📁 Project Structure

- `src/components/`: Reusable React components (`Quiz`, `Question`, `Answers`, `QuestionTimer`, `Summary`).
- `src/assets/`: Static assets like images and logos.
- `src/questions.js`: Centralized data source for quiz questions.
- `src/App.jsx`: Main application entry point.

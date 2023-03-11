import { Route, Routes } from "react-router";
import { Counter } from "./pages/counter/counter-page";
import { GuessTheNumberPage } from "./pages/guess-the-number/guess-the-number-page";

export type Challenge = {
  name: string;
  link: string;
  isActive: boolean;
  element?: JSX.Element;
  description?: string;
};

export const challenges: Challenge[] = [
  {
    name: "Counter",
    link: "counter",
    isActive: true,
    element: <Counter />,
    description:
      "Implement a simple counter, with plus & minus buttons and allow for changing the increment/decrement step",
  },
  {
    name: "Guess The Number",
    link: "guess-the-number",
    isActive: true,
    element: <GuessTheNumberPage />,
    description: "A simple guess the number game from 0-100!",
  },
];

export const ChallengesRoutes = () => {
  return (
    <Routes>
      {challenges.map((challenge) => {
        return (
          <Route
            key={challenge.link}
            path={challenge.link}
            element={challenge.element}
          />
        );
      })}
    </Routes>
  );
};

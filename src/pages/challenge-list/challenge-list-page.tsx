import { Flex, HStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { Page } from "../../components/page/base-page";
import { Counter } from "../counter/counter-page";
import { GuessTheNumberPage } from "../guess-the-number/guess-the-number-page";
import { ChallengeCard } from "./components/challange-card";

export type Challenge = {
  name: string;
  link: string;
  isActive: boolean;
  element?: JSX.Element;
  description?: string;
};

const challenges: Challenge[] = [
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
    isActive: false,
    element: <GuessTheNumberPage />,
    description: "Coming Soon",
  },
];

export const ChallengeListPage = () => {
  return (
    <Page>
      <Flex justifyContent="space-evenly" flexWrap="wrap">
        {challenges.map((challenge) => {
          return <ChallengeCard key={challenge.name} challenge={challenge} />;
        })}
      </Flex>
    </Page>
  );
};

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

import { Flex, HStack, Stack } from "@chakra-ui/react";
import { challenges } from "../../challenges";
import { Page } from "../../components/page/base-page";
import { ChallengeCard } from "./components/challange-card";

export const ChallengeListPage = () => {
  return (
    <Page>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-evenly"
      >
        {challenges.map((challenge) => {
          return <ChallengeCard key={challenge.name} challenge={challenge} />;
        })}
      </Flex>
    </Page>
  );
};

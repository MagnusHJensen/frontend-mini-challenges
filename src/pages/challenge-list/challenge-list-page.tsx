import { Flex, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { challenges } from "../../challenges";
import { Page } from "../../components/page/base-page";
import { ChallengeCard } from "./components/challange-card";

export const ChallengeListPage = () => {
  return (
    <Page>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {challenges.map((challenge) => {
          return <ChallengeCard key={challenge.name} challenge={challenge} />;
        })}
      </SimpleGrid>
    </Page>
  );
};

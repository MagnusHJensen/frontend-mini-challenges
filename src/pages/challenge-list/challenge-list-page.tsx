import { Flex } from "@chakra-ui/react";
import { challenges } from "../../challenges";
import { Page } from "../../components/page/base-page";
import { ChallengeCard } from "./components/challange-card";

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

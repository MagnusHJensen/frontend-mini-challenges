import { Heading, VStack } from "@chakra-ui/react";
import { Page } from "../../components/page/base-page";

export const Home = () => {
  return (
    <Page>
      <VStack align="center">
        <Heading>Hello Home!</Heading>
      </VStack>
    </Page>
  );
};

import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "../navbar/navbar";

type Props = {
  children?: React.ReactNode;
};

export const Page = ({ children }: Props) => {
  return (
    <Box width="100%" height="100vh">
      <Navbar />
      <Container maxWidth="container.xl">{children}</Container>
    </Box>
  );
};

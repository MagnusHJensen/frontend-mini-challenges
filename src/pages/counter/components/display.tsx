import { Heading } from "@chakra-ui/react";

type Props = {
  count: number;
};

export const Display = ({ count }: Props) => {
  return <Heading>{count}</Heading>;
};

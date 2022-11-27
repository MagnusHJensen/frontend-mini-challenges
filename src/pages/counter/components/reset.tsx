import { Button } from "@chakra-ui/react";

type Props = {
  resetCount: () => void;
};

export const Reset = ({ resetCount }: Props) => {
  return <Button onClick={resetCount}>Reset</Button>;
};

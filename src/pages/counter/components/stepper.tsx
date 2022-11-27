import { Button, HStack } from "@chakra-ui/react";

type Props = {
  incrementCount: () => void;
  decrementCount: () => void;
};

export const Stepper = ({ incrementCount, decrementCount }: Props) => {
  return (
    <HStack>
      <Button onClick={decrementCount}>-</Button>
      <Button onClick={incrementCount}>+</Button>
    </HStack>
  );
};

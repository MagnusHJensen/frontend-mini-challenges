import { Text } from "@chakra-ui/react";

type Props = {
  tooHigh: boolean | null;
  hasWon: boolean;
};

export const HelperText = ({ tooHigh, hasWon }: Props) => {
  if (hasWon) {
    return <Text>Congratulations! You have won!</Text>;
  }

  if (tooHigh === null) {
    return null;
  }

  if (tooHigh) {
    return <Text>Too high!</Text>;
  }

  return <Text>Too low!</Text>;
};

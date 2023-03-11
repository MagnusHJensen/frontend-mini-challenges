import { Text } from "@chakra-ui/react";

type Props = {
  guesses: number[];
};

export const GuessesShower = ({ guesses }: Props) => {
  if (guesses.length == 0) {
    return null;
  }

  return (
    <Text>
      Your guess{guesses.length > 1 ? "es" : ""}{" "}
      {guesses.length > 1 ? "are" : "is"}: {guesses.join(", ")}
    </Text>
  );
};

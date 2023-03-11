import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Page } from "../../components/page/base-page";
import { GuessesShower } from "./components/guesses";
import { HelperText } from "./components/helper-text";
import { Input } from "./components/input";

export const GuessTheNumberPage = () => {
  const [guesses, setGuesses] = useState<number[]>([]);
  const [valueToGuess, setValueToGuess] = useState(generateRandomGuess());
  const [isInvalidGuess, setIsInvalidGuess] = useState(false);
  const [isLatestGuessTooHigh, setIsLatestGuessToHigh] = useState<
    boolean | null
  >(null);
  const [hasWon, setHasWon] = useState(false);
  const [currentGuess, setCurrentGuess] = useState(0);

  function generateRandomGuess() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function submitGuess() {
    if (isInvalidGuess) {
      return;
    }
    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    if (newGuesses.includes(currentGuess)) {
      setIsInvalidGuess(true);
    }
    if (currentGuess === valueToGuess) {
      setHasWon(true);
      setIsLatestGuessToHigh(null);
    } else if (currentGuess < valueToGuess) {
      setIsLatestGuessToHigh(false);
    } else {
      setIsLatestGuessToHigh(true);
    }
  }

  function updateCurrentGuess(value: number) {
    setCurrentGuess(value);
    if (guesses.includes(value)) {
      setIsInvalidGuess(true);
      return;
    }
    if (isInvalidGuess) setIsInvalidGuess(false);
  }

  return (
    <Page>
      <VStack>
        <Heading>Guess The Number</Heading>
        <Text>Enter a guess between 0 and 100</Text>
        <Input
          currentGuess={currentGuess}
          setCurrentGuess={updateCurrentGuess}
          isInvalidGuess={isInvalidGuess}
          hasWon={hasWon}
        />
        <Button onClick={submitGuess} disabled={isInvalidGuess}>
          Submit guess
        </Button>
        <HelperText tooHigh={isLatestGuessTooHigh} hasWon={hasWon} />
        <GuessesShower guesses={guesses} />
      </VStack>
    </Page>
  );
};

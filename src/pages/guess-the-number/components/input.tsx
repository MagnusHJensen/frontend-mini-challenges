import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

type Props = {
  currentGuess: number;
  setCurrentGuess: (value: number) => void;
  isInvalidGuess: boolean;
  hasWon: boolean;
};

export const Input = ({
  currentGuess,
  setCurrentGuess,
  isInvalidGuess,
  hasWon,
}: Props) => {
  return (
    <NumberInput
      onChange={(value) => {
        value && !isNaN(parseInt(value)) && setCurrentGuess(parseInt(value));
      }}
      value={currentGuess}
      max={100}
      min={0}
      clampValueOnBlur
      allowMouseWheel
      isInvalid={isInvalidGuess && !hasWon}
      isDisabled={hasWon}
    >
      <NumberInputField placeholder="Enter a number" />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

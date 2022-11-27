import {
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";

type Props = {
  countStep: number;
  setCountStep: (value: number) => void;
};

export const Adjuster = ({ countStep, setCountStep }: Props) => {
  return (
    <HStack>
      <Text>Increment/Decrement by: </Text>
      <NumberInput
        allowMouseWheel
        width="100px"
        min={1}
        defaultValue={countStep}
        onChange={(value) =>
          value && !isNaN(parseInt(value)) && setCountStep(parseInt(value))
        }
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </HStack>
  );
};

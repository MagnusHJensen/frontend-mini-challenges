import { Box, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Page } from "../../components/page/base-page";
import { Adjuster } from "./components/adjuster";
import { Display } from "./components/display";
import { Reset } from "./components/reset";
import { Stepper } from "./components/stepper";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [countStep, setCountStep] = useState(1);

  function incrementCount() {
    setCount(count + countStep);
  }

  function decrementCount() {
    setCount(count - countStep);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <Page>
      <VStack align="center" spacing={8}>
        <Heading>Counter</Heading>
        <VStack>
          <Display count={count} />
          <Stepper
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
          <Adjuster countStep={countStep} setCountStep={setCountStep} />
          <Reset resetCount={resetCount} />
        </VStack>
      </VStack>
    </Page>
  );
};

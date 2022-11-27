import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Challenge } from "../challenge-list-page";

type Props = {
  challenge: Challenge;
};

export const ChallengeCard = ({ challenge }: Props) => {
  if (!challenge.isActive) {
    return <InactiveCard challenge={challenge} />;
  }

  return (
    <Link to={challenge.link}>
      <ActiveCard challenge={challenge} />
    </Link>
  );
};

const ActiveCard = ({ challenge }: Props) => {
  return (
    <Card
      align="center"
      variant="elevated"
      minWidth="22vw"
      maxWidth="22vw"
      marginTop="15px"
    >
      <CardHeader>
        <Heading>{challenge.name}</Heading>
      </CardHeader>
      <Divider width="80%" />
      <CardBody>
        <Text>{challenge.description}</Text>
      </CardBody>
    </Card>
  );
};

const InactiveCard = ({ challenge }: Props) => {
  return (
    <Card
      align="center"
      variant="filled"
      minWidth="22vw"
      maxW="22vw"
      marginTop="15px"
      cursor="not-allowed"
    >
      <CardHeader>
        <Heading textColor="gray.500">{challenge.name}</Heading>
      </CardHeader>
      <Divider width="80%" />
      <CardBody>
        <Text textColor="gray.500">{challenge.description}</Text>
      </CardBody>
    </Card>
  );
};

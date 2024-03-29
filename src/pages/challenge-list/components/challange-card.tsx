import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Challenge } from "../../../challenges";

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
    <Card align="center" variant="elevated" marginTop="15px" minHeight="200px">
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
      marginTop="15px"
      cursor="not-allowed"
      minHeight="200px"
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

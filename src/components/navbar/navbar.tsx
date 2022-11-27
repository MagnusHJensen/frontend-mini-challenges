import { Box, HStack, Icon, Link } from "@chakra-ui/react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

type NavigationElement = {
  text: string;
  link: string;
};

const navigationElements: NavigationElement[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Challenges",
    link: "/challenges",
  },
];

export const Navbar = () => {
  return (
    <HStack
      padding="1rem"
      width="100%"
      backgroundColor="gray.500"
      justifyContent="space-between"
    >
      <HStack>
        {navigationElements.map((navElement) => {
          return (
            <Link
              to={navElement.link}
              key={navElement.text}
              color="white"
              as={RouterLink}
            >
              {navElement.text}
            </Link>
          );
        })}
      </HStack>
      <Box>
        <Link
          href="https://github.com/MagnusHJensen/frontend-challenges"
          target="_blank"
        >
          <Icon width="32px" height="32px" as={FaGithub} />
        </Link>
      </Box>
    </HStack>
  );
};

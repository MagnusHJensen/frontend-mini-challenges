import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  HStack,
  Icon,
  IconButton,
  Link,
  Show,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { FaBars, FaGithub, FaHamburger } from "react-icons/fa";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO: Fix this mess of a navbar.

  const navItems: JSX.Element = (
    <Stack direction={{ md: "row", base: "column" }}>
      {navigationElements.map((navElement) => {
        return (
          <Link to={navElement.link} key={navElement.text} as={RouterLink}>
            {navElement.text}
          </Link>
        );
      })}
    </Stack>
  );

  return (
    <Box padding="1rem" width="100%" backgroundColor="gray.500">
      <Flex
        justifyContent={{ base: "space-between", md: "flex-start" }}
        width="100%"
        alignItems="center"
      >
        <Box mr={8} width="fit-content">
          <Text>Frontend Challenges</Text>
        </Box>
        <Show above="md">
          <Flex
            justifyContent="space-between"
            width="80%"
            alignItems="center"
            textColor="white"
          >
            {navItems}

            <Box>
              <Link
                href="https://github.com/MagnusHJensen/frontend-mini-challenges"
                target="_blank"
              >
                <Icon width="32px" height="32px" as={FaGithub} />
              </Link>
            </Box>
          </Flex>
        </Show>
        <Hide above="md">
          <Drawer
            placement="left"
            isOpen={isOpen}
            onClose={onClose}
            closeOnEsc
            closeOnOverlayClick
          >
            <DrawerOverlay />
            <DrawerContent textColor="black">
              <DrawerHeader>Frontend Challenges</DrawerHeader>
              <DrawerBody>{navItems}</DrawerBody>
            </DrawerContent>
          </Drawer>
          <IconButton
            variant="ghost"
            _hover={{ transform: "scale(1.2)", textColor: "white" }}
            _active={{}}
            icon={<FaBars />}
            aria-label="Hamburger menu"
            onClick={onOpen}
          />
        </Hide>
      </Flex>
    </Box>
  );
};

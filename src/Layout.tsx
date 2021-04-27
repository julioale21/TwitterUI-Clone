import React from "react";
import {
  Icon,
  Stack,
  Container,
  Text,
  Box,
  Button,
  Image,
  StackDivider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsHash,
  BsHouse,
  BsList,
  BsPerson,
  BsThreeDots,
  BsHouseFill,
  BsBellFill,
  BsEnvelopeFill,
  BsBookmarkFill,
  BsPersonFill,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { IconType } from "react-icons/lib";

interface ListLink {
  href: string;
  text: string;
  activeIcon: IconType;
  inactiveIcon: IconType;
}

const LINKS: ListLink[] = [
  {
    href: "/home",
    text: "Inicio",
    activeIcon: BsHouseFill,
    inactiveIcon: BsHouse,
  },
  {
    href: "/explore",
    text: "Explorar",
    activeIcon: BsHash,
    inactiveIcon: BsHash,
  },
  {
    href: "/notifications",
    text: "Notificaciones",
    activeIcon: BsBellFill,
    inactiveIcon: BsBell,
  },
  {
    href: "/messages",
    text: "Mensajes",
    activeIcon: BsEnvelopeFill,
    inactiveIcon: BsEnvelope,
  },
  {
    href: "/saved",
    text: "Guardados",
    activeIcon: BsBookmarkFill,
    inactiveIcon: BsBookmark,
  },
  {
    href: "/ended",
    text: "Listos",
    activeIcon: BsList,
    inactiveIcon: BsList,
  },
  {
    href: "/profile",
    text: "Perfil",
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson,
  },
  {
    href: "/options",
    text: "Mas opciones",
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots,
  },
];

const Layout: React.FC = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("primary.500", undefined);
  const userColor = useColorModeValue(undefined, "white");
  const { pathname } = useLocation();

  return (
    <Container alignSelf="center" height="100%" maxWidth="container.xl" paddingX={0}>
      <Stack direction="row" divider={<StackDivider />} height="100%" spacing={0}>
        <Stack justifyContent="space-between">
          <Stack minWidth={72} paddingX={6} paddingY={3} spacing={8}>
            <Stack spacing={5}>
              <Icon
                as={FaTwitter}
                color={logoColor}
                height={7}
                width={7}
                onClick={toggleColorMode}
              />
              <Stack fontSize="xl" fontWeight="bold" spacing={7}>
                {LINKS.map((link) => (
                  <Link key={link.href} to={link.href}>
                    <Stack
                      alignItems="center"
                      color={pathname === link.href ? "primary.500" : "inherit"}
                      direction="row"
                      spacing={5}
                    >
                      <Icon
                        as={pathname === link.href ? link.activeIcon : link.inactiveIcon}
                        height={6}
                        width={6}
                      />
                      <Text fontSize="lg" fontWeight="bold">
                        {link.text}
                      </Text>
                    </Stack>
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Button colorScheme="primary" size="md">
              Twittear
            </Button>
          </Stack>
          <Stack alignItems="center" direction="row" justifyContent="space-between" padding={4}>
            <Stack alignItems="center" direction="row">
              <Image borderRadius="50%" height={10} src="//placehold.it/64x64" width={10} />
              <Stack spacing={0}>
                <Text color={userColor} fontSize="sm" fontWeight="bold">
                  julio romero
                </Text>
                <Text color="gray.600" fontSize="sm">
                  @julioale21
                </Text>
              </Stack>
            </Stack>
            <Icon as={BsThreeDots} />
          </Stack>
        </Stack>
        <Box paddingX={4} width="50%">
          {children}
        </Box>
      </Stack>
    </Container>
  );
};

export default Layout;

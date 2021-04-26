import React from "react";
import {
  Icon,
  Stack,
  Container,
  Text,
  Box,
  Button,
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
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Layout: React.FC = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("primary.500", undefined);

  return (
    <Container alignSelf="center" height="100%" maxWidth="container.lg" paddingX={0}>
      <Stack direction="row" divider={<StackDivider />} height="100%">
        <Stack minWidth={72} paddingX={6} paddingY={3} spacing={8}>
          <Link to="/">
            <Icon
              as={FaTwitter}
              color={logoColor}
              height={7}
              width={7}
              onClick={toggleColorMode}
            ></Icon>
          </Link>
          <Stack spacing={6}>
            <Link to="/">
              <Stack alignItems="center" direction="row" spacing={6}>
                <Icon as={BsHouse} height={6} width={6} />
                <Text fontSize="lg" fontWeight="bold">
                  Inicio
                </Text>
              </Stack>
            </Link>
            <Stack alignItems="center" direction="row" spacing={6}>
              <Icon as={BsHash} height={6} width={6} />
              <Text fontSize="lg" fontWeight="bold">
                Explorar
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={6}>
              <Icon as={BsBell} height={6} width={6} />
              <Text fontSize="lg" fontWeight="bold">
                Notificaciones
              </Text>
            </Stack>
            <Link to="/messages">
              <Stack alignItems="center" direction="row" spacing={6}>
                <Icon as={BsEnvelope} height={6} width={6} />
                <Text fontSize="lg" fontWeight="bold">
                  Mensajes
                </Text>
              </Stack>
            </Link>
            <Stack alignItems="center" direction="row" spacing={6}>
              <Icon as={BsBookmark} height={6} width={6} />
              <Text fontSize="lg" fontWeight="bold">
                Guardados
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={6}>
              <Icon as={BsList} height={6} width={6} />
              <Text fontSize="lg" fontWeight="bold">
                Listos
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={6}>
              <Icon as={BsPerson} height={6} width={6} />
              <Text fontSize="lg" fontWeight="bold">
                Perfil
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={6}>
              <Icon as={BsThreeDots} height={6} width={6} />
              <Text fontSize="lg" fontWeight="bold">
                Mas opciones
              </Text>
            </Stack>
          </Stack>
          <Button colorScheme="primary" size="md">
            Twittear
          </Button>
        </Stack>
        <Box paddingX={4}>{children}</Box>
      </Stack>
    </Container>
  );
};

export default Layout;

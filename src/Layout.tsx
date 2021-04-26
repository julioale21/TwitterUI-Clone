import React from "react";
import { Icon, Stack, Container, Text, Box, Button } from "@chakra-ui/react";
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
  return (
    <Container alignSelf="center" height="100%" maxWidth="container.lg" paddingX={0}>
      <Stack direction="row" height="100%">
        <Stack
          borderRightColor="gray.700"
          borderRightWidth={1}
          paddingLeft={4}
          paddingRight={12}
          paddingY={4}
          spacing={8}
        >
          <Link to="/">
            <Icon as={FaTwitter} height={6} width={6}></Icon>
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
          <Button colorScheme="primary" size="lg">
            Twittear
          </Button>
        </Stack>
        <Box paddingX={4}>{children}</Box>
      </Stack>
    </Container>
  );
};

export default Layout;

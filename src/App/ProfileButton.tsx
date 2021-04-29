import React from "react";
import { Stack, StackProps, Image, Text, Icon } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const ProfileButton: React.FC<StackProps> = (props) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      padding={4}
      {...props}
    >
      <Stack alignItems="center" direction="row" spacing={3}>
        <Image
          borderRadius="50%"
          height={10}
          src="https://pbs.twimg.com/profile_images/1014123067088437248/IlRL5q39_400x400.jpg"
          width={10}
        />
        <Stack spacing={0}>
          <Text fontSize="sm" fontWeight="bold" lineHeight="normal">
            julio romero
          </Text>
          <Text color="gray.500" fontSize="xs" lineHeight="normal">
            @julioale21
          </Text>
        </Stack>
      </Stack>
      <Icon as={BsThreeDots} />
    </Stack>
  );
};

export default ProfileButton;

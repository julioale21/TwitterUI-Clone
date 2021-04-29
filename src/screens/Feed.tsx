import React from "react";
import {
  Button,
  Stack,
  SkeletonText,
  SkeletonCircle,
  Skeleton,
  StackDivider,
  Text,
  Icon,
  Image,
  Textarea,
  CircularProgress,
  Box,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { BsPlus, BsStar } from "react-icons/bs";
import {
  AiOutlineSmile,
  AiOutlineGif,
  AiOutlineCalendar,
  AiOutlineFileImage,
} from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const TWEETS = Array(12)
  .fill(true)
  .map((_, index) => index);

const FeedScreen: React.FC = () => {
  const progressColor = useColorModeValue("gray.50", "whiteAlpha.300");

  return (
    <Stack direction="row" divider={<StackDivider />} height="100%" spacing={0}>
      <Stack divider={<StackDivider />} maxWidth={600} spacing={0} width="100%">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          paddingX={4}
          paddingY={3}
        >
          <Text fontSize="xl" fontWeight="bolder">
            Inicio
          </Text>
          <Icon as={BsStar} color="primary.500" height={5} width={5} />
        </Stack>
        <Stack direction="row" paddingX={4} paddingY={2} spacing={4}>
          <Image
            borderRadius="50%"
            height={12}
            src="https://pbs.twimg.com/profile_images/1014123067088437248/IlRL5q39_400x400.jpg"
            width={12}
          />
          <Stack divider={<StackDivider />} spacing={3} width="100%">
            <Textarea fontSize="xl" fontWeight="500" variant="unstyled" />
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack color="primary.500" direction="row" spacing={4}>
                <Icon as={AiOutlineFileImage} height={6} width={6} />
                <Icon as={AiOutlineGif} height={6} width={6} />
                <Icon as={RiBarChartHorizontalLine} height={6} width={6} />
                <Icon as={AiOutlineSmile} height={6} width={6} />
                <Icon as={AiOutlineCalendar} height={6} width={6} />
              </Stack>
              <Stack direction="row" spacing={3}>
                <Stack alignItems="center" direction="row" divider={<StackDivider />} spacing={4}>
                  <CircularProgress
                    color="primary.500"
                    size={6}
                    trackColor={progressColor}
                    value={20}
                  />
                  <Box
                    alignItems="center"
                    as="button"
                    borderColor="primary.500"
                    borderRadius="50%"
                    borderWidth={1}
                    cursor="pointer"
                    display="flex"
                    height={8}
                    justifyContent="center"
                    position="relative"
                    width={8}
                  >
                    <Icon
                      as={BsPlus}
                      color="primarry.500"
                      height={6}
                      position="absolute"
                      width={6}
                    />
                  </Box>
                </Stack>
                <Button colorScheme="primary">Twittear</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider borderBottomWidth={6} borderTopWidth={6}></Divider>
        <Stack
          divider={<StackDivider />}
          flex={1}
          maxHeight="100vh"
          overflowY="auto"
          spacing={0}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          width="100%"
        >
          {TWEETS.map((index) => (
            <Stack key={index} direction="row" padding={4} spacing={4} width="100%">
              <SkeletonCircle height={12} minHeight={12} minWidth={12} width={12} />
              <Stack spacing={4} width="100%">
                <Stack alignItems="flex-end" direction="row" spacing={2}>
                  <Skeleton height={6} width="120px" />
                  <Skeleton height={3} width="80px" />
                </Stack>
                <SkeletonText height={36} noOfLines={6} />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeedScreen;

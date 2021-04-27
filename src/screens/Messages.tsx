import { Stack, SkeletonText, SkeletonCircle, Skeleton } from "@chakra-ui/react";
import React from "react";

const TWEETS = Array(12)
  .fill(true)
  .map((_, index) => index);

const MessagesScreen: React.FC = () => {
  return (
    <Stack maxHeight="100vh" overflowY="auto" paddingY={12} spacing={6}>
      {TWEETS.map((index) => (
        <Stack key={index} spacing={4}>
          <Stack alignItems="center" direction="row" spacing={4}>
            <SkeletonCircle height={12} width={12} />
            <Stack>
              <Skeleton height={6} width="120px" />
              <Skeleton height={3} width="80px" />
            </Stack>
          </Stack>
          <SkeletonText height={36} noOfLines={6} />
        </Stack>
      ))}
    </Stack>
  );
};

export default MessagesScreen;

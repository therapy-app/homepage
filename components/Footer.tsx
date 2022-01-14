import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <Box bg={"gray.50"}>
      <Container maxW={"container.xl"} py={4}>
        <VStack spacing={15} align={'flex-start'}>
          <Image src="logo.png" alt=""></Image>
          <Text>© 2022 therapyapp. All rights reserved</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;

import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <Box bg={"gray.50"}>
      <Container maxW={"container.xl"} py={4}>
        <Flex align={'center'}>
          <Text>© 2022 therapyapp. All rights reserved</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

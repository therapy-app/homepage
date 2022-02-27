import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
  Image
} from "@chakra-ui/react";
import { NextPage } from "next";
import Nav from "../../components/Nav";

const LandingSection: NextPage = () => {
  return (
    <Box minH={"100vh"}>
      <Nav></Nav>
      <Container maxW={'2000'} pos={'relative'} overflow={'hidden'}>
        <Container maxW={"container.xl"} my={10}>
          <Flex
            alignItems={"center"}
            height={650}
            justifyContent={"space-between"}
          >
            <VStack align={"flex-start"} spacing={5}>
              <Heading as={"h1"} fontSize="7xl">
                Let your practice
                <Text
                  bgGradient="linear(to-l, #36D1DC, #5B86E5)"
                  bgClip="text"
                  fontSize="7xl"
                  fontWeight="extrabold"
                >
                  {" "}
                  feel relief.
                </Text>
              </Heading>
              <Text fontSize="2xl">Improve your workflow, reduce chaos.</Text>
              <Link href={"https://my.therapyapp.ch/auth/signup"}>
                <Button size={"lg"}>
                  <Text>
                    Join the <i>free</i> alpha
                  </Text>
                </Button>
              </Link>
              {/* <Text fontSize={"lg"}>
                <Link href={"https://my.therapyapp.ch/auth/signup"}>
                  Join the alpha
                </Link>{" "}
                as an earlybird and enjoy{" "}
                <Link href={"pricing"}>discounted offers</Link>. 🐦
              </Text> */}
            </VStack>
            <Image right={{base: 0, md: -75}} rounded='md' top={{base: 675, md: 200}} width={{base: 500, md: 650, xl: 1000}} pos={'absolute'} zIndex={'-1'} src="dashboard-3d.png" alt="Image showing dashboard."></Image>
          </Flex>
        </Container>
      </Container>
    </Box>
  );
};

export default LandingSection;

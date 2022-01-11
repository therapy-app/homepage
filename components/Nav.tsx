import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Popover,
  PopoverTrigger,
  Text,
  Link,
  PopoverContent,
  Stack,
} from "@chakra-ui/react";
import { NextPage } from "next";

const Nav: NextPage = () => {
  return (
    <Flex justify={"space-between"} py="3" px="6" alignItems="center">
      <Link href={"/"}>
        <a>
          <Heading as="h3" size="md">
            therapyapp
          </Heading>
        </a>
      </Link>
      <HStack spacing={5}>
        <a>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Text fontSize="md" fontWeight={700}>
                  Features
                </Text>
              </Link>
            </PopoverTrigger>
            <PopoverContent
              border={0}
              boxShadow={"xl"}
              p={4}
              rounded={"xl"}
              minW={"sm"}
            >
              <Stack>
                <Link
                  href={"#patients"}
                  role={"group"}
                  display={"block"}
                  p={2}
                  rounded={"md"}
                >
                  <Stack direction={"row"} align={"center"}>
                    <Box>
                      <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                      >
                        Patients
                      </Text>
                      <Text fontSize={"sm"}>Patients</Text>
                    </Box>
                    <Flex
                      transition={"all .3s ease"}
                      transform={"translateX(-10px)"}
                      opacity={0}
                      _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                      }}
                      justify={"flex-end"}
                      align={"center"}
                      flex={1}
                    ></Flex>
                  </Stack>
                </Link>
                <Link
                  href={"#analytics"}
                  role={"group"}
                  display={"block"}
                  p={2}
                  rounded={"md"}
                >
                  <Stack direction={"row"} align={"center"}>
                    <Box>
                      <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                      >
                        Analytics
                      </Text>
                      <Text fontSize={"sm"}>Analytics</Text>
                    </Box>
                    <Flex
                      transition={"all .3s ease"}
                      transform={"translateX(-10px)"}
                      opacity={0}
                      _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                      }}
                      justify={"flex-end"}
                      align={"center"}
                      flex={1}
                    ></Flex>
                  </Stack>
                </Link>
              </Stack>
            </PopoverContent>
          </Popover>
        </a>
        <a>
          <Text fontSize="md" fontWeight={700}>
            FAQ
          </Text>
        </a>
        <Link href={"pricing"}>
          <a>
            <Text fontSize="md" fontWeight={700}>
              Pricing
            </Text>
          </a>
        </Link>
      </HStack>
      <HStack>
        <Link href={"https://my.therapyapp.ch/auth/signin"}>
          <a>
            <Button variant="outline">Sign In</Button>
          </a>
        </Link>
        <Link href={"https://my.therapyapp.ch/auth/signup"}>
          <a>
            <Button variant="solid">Sign Up</Button>
          </a>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Nav;

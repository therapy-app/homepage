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
  Icon,
  Image,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { FcBarChart, FcCalendar, FcCollaboration } from "react-icons/fc";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IconType } from "react-icons";
import logo from '../public/logo.png';

const PopUpItem = ({ href, title, description, icon, iconColor } : { href: string, title: string, description: string, icon: IconType, iconColor: string } ) => {
  return (
    <Link
      href={ href }
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ textDecoration: "none", bg: "blue.50" }}
    >
      <Stack direction={"row"} align={"center"}>
        <HStack spacing={4}>
          <Icon color={iconColor} w={6} h={6} as={icon} />
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "blue.400" }}
              fontWeight={560}
            >
              {title}
            </Text>
            <Text fontSize={"sm"} color={"gray"}>
              {description}
            </Text>
          </Box>
        </HStack>
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
        >
          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const Nav: NextPage = () => {
  return (
    <Flex justify={"space-between"} py="3" px="6" alignItems="center">
      <Link href={"/"} _hover={{ textDecoration: "none" }}>
        <Box width={200}>
          <Image src={logo.src} alt="Image showing company logo with therapyapp as text."></Image>
        </Box>
      </Link>
      <HStack spacing={5} d={{base: 'none', md: 'flex'}}>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              _hover={{ textDecoration: "none", color: "gray.500" }}
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
              <PopUpItem href="/#analytics" title="Advanced Analytics" description="Analyse your workflow" icon={FcBarChart} iconColor="green.400"></PopUpItem>
              <PopUpItem href="/#appointments" title="Appointment Management" description="Appointments, time tracking and more" icon={FcCalendar} iconColor="red.400"></PopUpItem>
              <PopUpItem href="/#patients" title="Patient Management" description="Manage patient data easily" icon={FcCollaboration} iconColor="purple.400"></PopUpItem>
            </Stack>
          </PopoverContent>
        </Popover>
        <Link href={"#faq"} _hover={{ textDecoration: "none", color: "gray.500" }}>
          <Text fontSize="md" fontWeight={700}>
            FAQ
          </Text>
        </Link>
        <Link href={"/pricing"} _hover={{ textDecoration: "none", color: "gray.500" }}>
          <Text fontSize="md" fontWeight={700}>
            Pricing
          </Text>
        </Link>
      </HStack>
      <HStack>
        <Link href={"https://my.therapyapp.ch/auth/signin"} _hover={{ textDecoration: "none" }}>
          <Button variant="outline">Sign In</Button>
        </Link>
        <Link href={"https://my.therapyapp.ch/auth/signup"} _hover={{ textDecoration: "none" }}>
          <Button variant="solid">Sign Up</Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Nav;

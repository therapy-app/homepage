import { Box, Container, Flex, Heading, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface FeatureProps {
    title: string;
    text: string;
    icon: IconType;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          <Icon as={icon} w={10} h={10} />
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };

export default Feature;
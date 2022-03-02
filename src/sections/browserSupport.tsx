import { Box, Container, Flex, Heading, HStack, SimpleGrid, Text, VStack, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ReactElement } from 'react';
import Reveal from 'react-awesome-reveal';
import { FcDataEncryption, FcDataProtection, FcKey, FcLineChart, FcPlus, FcPrivacy } from 'react-icons/fc';
import { fadeInBottom } from '../../styles/animations';
import Feature from '../../widgets/feature';

const BrowserSupportSection: NextPage = () => {
  return (
    <Box id="appointments">
        <VStack align={'center'} spacing={10} mb={20} px={10}>
            <VStack>
                <Heading as={'h2'} fontSize={'4xl'}>Browser Support</Heading>
                <Text>Compatible with the newest browsers.</Text>
            </VStack>
            <HStack gap={10}>
                <Image width={75} src="chrome.svg" alt="Chrome"></Image>
                <Image width={75} src="firefox.svg" alt="Chrome"></Image>
                <Image width={75} src="edge.svg" alt="Chrome"></Image>
                <Image width={75} src="safari.svg" alt="Chrome"></Image>
                <Image width={75} src="opera.svg" alt="Chrome"></Image>
            </HStack>
        </VStack>
    </Box>
  )
}

export default BrowserSupportSection;

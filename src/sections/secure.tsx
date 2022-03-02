import { Box, Container, Flex, Heading, HStack, SimpleGrid, Text, VStack, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ReactElement } from 'react';
import Reveal from 'react-awesome-reveal';
import { FcDataEncryption, FcDataProtection, FcKey, FcLineChart, FcPlus, FcPrivacy } from 'react-icons/fc';
import { fadeInBottom } from '../../styles/animations';
import Feature from '../../widgets/feature';

const SecureSection: NextPage = () => {
  return (
    <Container maxW={{md: 'container.md', lg: 'container.lg', xl: 'container.xl'}} position={'relative'} mb={20}>
        <VStack borderStartRadius={'2xl'} bgGradient='linear(to-r, blue.50, transparent)' p={10} align={'flex-start'} spacing={10}>
            <VStack align={'flex-start'}>
                <Heading as={'h2'} fontSize={'4xl'}>Security</Heading>
                <Text>Following security standards.</Text>
            </VStack>
            <Flex direction={{base: 'column', lg: 'row'}} justifyContent={'space-between'} alignItems={'center'} gap={10}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                    <Reveal keyframes={fadeInBottom}>
                        <Feature
                            icon={FcDataEncryption}
                            title={'End to end encryption'}
                            text={'Keeping sensitive data encrypted through transmissinos, so noone can intercept it.'}
                        />
                        <Feature
                            icon={FcPrivacy}
                            title={'Antiforgery protection'}
                            text={'Each action being checked for potential third party access, that can be triggered through phishing attacks.'}
                        />
                        <Feature
                            icon={FcPlus}
                            title={'HIPAA compliant'}
                            text={'As a software managing sensitive data we follow HIPAA security regulations.'}
                        />
                        <Feature
                            icon={FcDataProtection}
                            title={'GDPA compliant'}
                            text={'GDPA is a standard of keeping data secure and encrypted.'}
                        />
                    </Reveal>
                </SimpleGrid>
                <Image right={0} rounded='md' top={0} width={{base: 300, md: 400, xl: 500}} src="meditation.svg" alt="Image showing dashboard."></Image>
            </Flex>
        </VStack>
    </Container>
  )
}

export default SecureSection

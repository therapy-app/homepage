import { Box, Container, Flex, Heading, HStack, SimpleGrid, Text, VStack, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ReactElement } from 'react';
import { FcBarChart, FcDataEncryption, FcDataProtection, FcDownload, FcKey, FcLineChart, FcOk, FcPlus, FcPrivacy } from 'react-icons/fc';
import Feature from '../../widgets/feature';

const AdvantagesSection: NextPage = () => {
  return (
    <Box id="appointments" bgGradient='linear(to-r, gray.50, transparent)'>
        <Container maxW={'container.xl'} py={10} position={'relative'}>
            <VStack align={'flex-start'} spacing={10}>
                <VStack align={'flex-start'}>
                    <Heading as={'h2'} fontSize={'4xl'}>Save time</Heading>
                    <Text>Every important action on one click</Text>
                </VStack>
                <Flex direction={{base: 'column', lg: 'row'}} justifyContent={'space-between'} alignItems={'center'} gap={10}>
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                        <Feature
                            icon={FcOk}
                            title={'Easy usage'}
                            text={'Our modern UI allows users to navigate everywhere easily.'}
                        />
                        <Feature
                            icon={FcBarChart}
                            title={'Analytics'}
                            text={'Analyse previous data, spot gaps and improve your workflow'}
                        />
                        <Feature
                            icon={FcDownload}
                            title={'No downloads'}
                            text={'Our plattform is fully running on the web.'}
                        />
                    </SimpleGrid>
                    <Image right={0} rounded='md' top={0} width={{base: 400, md: 500, xl: 600}} src="rocket-riding.svg" alt="Image showing dashboard."></Image>
                </Flex>
            </VStack>
        </Container>
    </Box>
  )
}

export default AdvantagesSection;

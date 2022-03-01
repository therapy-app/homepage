import { Box, Container, Flex, Heading, HStack, SimpleGrid, Text, VStack, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ReactElement } from 'react';
import { FcBarChart, FcDataEncryption, FcDataProtection, FcDoNotInsert, FcDownload, FcGlobe, FcKey, FcLineChart, FcOk, FcOrgUnit, FcPlus, FcPrivacy } from 'react-icons/fc';
import Feature from '../../widgets/feature';

const AdvantagesSection: NextPage = () => {
  return (
    <Box bgGradient='linear(to-r, gray.50, transparent)'>
        <Container maxW={'container.xl'} py={10} position={'relative'}>
            <Flex direction={{base: 'column', lg: 'row'}} justifyContent={'space-between'} alignItems={'center'} gap={10}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                    <Feature
                        icon={FcOrgUnit}
                        title={'All-In-One'}
                        text={'All tools for running an efficient practice in one.'}
                    />
                    <Feature
                        icon={FcOk}
                        title={'Easy usage'}
                        text={'Our modern and intuitive interface makes work easy.'}
                    />
                    <Feature
                        icon={FcGlobe}
                        title={'No downloads'}
                        text={'Our application is fully running on the web, making it accessible anywhere by most modern browsers.'}
                    />
                    <Feature
                        icon={FcBarChart}
                        title={'Analytics'}
                        text={'Leverage our charting to spot gaps and improve your workflow.'}
                    />
                </SimpleGrid>
                <Image right={0} rounded='md' top={0} width={{base: 400, md: 500, xl: 600}} src="rocket-riding.svg" alt="Image showing dashboard."></Image>
            </Flex>
        </Container>
    </Box>
  )
}

export default AdvantagesSection;

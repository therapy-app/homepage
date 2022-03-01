import { Box, Center, Container, Flex, Heading, HStack, Text, VStack, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Divider } from '@chakra-ui/react'
import Feature from '../../widgets/feature';
import { FcBarChart, FcExport, FcImport } from 'react-icons/fc';


const PatientFeature = ({ title, description, imgSrc }: { title: string, description: string, imgSrc: string}) => {
    return (
        <VStack height={350} px={50} width={'full'}>
            <Heading as={'h3'} fontSize={'2xl'}>{ title }</Heading>
            <Text textAlign={'center'}>{ description }</Text>
            <Image boxShadow={'lg'} src={imgSrc} alt="Patient list"></Image>
        </VStack>
    );
}

const PatientsSection: NextPage = () => {
  return (
    <Box id="patients">
        <Container maxW={'container.xl'} py={75} mb={10} borderTopRadius={15} bgGradient='linear(to-b, purple.50, transparent)'>
            <Flex direction={{base: 'column', lg: 'row'}}>
                <VStack width={'full'} height={'900px'} position={{ base: 'relative', lg: 'sticky'}} top={50}>
                    <Box>
                        <Box mb={10} textAlign={'center'}>
                            <Heading mb={5} as={'h2'} fontSize={'4xl'}>Patient management</Heading>
                            <Text>The patient management module for professionals. Manage patient details, observations, findings and store patient data.</Text>
                        </Box>
                        <Box px={10} mb={10}>
                            <Image boxShadow={'lg'} src="patients-list.png" alt="Patient list"></Image>
                        </Box>
                        <VStack align={'center'} spacing={10}>
                            <Box maxW={500}>
                                <Feature
                                    icon={FcImport}
                                    title={'Easy data import'}
                                    text={'Migrating to therapyapp? We support data imports following the XYZ standard.'}
                                />
                                <Feature
                                    icon={FcExport}
                                    title={'Data export'}
                                    text={'We support a data export as CSV, JSON, XML following the XYZ standard. Generate word and pdf files for progress reports or data visualization.'}
                                />
                            </Box>

                        </VStack>
                    </Box>
                </VStack>
                <HStack width={'full'} h={'1700px'}>
                    <Divider d={{base: 'none', lg: 'block'}} orientation={'vertical'}></Divider>
                    <VStack width={'full'}>
                        <PatientFeature 
                            title={'Manage patients'} 
                            description={'.'}
                            imgSrc={'patients-detail.png'}
                        ></PatientFeature>
                        <Center width={'full'} py={5}>
                            <Divider width={'80%'}></Divider>
                        </Center>
                        <PatientFeature 
                            title={'Manage Observations'} 
                            description={'.'}
                            imgSrc={'patients-detail.png'}
                        ></PatientFeature>
                        <Center width={'full'} py={5}>
                            <Divider width={'80%'}></Divider>
                        </Center>
                        <PatientFeature 
                            title={'Manage Findings'} 
                            description={'.'}
                            imgSrc={'patients-detail.png'}
                        ></PatientFeature>
                        <Center width={'full'} py={5}>
                            <Divider width={'80%'}></Divider>
                        </Center>
                        <PatientFeature 
                            title={'Manage Data'} 
                            description={'.'}
                            imgSrc={'patients-detail.png'}
                        ></PatientFeature>
                    </VStack>
                </HStack>
            </Flex>
        </Container>
    </Box>
  )
}

export default PatientsSection

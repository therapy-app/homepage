import { Box, Container, Flex, Heading, Text, VStack, Image, Stack, SimpleGrid, Icon, HStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FcAddImage, FcLineChart, FcWorkflow } from 'react-icons/fc';
import Feature from '../../widgets/feature';

const AnalyticsSection: NextPage = () => {
  return (
    <Box id="analytics" bgGradient='linear(to-r, gray.100, transparent)'>
        <Container maxW={'2000'} pos={'relative'} overflow={'hidden'}>
          <Container maxW={'container.xl'} minH={450} py={10}>
              <Flex direction={'column'}>
                <VStack align={'flex-start'} mb={10}>
                  <Heading as={'h2'} fontSize={'4xl'}>Advanced Analytics</Heading>
                  <Text fontSize={'md'}>Analyze your workflow</Text>
                </VStack>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                  <Feature
                    icon={FcLineChart}
                    title={'Charts'}
                    text={'Analyse previous data through chart visualization.'}
                  />
                  <Feature
                    icon={FcWorkflow}
                    title={'Improve workflow'}
                    text={''}
                  />
                  <Feature
                    icon={FcAddImage}
                    title={'Instant delivery'}
                    text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
                  />
                </SimpleGrid>
              </Flex>
          </Container>
          {/* <Image right={{base: 0, md: 100}} rounded='md' top={{base: 675, md: 175}} width={{base: 300, md: 500, xl: 600}} pos={'absolute'} zIndex={'-1'} src="rocket.svg" alt="rocket"></Image> */}
        </Container>
    </Box>
  )
}

export default AnalyticsSection

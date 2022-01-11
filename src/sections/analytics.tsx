import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const AnalyticsSection: NextPage = () => {
  return (
    <Box bgGradient='linear(to-r, gray.100, transparent)'>
        <Container maxW={'container.xl'} height={500} py={10}>
            <Flex>
                <VStack align={'flex-start'}>
                    <Text fontWeight={700}>Advanced Analytics</Text>
                    <Heading as={'h2'} fontSize={'5xl'}>Analyse your workflow</Heading>
                    <Text>TODO:</Text>
                </VStack>
            </Flex>
        </Container>
    </Box>
  )
}

export default AnalyticsSection

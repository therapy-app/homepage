import { Box, Container, Flex, Heading, Button, SimpleGrid, Text, useRadio, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

function RadioCard(props : any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label' width={250}>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'teal.600',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }

const FaqSection: NextPage = () => {
  return (
    <Container maxW={'container.xl'} py={10} id='faq'>
      <Flex height={'auto'} alignItems={'flex-start'}>
        <VStack width={'full'} position={'sticky'} top={0} align={'flex-start'} spacing={4}>
          <Heading as={'h2'} fontSize={'6xl'}>Frequently asked questions</Heading>
          <VStack align={'flex-start'} width={200}>
            <Button width={'full'}>General</Button>
            <Button width={'full'}>Subscription</Button>
          </VStack>
        </VStack>
        <SimpleGrid width={'full'} columns={2} spacing={10}>
          <VStack align={'flex-start'} height='150px'>
            <Heading as={'h3'} fontSize={'xl'}>What is therapyapp?</Heading>
            <Text fontSize={'lg'}>Therapyapp provides software solutions for therapy practics.</Text>
          </VStack>
          <VStack align={'flex-start'} height='150px'>
            <Heading as={'h3'} fontSize={'xl'}>Where do I download therapyapp?</Heading>
            <Text fontSize={'lg'}>Therapyapp is fully hosted on the web. No downloads are required.</Text>
          </VStack>
        </SimpleGrid>
      </Flex>
    </Container>
  )
}

export default FaqSection

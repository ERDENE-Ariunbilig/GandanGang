import React from 'react'
import { Box, SimpleGrid, Image, Text, Button, VStack, useDisclosure } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'
import PostModal from './PostModal'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Dummy data for demonstration
  const posts = [
    { id: 1, imageUrl: 'https://via.placeholder.com/300' },
    { id: 2, imageUrl: 'https://via.placeholder.com/300' },
    // Add more dummy posts as needed
  ]

  return (
    <Box>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
        {/* Add Post Button */}
        <Box
          as="button"
          height="300px"
          borderWidth="2px"
          borderStyle="dashed"
          borderColor="gray.300"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={onOpen}
          transition="all 0.2s"
          _hover={{ borderColor: 'gray.400', bg: 'gray.50' }}
        >
          <VStack spacing={3}>
            <FiPlus size="40px" color="gray.400" />
            <Text color="gray.500">Add New Post</Text>
          </VStack>
        </Box>

        {/* Posts Grid */}
        {posts.map((post) => (
          <Box
            key={post.id}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
          >
            <Image
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              objectFit="cover"
              height="300px"
              width="100%"
            />
          </Box>
        ))}
      </SimpleGrid>

      <PostModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Home 
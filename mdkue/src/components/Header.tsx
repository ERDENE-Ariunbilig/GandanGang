import React from 'react'
import { Box, Flex, Button, Text, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiPlus, FiUser } from 'react-icons/fi'
import PostModal from './PostModal'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg="white" px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" color="gray.800">
          Widget App
        </Text>
        
        <Flex alignItems="center" gap={4}>
          <Button
            colorScheme="blue"
            variant="solid"
            size="md"
            onClick={onOpen}
          >
            <FiPlus style={{ marginRight: '8px' }} />
            New Post
          </Button>
          
          <IconButton
            aria-label="User menu"
            as={FiUser}
            variant="ghost"
            colorScheme="gray"
          />
        </Flex>
      </Flex>

      <PostModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Header 
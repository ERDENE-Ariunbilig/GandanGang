import React, { useState, useRef } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Input,
  Box,
  Image,
  Text,
  useToast
} from '@chakra-ui/react'
import { FiUpload } from 'react-icons/fi'

interface PostModalProps {
  isOpen: boolean
  onClose: () => void
}

const PostModal = ({ isOpen, onClose }: PostModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const toast = useToast()

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePost = () => {
    // Here we'll handle the post submission
    toast({
      title: 'Post Created',
      description: "Your post has been successfully created",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setSelectedImage(null)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            <Input
              type="file"
              accept="image/*"
              display="none"
              ref={fileInputRef}
              onChange={handleImageSelect}
            />
            
            {selectedImage ? (
              <Box position="relative" width="100%">
                <Image
                  src={selectedImage}
                  alt="Selected"
                  maxH="400px"
                  objectFit="contain"
                  width="100%"
                />
                <Button
                  position="absolute"
                  bottom={2}
                  right={2}
                  colorScheme="gray"
                  onClick={() => setSelectedImage(null)}
                >
                  Remove
                </Button>
              </Box>
            ) : (
              <Box
                width="100%"
                height="200px"
                border="2px dashed"
                borderColor="gray.300"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <VStack spacing={2}>
                  <FiUpload size="40px" color="gray" />
                  <Text color="gray.500">Click to upload image</Text>
                </VStack>
              </Box>
            )}

            <Button
              colorScheme="blue"
              width="100%"
              onClick={handlePost}
              isDisabled={!selectedImage}
            >
              Post
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default PostModal 
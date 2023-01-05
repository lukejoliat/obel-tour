import React from "react";
import {
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Center
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import video from "../components/Video.jpeg";
import TopRight from "../layout/TopRight";
import { motion } from "framer-motion";

export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center>
      <Image
        as={motion.img}
        cursor="pointer"
        borderRadius="80px"
        padding={[0, "50px"]}
        w="100%"
        src={video}
        onClick={onOpen}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.25 }
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="none" m="auto" h="80vh" bg="black">
          {/* <ModalHeader p={0}>Modal Title</ModalHeader> */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Mdcw3Sb98DA"
            title="Introducing Lobe  |  Build your first machine learning model in ten minutes."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ModalContent>
        <TopRight>
          <CloseIcon fill="white" cursor="pointer" />
        </TopRight>
      </Modal>
    </Center>
  );
};

import { Divider, Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {

  return (
    <Box maxW='container.sm'  borderRadius='lg' overflow='hidden' backgroundColor={"#28282B"}>
      <Image src={imageSrc} height="250px" width='100%'/>

<Box padding={"10px"}>
      <Box
        mt='1'
        fontWeight='bold'
        as='h4'
                lineHeight='tight'
                color={"white"}
        noOfLines={1}
      >
        {title}
        
      </Box>

      <Box as='span' color='gray.1000' fontSize='sm' margin={"-0.5"}>
        {description}
      </Box>
      <a href={url}>
      <Box display='flex' mt='2' alignItems='flex-start' color='white' fontWeight='bold' fontSize='sm'>
                <Text mt='1'>Visit Site</Text>
        <Box as='span' ml='2' mt='1.5'>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
        
          </Box>
          
        
      </Box>
      </a>
      </Box>
    </Box>
  );
};

export default Card;

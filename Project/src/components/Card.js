import { Divider, Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <Box maxW='container.sm'  borderRadius='lg' overflow='hidden' backgroundColor={"white"}>
      <Image src={imageSrc} />

<Box padding={"10px"}>
      <Box
        mt='1'
        fontWeight='bold'
        as='h4'
                lineHeight='tight'
                color={"black"}
        noOfLines={1}
      >
        {title}
        
      </Box>

      <Box as='span' color='gray.600' fontSize='sm' margin={"-0.5"}>
        {description}
      </Box>
      <Box display='flex' mt='2' alignItems='flex-start' color='black' fontWeight='bold' fontSize='sm'>
        <Text>See more</Text>
        <Box as='span' ml='2' >
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Box>
        
      </Box>
      </Box>
    </Box>
  );
};

export default Card;

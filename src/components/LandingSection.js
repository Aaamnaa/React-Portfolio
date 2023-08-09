import React from "react";
import { Avatar, Heading, Text,VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Amna Anwar!";
const bio1 = ( <>
      A Software Engineering graduate and a {''}
<a href="https://www.credly.com/badges/de6f777d-ebd3-4bed-9136-2b6bb25f6776" color="blue">
  <b >Certified</b>
</a>{" "}
Frontend Developer with expertise in React. Passionate about crafting seamless
user experiences through creative and responsive web solutions. Specialized in
frontend development with a focus on user-centric design.
</>
);
const bio2 = "Let's collaborate to bring your digital vision to life!"
const Aavatar=Avatar;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    padding={[2, 8, 12]}
   
    
  > 
    <VStack spacing={5}   >
    <Avatar name="Amna" src="" size="2xl" backgroundColor="ActiveBorder" />
    
    <Text fontFamily="Times New Roman, serif" fontSize={['16px', '24px', '32px']} fontStyle="italic" textAlign="center">{greeting}</Text>
    
    8<Text fontFamily="Times New Roman, serif" fontSize={['16px', '24px', '32px']} fontStyle="italic" textAlign="center">{bio1}</Text>
    <Text fontFamily="Times New Roman, serif" fontSize={['16px', '24px', '32px']} fontStyle="italic" textAlign="center">{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

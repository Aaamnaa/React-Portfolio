import React from "react";
import { Avatar, Heading, Text,VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Amna!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React";
const Aavatar=Avatar;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  > 
    <VStack>
    <Avatar name="Amna" src="" size="2xl" backgroundColor="ActiveBorder" />
    
    <Text>{greeting}</Text>
    <br></br>
    <Heading as="h2">{bio1}</Heading>
    <Heading as="h2">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

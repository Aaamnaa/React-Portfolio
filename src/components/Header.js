import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import ProjectsSection from "./ProjectsSection";

const recipientEmail = "amnaanwar257@gmail.com";
const socials = [
  {
    icon: faEnvelope,
    
  
    url: `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`,
  },
  {
    icon: faGithub,
    url: "https://github.com/Aaamnaa" ,
  },
  // {
  //   icon: faLinkedin,
  //   url: "https://www.linkedin.com",
  // },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const Header = () => { 
  const headerRef = useRef(null); 
  
  useEffect(() => { 
    let prevScrollPos = window.scrollY; 
  
    const handleScroll = () => { 
      const currentScrollPos = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevScrollPos > currentScrollPos) { 
        headerElement.style.transform = "translateY(0)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevScrollPos = currentScrollPos; 
    } 
    window.addEventListener('scroll', handleScroll) 
  
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 
  
  const handleClick = (anchor) => () => { 
    const id = `${anchor}-section`; 
    const element = document.getElementById(id); 
    if (element) { 
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
      }); 
    } 
  }; 

  return (
    <Box  maxW={{ base: "640px", lg: "100vw" }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      overflowY="hidden"
    >
      <Box color="white" marginX="auto">
        <HStack 
          px={[8, 8, 16]}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          cursor="pointer"
        
        >
          <nav>
            <HStack spacing={8}>
              {
                socials.map(item =>
                 
                  <a  key={item.url} href={item.url}><FontAwesomeIcon icon={item.icon} size="2x" /></a>)
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")}>Projects</a>
              <a onClick={handleClick("contactme")}>Contact Me</a>

            </HStack>
          </nav>
          
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Portfolio",
    description:
      "The portfolio website developed using React.js along with Chakra UI, Yup, Formik, and FontAwesome. Demonstrated a combination of modern design principles, responsive layout, and enhanced user experience. React.js-based portfolio website is a testament to my skills and dedication as a frontend developer. ",
    getImageSrc: () => require("../images/photo6.jpg"),
    url:"https://react-portfolio-tawny-alpha.vercel.app/"
  },
  {
    title: "React Movie Search WebApp",
    description:
      "The movie search webapp developed using React.js, Tailwind CSS, Styled Components, Axios, and FontAwesome showcased a well-rounded implementation of core React concepts. Users were empowered to search for movies, access detailed information, and navigate the website with ease.",
    getImageSrc: () => require("../images/photo5.jpg"),
    url:"https://react-movie-app-nu-eight.vercel.app/"
  },
  // {
  //   title: "Photo Gallery",
  //   description:
  //     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
  //   getImageSrc: () => require("../images/photo3.jpg"),
  // },
  // {
  //   title: "Event planner",
  //   description:
  //     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
  //   getImageSrc: () => require("../images/photo4.jpg"),
  // },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
       mx={0} 
       w='full'
    >
      <Heading as="h1" alignSelf="center" my="30px" id="projects-section">
        Featured Projects
      </Heading>
      <Box 
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

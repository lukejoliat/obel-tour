import "./styles.css";
import theme from "./theme";
import {
  ChakraProvider,
  Box,
  Heading,
  Center,
  Text,
  Button
} from "@chakra-ui/react";
import Header from "./layout/Header";
import Section from "./layout/Section";
import Intro from "./components/Intro";
import Video from "./video/Video";
import Footer from "./layout/Footer";
import Divider from "./layout/Divider";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Section>
        <Intro>
          <Heading size="4xl" fontWeight="bold">
            Lobe{" "}
            <Text as="span" color="teal">
              Tour
            </Text>
          </Heading>
          <Text
            fontSize="34px"
            color="gray.500"
            maxWidth="700px"
            textAlign="center"
          >
            Build your first machine learning model in ten minutes. No code or
            experience required.
          </Text>
        </Intro>
        <Video />
        <Intro mb={20}>
          <Heading
            size="4xl"
            textAlign="center"
            maxWidth="500px"
            fontWeight={900}
          >
            Train your app with Lobe
          </Heading>
          <Button
            mt="10"
            width="200px"
            height="64px"
            fontSize="24px"
            variant="primary"
          >
            Download
          </Button>
        </Intro>
        <Divider />
      </Section>
      <Section>
        <Footer />
      </Section>
    </ChakraProvider>
  );
}

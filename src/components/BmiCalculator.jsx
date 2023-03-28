import { useState } from "react";
import {
  Button,
  Flex,
  Container,
  SimpleGrid,
  Center,
  Grid,
  Box,
  Stack,
  Text,
  Heading,
  GridItem,
} from "@chakra-ui/react";
import "../style/BmiCalculator.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiStatus, setBmiStatus] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = Number(height) / 100;
      const bmi = Number(weight) / (heightInMeters * heightInMeters);
      setBmiValue(bmi.toFixed(2));

      if (bmi < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setBmiStatus("Healthy");
      } else {
        setBmiStatus("Overweight");
      }
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmiValue("");
    setBmiStatus("");
  };

  return (
    <Container maxW="container.sm" mt={8} className="container">
      <Heading as="h1" textAlign="center" mb={8}>
        BMI Calculator
      </Heading>

      <SimpleGrid columns={2} spacing={4} className="bmi-form">
        <Box>
          {/* <Text>Weight (in kg)</Text> */}
          <Heading as="h4" size="md">
            Weight (in kg)
          </Heading>
          <input
            placeholder="Enter Here"
            type="number"
            className="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Box>
        <Box>
          <Heading as="h4" size="md">
            Height (in cm)
          </Heading>
          {/* <Text>Height (in cm)</Text> */}
          <input
            placeholder="Enter Here"
            type="number"
            className="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Box>
      </SimpleGrid>

      <Flex justifyContent="center" mt={8}>
        <Stack spacing={4} direction="row">
          <Button
            role="button"
            className="button-41"
            colorScheme="green"
            onClick={calculateBMI}
            disabled={!weight || !height}
          >
            Calculate
          </Button>
          <Button
            role="button"
            colorScheme="red"
            onClick={resetForm}
            className="button-41"
          >
            Reset
          </Button>
        </Stack>
      </Flex>

      {bmiValue && (
        <Grid
          mt={8}
          templateColumns="repeat(2, 1fr)"
          gap={6}
          className="bmi-result"
        >
          <GridItem>
            <Heading as="h5" size="sm">
              Your BMI
            </Heading>

            <Text fontWeight="bold" fontSize="2xl" className="bmi-value">
              {bmiValue}
            </Text>
          </GridItem>
          <GridItem>
            <Center>
              <Text
                fontWeight="100px"
                bg="gray.200"
                p={5}
                color={
                  bmiStatus === "Underweight"
                    ? "blue"
                    : bmiStatus === "Healthy"
                    ? "green"
                    : "red"
                }
                className="bmi-status"
              >
                {bmiStatus}
              </Text>
            </Center>
          </GridItem>
        </Grid>
      )}
    </Container>
  );
};

export default BmiCalculator;

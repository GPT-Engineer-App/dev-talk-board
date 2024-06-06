import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) validationErrors.username = "Username is required";
    if (!email) validationErrors.email = "Email is required";
    else if (!validateEmail(email)) validationErrors.email = "Invalid email format";
    if (!password) validationErrors.password = "Password is required";
    else if (!validatePassword(password)) validationErrors.password = "Password must be at least 8 characters long";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log("Form submitted", { username, email, password });
    }
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading mb={6}>Register</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="username" isInvalid={errors.username}>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            {errors.username && <Text color="red.500">{errors.username}</Text>}
          </FormControl>
          <FormControl id="email" isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <Text color="red.500">{errors.email}</Text>}
          </FormControl>
          <FormControl id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <Text color="red.500">{errors.password}</Text>}
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">Register</Button>
        </VStack>
      </form>
      <Text mt={4}>
        Already have an account? <Link as={RouterLink} to="/login" color="blue.500">Login</Link>
      </Text>
    </Box>
  );
};

export default Register;
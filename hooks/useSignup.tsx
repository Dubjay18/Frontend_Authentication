"use client";
import { useState } from "react";
import axios, { AxiosError } from "axios";

// Define the custom hook
const useSignUp = (): SignUpResult => {
  // Set up state variables for loading, success, error, and error message
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<SignUpError>();

  // Define the sign up function that makes the API call
  const signUp = async (data: SignUpData) => {
    setIsLoading(true);

    try {
      // Make the API call using Axios
      const response = await axios.post<SignUpResponse>(
        "/api/signup",
        data
      );
      setIsSuccess(true);
      setError(undefined);
    } catch (err) {
      // Handle any errors that occur during the API call
      const error = err as AxiosError<SignUpError>;
      setIsError(true);
      setError(error.response?.data);
    }

    setIsLoading(false);
  };

  // Return the state variables and the sign up function
  return { isLoading, isSuccess, isError, error, signUp };
};

export default useSignUp;

// Import the necessary hooks and libraries
"use client";
import { useAuthSession } from "@/hooks/useAuthSession";
import { useRouter } from "next/router";

// Define the ProtectedPage component
const ProtectedPage = ({
  children, // The child components to be rendered
}: {
  children: React.ReactNode; // The type definition for the children prop
}) => {
  // Use the useAuthSession hook to retrieve the user's authentication session
  const user = useAuthSession();
  // Use the useRouter hook to access the router object for programmatic navigation
  const router = useRouter();
  // If the user is not authenticated, redirect them to the login page
  if (!user) return router.push("/login");
  // If the user is authenticated, render the child components
  return <>{children}</>;
};

// Export the ProtectedPage component as the default export of this module
export default ProtectedPage;

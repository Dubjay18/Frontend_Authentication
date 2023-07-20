// Check if the code is running on the server or the client
const ISSERVER = typeof window === "undefined";

// Define a class for managing authentication-related functionality
export class authUtil {
  // Store the user session data in local storage
  setSession(response: User) {
    if (!ISSERVER)
      localStorage.setItem(
        "auth-app-session",
        JSON.stringify(response)
      );
  }

  // Retrieve the user session data from local storage
  getSession() {
    if (!ISSERVER) {
      const session = localStorage.getItem(
        "auth-app-session"
      );
      return session ? JSON.parse(session) : null;
    }
    return null;
  }

  // Retrieve the user ID from the session data
  getUserId() {
    if (!ISSERVER) return this.getSession()?.userId;
  }

  // Retrieve the access token from the session data
  getToken() {
    if (!ISSERVER) return this.getSession()?.AccessToken;
  }
}

// Export an instance of the authUtil class as the default export
export default authUtil;

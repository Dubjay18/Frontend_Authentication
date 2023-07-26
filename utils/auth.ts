"use client";
// Define a class for managing authentication-related functionality
export class authUtil {
  // Store the user session data in local storage
  static setSession(response: User) {
    localStorage.setItem(
      "auth-app-session",
      JSON.stringify(response)
    );
  }

  // Retrieve the user session data from local storage
  static getSession() {
    {
      const session = localStorage.getItem(
        "auth-app-session"
      );
      return session ? JSON.parse(session) : null;
    }
    return null;
  }

  // Retrieve the user ID from the session data
  static getUserId() {
    return this.getSession()?.userId;
  }

  // Retrieve the access token from the session data
  static getToken() {
    return this.getSession()?.AccessToken;
  }
}

// Export an instance of the authUtil class as the default export
export default authUtil;

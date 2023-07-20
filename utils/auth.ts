const ISSERVER = typeof window === "undefined";
export class authUtil {
  setSession(response: User) {
    if (!ISSERVER)
      localStorage.setItem(
        "auth-app-session",
        JSON.stringify(response)
      );
  }
  getSession() {
    if (!ISSERVER) {
      const session = localStorage.getItem(
        "auth-app-session"
      );
      return session ? JSON.parse(session) : null;
    }
    return null;
  }

  getUserId() {
    if (!ISSERVER) return this.getSession()?.userId;
  }
  getToken() {
    if (!ISSERVER) return this.getSession()?.AccessToken;
  }
}

export default authUtil;

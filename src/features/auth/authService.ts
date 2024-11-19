export async function authenticateUser(email: string, password: string) {

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Authentication failed");
    }
    return await response.json();
  }
  
import axios from "axios";
import Cookies from "js-cookie";
import { BACKEND_URL } from "./constant";

export const accessToken = () => {
  const token = Cookies.get("token");
  return token;
};

// const token = accessToken;
export async function POST(url: string, data: any) {
  const res = await axios.post(`${BACKEND_URL}${url}`, data);
  return res.data;
}

export async function SECURE_GET(url: string) {
  // Get token from localStorage
  const token = accessToken();
  if (!token) {
    throw new Error("No access token found");
  }

  // Create headers with authorization token
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  try {
    // Fetch request
    const res = await fetch(`${BACKEND_URL}${url}`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });

    // Check if response is ok
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    // Parse response to json
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch data");
  }
}

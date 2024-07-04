import axios from "axios";
import Cookies from "js-cookie";
import { BACKEND_URL } from "./constant";

export const accessToken = () => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("No access token found");
  }
  return token;
};

// const token = accessToken;
export async function POST(url: string, data: any) {
  const res = await axios.post(`${BACKEND_URL}${url}`, data);
  return res.data;
}

export async function SECURE_GET(url: string) {
  const token = accessToken();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  try {
    const res = await fetch(`${BACKEND_URL}${url}`, {
      method: "GET",
      headers: myHeaders,
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch data");
  }
}

export async function SECURE_POST(url: string, dataBody: any) {
  const token = accessToken();

  // Create headers with authorization token
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  try {
    // Fetch request
    const res = await fetch(`${BACKEND_URL}${url}`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(dataBody),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch data");
  }
}

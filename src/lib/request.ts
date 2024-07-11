import axios from "axios";
import Cookies from "js-cookie";
import { BACKEND_URL } from "./constant";
import { ResponseType } from "@/types";

export const accessToken = (): ResponseType | string => {
  const token = Cookies.get("token");
  if (!token) {
    return {
      success: false,
      message: "No access token found",
      data: null,
    };
  }
  return token;
};

// const token = accessToken;
export async function POST(url: string, data: any): Promise<ResponseType> {
  try {
    const res = await axios.post(`${BACKEND_URL}${url}`, data);
    return res.data;
  } catch (error) {
    console.error("Request failed:", error);
    return {
      success: false,
      message: "Failed to send request",
      data: null,
    };
  }
}

export async function SECURE_GET(url: string): Promise<ResponseType> {
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
    return {
      success: false,
      message: "Failed to fetch data",
      data: null,
    };
  }
}

export async function SECURE_POST(
  url: string,
  dataBody: any
): Promise<ResponseType> {
  const token = accessToken();

  // Create headers with authorization token
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const isFormData = dataBody instanceof FormData;

  // Only set Content-Type if not FormData
  if (!isFormData) {
    myHeaders.append("Content-Type", "application/json");
  }

  try {
    // Fetch request
    const res = await fetch(`${BACKEND_URL}${url}`, {
      method: "POST",
      headers: myHeaders,
      body: isFormData ? dataBody : JSON.stringify(dataBody),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      success: false,
      message: "Failed to fetch data",
      data: null,
    };
  }
}

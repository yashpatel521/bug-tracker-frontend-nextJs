import axios from "axios";
import { BACKEND_URL } from "./constant";

export async function POST(url: string, data: any) {
  //using axios
  const res = await axios.post(`${BACKEND_URL}${url}`, data);
  return res.data;
}

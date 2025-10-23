import axios from "axios";
import { rootEndpoint } from "@/libs/endpoints";

export class HttpRequest {
  async get<T>(url: string): Promise<T> {
    const response = await axios.get(url);
    return response.data;
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    const response = await axios.post(url, body);
    return response.data;
  }
}

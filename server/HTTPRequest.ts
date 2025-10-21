import axios from "axios";
import { rootEndpoint } from "@/libs/endpoints";

const httpRequest = {
  get: async function <T>(url: string): Promise<T> {
    const response = await axios.get(`${rootEndpoint}${url}`);
    return response.data;
  }
};

export default httpRequest;

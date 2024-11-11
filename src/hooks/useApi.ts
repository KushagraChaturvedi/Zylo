import axios, { AxiosRequestConfig, Method } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: "https://zylo-zyrax-backend-uln9.vercel.app/zylo",
});

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Placeholder for authentication token (will replace with context API later)
  const authToken = null;

  const request = async (
    method: Method,
    url: string,
    data: any = null,
    config: AxiosRequestConfig = {}
  ) => {
    setLoading(true);
    setError(null);

    // Set up authorization header if auth token exists
    if (authToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${authToken}`,
      };
    }

    try {
      // Make the API request based on the HTTP method
      let response;
      if (method.toLowerCase() === "get") {
        response = await api.get(url, config);
      } else if (method.toLowerCase() === "delete") {
        response = await api.delete(url, config);
      } else {
        response = await api.request({ method, url, data, ...config });
      }

      return { data: response.data, error: null };
    } catch (err: any) {
      // Error handling for server response
      if (err.response) {
        setError(err.response.data.message || "Server error");
        if (err.response.status === 401) {
          navigate("/");
        }
      } else if (err.request) {
        setError("No response from server");
      } else {
        setError("Request error");
      }
      return { data: null, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}

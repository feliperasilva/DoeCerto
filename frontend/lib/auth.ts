// frontend/lib/auth.ts
import axios, { AxiosRequestConfig } from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";
const TOKEN_KEY = "token";

class AuthService {
  private static get token(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  }

  private static api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Middleware de injeção de token dinâmico
  private static getAuthHeaders() {
    const token = this.token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  public static async request<T = any>(
    endpoint: string,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response = await this.api({
        url: endpoint,
        method: options.method || "GET",
        data: options.data || null,
        headers: {
          ...this.getAuthHeaders(),
          ...options.headers,
        },
      });

      return response.data;
    } catch (error: any) {
      throw error.response?.data?.message || "Erro na requisição.";
    }
  }

  public static async login(form: { don_email: string; don_password: string }) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/donor/login`,
        form
      );
      const { token } = response.data;

      if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_KEY, token);
      }

      this.api.defaults.headers.Authorization = `Bearer ${token}`;
      return response.data;
    } catch (error: any) {
      throw error.response?.data?.message || "Erro ao fazer login.";
    }
  }

  public static async logout() {
    const token = this.token;

    if (!token) return;

    try {
      await axios.post(`${API_BASE_URL}/api/auth/donor/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.warn("Erro ao chamar logout na API:", error);
    }

    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
    }

    delete this.api.defaults.headers.Authorization;
  }

  public static isAuthenticated(): boolean {
    return !!this.token;
  }
}

export default AuthService;

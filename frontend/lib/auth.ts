import axios, { AxiosRequestConfig } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
const TOKEN_KEY = "token";
const ROLE_KEY = "role";

class AuthService {
  private static get token(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  }

  private static get role(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(ROLE_KEY);
    }
    return null;
  }

  private static api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  private static getAuthHeaders() {
    const token = this.token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  public static async request<T = any>(
    endpoint: string,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response = await AuthService.api({
        url: endpoint,
        method: options.method || "GET",
        data: options.data || null,
        headers: {
          ...AuthService.getAuthHeaders(),
          ...options.headers,
        },
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data?.message || "Erro na requisição.";
    }
  }

  public static async loginAuto(form: { email: string; password: string }) {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, form);

      const { token, role } = response.data;

      if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(ROLE_KEY, role);
      }

      AuthService.api.defaults.headers.Authorization = `Bearer ${token}`;

      return response.data;
    } catch (error: any) {
      throw error.response?.data?.message || "Erro ao fazer login.";
    }
  }

  public static async logout() {
    const token = this.token;
    if (!token) return;

    try {
      await axios.post(`${API_BASE_URL}/api/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.warn("Erro ao chamar logout na API:", error);
    }

    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(ROLE_KEY);
    }

    delete AuthService.api.defaults.headers.Authorization;
  }

  public static isAuthenticated(): boolean {
    return !!this.token;
  }

  public static getRole(): string | null {
    return this.role;
  }

  // Atualizar dados do doador (PUT com multipart/form-data)
  public static async updateDonor(id: string, formData: FormData) {
    try {
      const response = await AuthService.api.put(`/api/donors/${id}`, formData, {
        headers: {
          ...AuthService.getAuthHeaders(),
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data?.message || "Erro ao atualizar doador.";
    }
  }
}

export default AuthService;

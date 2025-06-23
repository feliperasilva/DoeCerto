export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean; // Add this line
};

export type SignupDonorFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignupNgoFormData = {
  name: string;
  cnpj: string;
  email: string;
  password: string;
  confirmPassword: string;
};

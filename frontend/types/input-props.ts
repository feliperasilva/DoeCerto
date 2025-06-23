type InputSize = "small" | "medium" | "large";

type InputMaskType = "cnpj" | "telefone" | "cep";
type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "date";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type" | "name" | "autocomplete"
> & {
  size?: InputSize;
  type?: InputType;
  label?: string;
  error?: string;
  name: string;
  autocomplete?: string; // aqui, tipo simples string para flexibilidade
  inputMask?: InputMaskType;
};

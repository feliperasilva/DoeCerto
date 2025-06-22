type InputSize = "small" | "medium" | "large";

type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "date"
  | "cnpj";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type" | "name" | "autocomplete"
> & {
  size?: InputSize;
  type?: InputType;
  label?: string;
  name: string;
  autocomplete?: string; // aqui, tipo simples string para flexibilidade
};

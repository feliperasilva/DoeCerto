type InputSize = "small" | "medium" | "large";
type InputType = "text" | "password" | "email" | "number" | "tel";

export type InputProps = {
  size?: InputSize;
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: InputType;
  className?: string;
  disabled?: boolean;
  id?: string;
  required?: boolean;
};

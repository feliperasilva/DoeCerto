type ButtonSize = "small" | "medium" | "large" | "fullWidth";

type ButtonVariant = "primary" | "secondary";

export type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
};

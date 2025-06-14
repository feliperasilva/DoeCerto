type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  href?: string; 
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};
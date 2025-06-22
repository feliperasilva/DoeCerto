export type CheckboxProps = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
  name?: string;
  className?: string;
  // React Hook Form ref
  ref?: React.Ref<HTMLInputElement>;
};

export type UserType = "donor" | "ngo";

export type ToggleUserProps = {
  selected: UserType;
  setSelected: React.Dispatch<React.SetStateAction<UserType>>;
};

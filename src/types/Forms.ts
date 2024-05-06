export type InputFormProps = {
  type: string;
  icon?: React.ReactNode;
  iconOnlyForPassword?: React.ReactNode;
  placeholder?: string;
  value?: string;
  name?: string;
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
import React from 'react';
import { ErrorsForm } from 'types/types';

interface InputSettingsProps {
  value: string;
  isEditing: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: ErrorsForm;
  icon: React.ReactNode;
}

const InputSettings = ({
  value,
  isEditing,
  handleChange,
  errors,
  icon
}: InputSettingsProps) => {
  return (
    <div className="text-[#45ADB0] bg-[#45ADB0] bg-opacity-[18%]  rounded-2xl flex p-3 gap-4 w-full  items-center">
      {icon}
      <input
        name="username"
        type="text"
        className="self-center flex flex-col items-start w-full bg-transparent focus:outline-none"
        value={value}
        disabled={!isEditing}
        onChange={handleChange}
      ></input>
      {errors.username && <p className="text-red-500">{errors.username}</p>}{' '}
    </div>
  );
};

export default InputSettings;

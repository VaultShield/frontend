import React from 'react';

interface InputSettingsProps {
  value: string;
  isEditing: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  icon: React.ReactNode;
  name: string;
  type?: string;
  placeholder?: string;
}

const InputSettings = ({
  value,
  isEditing,
  handleChange,
  error,
  icon,
  name,
  type = 'text',
  placeholder
}: InputSettingsProps) => {
  return (
    <div className="flex flex-row w-full gap-4">
      <div className="relative w-full flex items-center">
        <div className="absolute ml-4 text-primary">{icon}</div>
        <input
          name={name}
          type={type}
          className="bg-primary text-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-primary placeholder:text-opacity-75 placeholder:italic"
          value={value}
          disabled={!isEditing}
          onChange={handleChange}
          placeholder={placeholder}
        ></input>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default InputSettings;

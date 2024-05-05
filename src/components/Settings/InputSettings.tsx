import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';

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
  const [view, setView] = useState(false);
  return (
    <div className="flex flex-row w-full gap-4">
      <div className="relative w-full flex items-center">
        <div className="absolute ml-4 text-primary">{icon}</div>
        <input
          name={name}
          type={!view ? type : 'text'}
          className="bg-primary text-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-primary placeholder:text-opacity-75 placeholder:italic"
          value={value}
          disabled={!isEditing}
          onChange={handleChange}
          placeholder={placeholder}
        ></input>
        {type === 'password' && (
          <div
            className="absolute end-0 mr-4 text-primary cursor-pointer"
            onClick={() => setView(!view)}
          >
            {view ? <Visibility /> : <VisibilityOff />}
          </div>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default InputSettings;

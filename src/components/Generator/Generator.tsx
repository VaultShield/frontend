import { useContext, useState, useEffect } from 'react';
import { btnDefault } from 'styles/tailwind.classes';
import './CharacterGenerator.css';
import { NotificationContext } from 'contexts/notificationContext';
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";


const Generator = () => {
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [barColor1, setBarColor1] = useState('bg-black');
  const [barColor2, setBarColor2] = useState('bg-black');
  const [barColor3, setBarColor3] = useState('bg-black');
  const [barColor4, setBarColor4] = useState('bg-black');


  const [sliderValue, setSliderValue] = useState<number>(25);
  const [password, setPassword] = useState<string>("");
  const calculateBarWidth = (value: number) => {
    setBarColor1(value > 1 ? 'bg-primary' : 'dark:bg-gray bg-blackwhite');
    setBarColor2(value > 5 ? 'bg-primary' : 'dark:bg-gray bg-blackwhite');
    setBarColor3(value > 10 ? 'bg-primary' : 'dark:bg-gray bg-blackwhite');
    setBarColor4(value > 25 ? 'bg-primary' : 'dark:bg-gray bg-blackwhite');
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };


  const handleCheckboxChange = (stateSetter: { (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }, currentValue: boolean) => {
    const totalSelected = [includeUppercase, includeLowercase, includeNumbers, includeSymbols].filter(Boolean).length;

    if (!currentValue || totalSelected > 1) {
      stateSetter(!currentValue);
    }

  };


  const generatePassword = (length: number): void => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let newPassword = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(newPassword);
    calculateBarWidth(newPassword.length);
  };
  const copyToClipboard = () => {
    if (password === '') {
      return;
    }
    navigator.clipboard.writeText(password).then(() => {
    }, (err) => {
      console.error('Error al copiar la contraseña: ', err);
    });
  };

  useEffect(() => {
    generatePassword(sliderValue);
  }, [includeUppercase, includeLowercase, includeNumbers, includeSymbols, sliderValue]);

  return (
    <div className="w-full   text-black p-6">
      <div className='grid grid-cols-3 gap-6'>
        <div className='col-span-2 grid grid-cols-6 bg-white rounded-xl gap-6 p-6'>
          <div className='col-span-5 '>
            <div className='bg-shamrock-600 bg-opacity-15 rounded-lg w-full h-12 flex'>
              <input value={password} type="text" className='h-12 bg-transparent outline-none w-full pl-3' />
              <button onClick={() => generatePassword(sliderValue)} className='pr-3'>O</button>
            </div>
            <div className='w-full flex justify-between items-center space-x-3 '>
              <div>Weak</div>
              <div className='h-1.5 w-full bg-shamrock-600 rounded-lg ' />
              <div>Strong</div>
            </div>
            <div className='flex '>
              <div>
                Password Length
              </div>
              <Slider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
                color="primary"
                min={1}
                max={50}
                value={sliderValue}
                onChange={handleSliderChange}
              />
            </div>
          </div>
          <div className=''>
            <button onClick={copyToClipboard} className='bg-shamrock-600 w-full h-12 rounded-lg text-white'>
              Copy
            </button>
          </div>

        </div>
        <div className=' flex-col flex justify-between bg-white rounded-xl p-6'>
        <div className='grid grid-cols-4  text-xl font-medium'>
            <div className='col-span-3 flex space-x-2'>
              <input
                checked={includeUppercase}

                onChange={() => handleCheckboxChange(setIncludeUppercase, includeUppercase)}
                type="checkbox"
                className='scale-150 accent-shamrock-600' />
              <div>
                Uppercase
              </div>
            </div>
            <div className='text-gray-400 flex justify-start'>
              <span className='text-shamrock-600'>  ej.</span> ABCDE
            </div>
          </div>

          <div className='grid grid-cols-4  text-xl font-medium'>
            <div className='col-span-3 flex space-x-2'>
              <input
                checked={includeLowercase}
                onChange={() => handleCheckboxChange(setIncludeLowercase, includeLowercase)}
                type="checkbox"
                className='scale-150 accent-shamrock-600' />
              <div>
                Lowercase
              </div>
            </div>
            <div className='text-gray-400 flex justify-start'>
              <span className='text-shamrock-600'>  ej.</span> abcde
            </div>
          </div>
          <div className='grid grid-cols-4  text-xl font-medium'>
            <div className='col-span-3 flex space-x-2'>
              <input
                checked={includeNumbers}
                onChange={() => handleCheckboxChange(setIncludeNumbers, includeNumbers)}
                type="checkbox"
                className='scale-150 accent-shamrock-600' />
              <div>
                Number
              </div>
            </div>
            <div className='text-gray-400 flex justify-start'>
              <span className='text-shamrock-600'>  ej.</span> 123456
            </div>
          </div>
          <div className='grid grid-cols-4  text-xl font-medium'>
            <div className='col-span-3 flex space-x-2'>
              <input
                checked={includeSymbols}
                onChange={() => handleCheckboxChange(setIncludeSymbols, includeSymbols)}
                type="checkbox"
                className='scale-150 accent-shamrock-600' />
              <div>
                Symbols
              </div>
            </div>
            <div className='text-gray-400 flex justify-start'>
              <span className='text-shamrock-600'>  ej.</span> #!@/~
            </div>
          </div>        </div>
      </div>

    </div>
  );
};

export default Generator;

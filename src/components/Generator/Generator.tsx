import { useContext, useState, useEffect } from 'react';
import { btnDefault } from 'styles/tailwind.classes';
import './CharacterGenerator.css';
import { NotificationContext } from 'contexts/notificationContext';



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
    <div className="w-full  bg-red-500 text-black">
      <div className='flex space-x-6'>
        <div className='w-2/3 flex flex-col  bg-white rounded-xl  p-6'>
          <div className='flex w-full '>
            <div className='bg-shamrock-600 bg-opacity-15 rounded-lg w-5/6 h-12 flex'>
              <input value={password} type="text" className='h-12 bg-transparent outline-none w-full pl-3' />
              <button onClick={()=> generatePassword(sliderValue)} className='pr-3'>O</button>
            </div>
            <button className='bg-shamrock-600 w-1/6 rounded-lg text-white'>
              Copy
            </button>
          </div>
          <div className='w-5/6 flex justify-between items-center space-x-3 '>
            <div>Weak</div>
            <div className='h-1.5 w-full bg-shamrock-600 rounded-lg '/>
            <div>Strong</div>
          </div>
          <div>
            <div>
              Password Length
            </div>
            <input type="range" />
          </div>

        </div>
        <div className='w-1/3 bg-white rounded-xl'>
          fds
        </div>
      </div>
    </div>
  );
};

export default Generator;

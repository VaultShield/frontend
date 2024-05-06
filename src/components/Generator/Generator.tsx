import { useContext, useState, useEffect } from 'react';
import { btnDefault } from 'styles/tailwind.classes';
import './CharacterGenerator.css';
import { NotificationContext } from 'contexts/notificationContext';
import Slider, {
  SliderThumb,
  SliderValueLabelProps
} from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import GppMaybeRoundedIcon from '@mui/icons-material/GppMaybeRounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
const PrettoSlider = styled(Slider)({
  color: '#119FA4',
  height: 6,
  '& .MuiSlider-track': {
    border: 'none'
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#119FA4',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit'
    },
    '&::before': {
      display: 'none'
    }
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 0,
    fontSize: 12,
    background: 'unset',
    color: '#FFFFFF',
    padding: 0,
    margin: 5,
    width: 28,
    height: 28,
    borderRadius: '20% 20% 20% 20%',
    backgroundColor: '#119FA4',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%)  scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(0%, -120%)  scale(1)'
    },
    '& > *': {
      transform: ''
    }
  }
});

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
  const [password, setPassword] = useState<string>('');
  const calculateBarWidth = (value: number) => {
    setBarColor1(value > 1 ? 'bg-primary' : 'dark:bg-gray bg-blackwhite');
    setBarColor2(value > 5 ? 'bg-primary' : 'dark:bg-gray bg-blackwhite');
    setBarColor3(value > 10 ? 'bg-primary' : 'dark:bg-gray bg-blackwhite');
    setBarColor4(value > 25 ? 'bg-primary' : 'dark:bg-gray bg-blackwhite');
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleCheckboxChange = (
    stateSetter: {
      (value: React.SetStateAction<boolean>): void;
      (arg0: boolean): void;
    },
    currentValue: boolean
  ) => {
    const totalSelected = [
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    ].filter(Boolean).length;

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
    navigator.clipboard.writeText(password).then(
      () => {},
      (err) => {
        console.error('Error al copiar la contraseña: ', err);
      }
    );
  };

  useEffect(() => {
    generatePassword(sliderValue);
  }, [
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    sliderValue
  ]);

  return (
    <div className="w-full   text-black sm:py-6 sm:pr-6 ">
      <div className="grid max-lg:grid-rows-auto lg:grid-cols-3  sm:gap-6">
        <div className="  lg:col-span-2 grid grid-cols-5 bg-white rounded-xl sm:gap-6 gap-2 p-6">
          <div className="grid grid-cols-5 col-span-5 sm:gap-6 gap-3">
            <div className="col-span-4 ">
              <div className="bg-primary bg-opacity-15 rounded-lg w-full h-12 flex">
                <input
                  value={password}
                  type="text"
                  className="h-12 bg-transparent outline-none w-full pl-3"
                />
                <button
                  onClick={() => generatePassword(sliderValue)}
                  className="px-3 text-black opacity-50 hover:opacity-100 hover:text-primary "
                >
                  <AutorenewRoundedIcon />
                </button>
              </div>
              <div className="max-sm:hidden w-full flex justify-between items-center space-x-3 ">
                <div>Weak</div>
                <div className="h-1.5 w-full bg-primary bg-opacity-15 rounded-lg ">
                <div
                  className={`h-full bg-primary opacity-100 rounded-lg `}
                  style={{ width: `${sliderValue * 2}%` }}
                />
              </div>
                <div>Strong</div>
              </div>
              <div className="max-sm:hidden flex max-sm:flex-col items-center space-x-4 w-full  mt-5 text-grey">
                <div className="font-semibold text-2xl text-start basis-1/4 dark:text-whitebg text-darkgray">
                  Password Length
                </div>
                <div className="flex space-x-4 items-center basis-3/4 text-gray dark:text-whitegray w-full">
                  <div>1</div>

                  <div className="w-full flex items-center">
                    <PrettoSlider
                      valueLabelDisplay="auto"
                      aria-label="pretto slider"
                      defaultValue={20}
                      color="secondary"
                      min={1}
                      max={50}
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
                  </div>

                  <div>50</div>
                </div>
              </div>
            </div>
            <div className="w-full">

              <button
                onClick={copyToClipboard}
                className="bg-primary w-full h-12 space-x-2 rounded-lg text-white flex items-center justify-center font-medium"
              >
                <ContentCopyRoundedIcon />
                <div className="max-sm:hidden">Copy</div>
              </button>
            </div>
          </div>
          <div className="col-span-5 sm:hidden">
            <div className=" w-full flex justify-between items-center space-x-3 mb-10 ">

              <div className="h-1.5 w-full bg-primary bg-opacity-15 rounded-lg ">
                <div
                  className={`h-full bg-primary opacity-100 rounded-lg `}
                  style={{ width: `${sliderValue * 2}%` }}
                />
              </div>

            </div>
            <div className=" flex max-sm:flex-col items-center space-x-4 w-full  mt-8 text-grey">
              <div className="flex space-x-4 items-center basis-3/4 text-gray dark:text-whitegray w-full">
                <div className="w-full flex items-center">
                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={20}
                    color="secondary"
                    min={1}
                    max={50}
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </div>

                <div className="w-8">{sliderValue}</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex-col max-sm:w-96 max-sm:mx-auto  sm:flex sm:justify-between max-sm:grid max-sm:grid-cols-2 max-sm:gap-6 bg-white rounded-xl p-6">
          <div className="flex justify-between auto-cols-max  text-xl font-medium">
            <div className=" flex space-x-2">
              <input
                checked={includeUppercase}
                onChange={() =>
                  handleCheckboxChange(setIncludeUppercase, includeUppercase)
                }
                type="checkbox"
                className="scale-150 accent-primary"
              />
              <div>Uppercase</div>
            </div>
            <div className="max-lg:hidden text-gray-400 flex justify-start">
              <span className="text-primary"> ej.</span> ABCDE
            </div>
          </div>
          <div className="flex justify-between auto-cols-max  text-xl font-medium">
            <div className=" flex space-x-2">
              <input
                checked={includeLowercase}
                onChange={() =>
                  handleCheckboxChange(setIncludeLowercase, includeLowercase)
                }
                type="checkbox"
                className="scale-150 accent-primary"
              />
              <div>Lowercase</div>
            </div>
            <div className="max-lg:hidden text-gray-400 flex justify-start">
              <span className="text-primary"> ej.</span> abcde
            </div>
          </div>
          <div className="flex justify-between auto-cols-max  text-xl font-medium">
            <div className=" flex space-x-2">
              <input
                checked={includeNumbers}
                onChange={() =>
                  handleCheckboxChange(setIncludeNumbers, includeNumbers)
                }
                type="checkbox"
                className="scale-150 accent-primary"
              />
              <div>Number</div>
            </div>
            <div className="max-lg:hidden text-gray-400 flex justify-start">
              <span className="text-primary"> ej.</span> 123456
            </div>
          </div>
          <div className="flex justify-between auto-cols-max  text-xl font-medium">
            <div className=" flex space-x-2">
              <input
                checked={includeSymbols}
                onChange={() =>
                  handleCheckboxChange(setIncludeSymbols, includeSymbols)
                }
                type="checkbox"
                className="scale-150 accent-primary"
              />
              <div>Symbols</div>
            </div>
            <div className="max-lg:hidden text-gray-400 flex justify-start">
              <span className="text-primary"> ej.</span> #!@/~
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default Generator;

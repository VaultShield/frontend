import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useRegister } from 'hooks/useRegister';

interface RegisterProps {
  onClose: () => void;
  handleLogin: () => void;
  seedWords: string[];
  showWords: boolean;
  handleAddWords: (seedWords: string[]) => void;
  handleSeedWords: () => void;
}
const RegisterForm = ({
  onClose,
  handleLogin,
  seedWords,
  showWords,
  handleAddWords,
  handleSeedWords
}: RegisterProps) => {
  const {
    registerNewUser,
    setEmail,
    setPassword,
    setUsername,
    errors,
    username,
    email,
    password
  } = useRegister({
    onClose,
    handleLogin,
    seedWords,
    showWords,
    handleAddWords,
    handleSeedWords
  });
  return (
    <form
      className="w-full flex flex-col justify-center items-center space-y-4 px-5   h-full mt-[-2.84rem] text-black"
      onSubmit={registerNewUser}
    >
      <div className="text-4xl  mb-5">Lets Start!</div>
      <div className="w-full max-w-[30rem] flex items-center">
        <PersonRoundedIcon className="absolute ml-4 text-primary" />
        <input
          type="text"
          className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>
      <div className="w-full max-w-[30rem]  flex items-center">
        <EmailRoundedIcon className="absolute ml-4 text-primary" />
        <input
          type="email"
          className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}{' '}
      </div>
      <div className="w-full max-w-[30rem]  flex items-center">
        <KeyRoundedIcon className="absolute ml-4 text-primary" />
        <input
          type="password"
          className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <button className="bg-primary w-full max-w-[30rem]  h-12 rounded-full text-white">
        Create Account
      </button>
      {errors.error && <p className="text-red-500">{errors.error}</p>}
    </form>
  );
};

export default RegisterForm;

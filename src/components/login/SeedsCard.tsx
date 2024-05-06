import { ChangeEvent } from 'react';

interface SeedsCardProps {
  handleChangeSeeds: (e: ChangeEvent<HTMLInputElement>, i: number) => void;
  seeds: string[];
}
const SeedsCard = ({ handleChangeSeeds, seeds }: SeedsCardProps) => {
  return (
    <div className="w-full h-[90%] flex flex-col justify-center items-center space-y-5">
      <div className="font-bold text-2xl text-black">Enter All Words!</div>
      <div className="text-gray-400">
        Enter the words we gave you when you registered in the same order.
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 min-[420px]:grid-cols-2 gap-4 p-5 bg-primary bg-opacity-15 rounded-lg max-h-[70%] overflow-y-auto">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center text-center rounded-lg sm:w-40 space-x-2 text-black"
          >
            <div className="text-black w-4">{index + 1}</div>
            <input
              type="text"
              className="rounded-lg h-12 w-32 bg-white outline-none pl-2"
              onChange={(e) => handleChangeSeeds(e, index)}
              value={seeds[index]}
            />
          </div>
        ))}
      </div>

      <div className="w-full max-w-[30rem] ">
        <button
          type="submit"
          className="bg-primary text-white h-12 w-full rounded-full font-semibold"
        >
          Recover
        </button>
      </div>
    </div>
  );
};

export default SeedsCard;

import calculatorButtonList from '@data/calculatorButton';
import useCalculator from '@hooks/useCalculator';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import CalculatorHistory from './CalculatorHistory';

const Calculator = () => {
  const form = useRef<HTMLDivElement>(null);
  const { latestResult, resultHistory, currentText, handleInput } = useCalculator();

  const handle = (key: string) => {
    form.current?.focus();

    handleInput(key);
  };
  return (
    <div className="transition-all duration-300 bg-[#4C3D3D] dark:bg-[#FFF7D4] px-4 py-2 rounded-lg w-96 h-[500px] max-w-full flex flex-col shadow-xl gap-4 select-none">
      <label className="text-[#FFF7D4] dark:text-[#4C3D3D] font-semibold self-center text-2xl">
        CALCULATOR
      </label>
      <div
        ref={form}
        tabIndex={0}
        className="flex flex-col gap-2 w-full text-[#4C3D3D] dark:text-[#FFF7D4] bg-[#FFF7D4] dark:bg-[#4C3D3D] rounded-md p-4 outline-none focus:outline-[#FFD369] focus:ring"
        onKeyDown={(ev) => handle(ev.key)}
      >
        <div className="flex justify-between items-center">
          <CalculatorHistory historyList={resultHistory} />
          <div>Ans = {latestResult}</div>
        </div>
        <div
          className={twMerge(
            'font-semibold text-end truncate',
            currentText.length === 0 && 'opacity-30'
          )}
        >
          {currentText.length !== 0 ? currentText : 'Input'}
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 grow text-2xl font-semibold">
        {calculatorButtonList.map((calculatorButton) => (
          <button
            key={calculatorButton.text}
            onClick={() =>
              handle(calculatorButton.input ? calculatorButton.input : calculatorButton.text)
            }
            className="bg-[#FFF7D4] hover:bg-[#e9e1c1] active:bg-[#fcf6dc] dark:bg-[#4C3D3D] dark:hover:bg-[#3b3030] dark:active:bg-[#604d4d] dark:text-[#FFF7D4] rounded-md flex items-center justify-center shadow-md"
          >
            <p>{calculatorButton.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

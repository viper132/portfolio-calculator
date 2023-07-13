import calculatorRegex from '@utils/calculateRegex';
import { FC, useState } from 'react';
import { AiOutlineHistory } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';

interface props {
  historyList: string[];
}

const History: FC<props> = ({ historyList }) => {
  return (
    <div>
      {historyList.length === 0 ? (
        <div>No History Yet. 📝</div>
      ) : (
        <div className="flex flex-col gap-2">
          {historyList.map((history, key) => (
            <div className="tracking-[2px] flex items-center" key={key}>
              <p>{history}=</p>
              <div className="border px-1 rounded-md">
                <p>{calculatorRegex(history)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CalculatorHistory: FC<props> = ({ historyList }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button data-tooltip-id="my-tooltip" onClick={() => setOpen(!open)}>
        <AiOutlineHistory className="hover:opacity-90 active:opacity-80" />
      </button>
      <Tooltip
        id="my-tooltip"
        render={() => <History historyList={historyList} />}
        place="bottom-start"
        isOpen={open}
        className="shadow-md opacity-100 transition-colors dark:bg-[#222831] bg-white text-[#4C3D3D] dark:text-[#FFD369] font-semibold"
      />
    </>
  );
};

export default CalculatorHistory;

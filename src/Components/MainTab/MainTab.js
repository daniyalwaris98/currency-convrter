import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../Dropdown/Dropdown";
import { fetch } from "../Store/thunk/Fetchdata";
import { useEffect } from "react";

export function MainTab() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.currency);
  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);
  return (
    <div className="flex mx-auto items-center py-[20px] flex-col  w-[80%] justify-center border-gray-300 border-2 rounded border border-gray-400-2xl mt-2">
      <div className="w-[88%] sm:flex sm:justify-between sm:gap-8 ">
        <div className="my-[15px] sm:grow sm:min-w-100px ">
          <h2 className="text-left color font-bold mb-[4px]">Amount</h2>
          <input
            className=" p-2 rounded border w-full border-gray-400 h-[40px] "
            type="number"
            placeholder="$1.00s"
          ></input>
        </div>

        <div className="my-[15px] sm:flex-shrink">
          <h2 className="text-left color font-bold mb-[4px]">From</h2>
          <div className="h-[40px] rounded border border-gray-400">
            <Dropdown />
          </div>
        </div>
        <div className="my-[15px] sm:flex-shrink">
          <h2 className="text-left color font-bold mb-[4px]">To</h2>
          <div className="h-[40px] cursor:pointer rounded border border-gray-400">
            <Dropdown />
          </div>
        </div>
      </div>
      <button
        className="hover:bg-blue-500 bg-blue-600 text-white font-bold py-[10px] rounded-lg w-[88%] mt-7 sm:mt-5 sm:self-end sm:w-[20%] sm:mr-14"
        type="submti"
      >
        Convert
      </button>
    </div>
  );
}

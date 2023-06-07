import { useState } from "react";
import { useSelector } from "react-redux";
import icon from "../Shared/dropdown.png";

export function Dropdown() {
  const [isopen, setisopen] = useState(false);
  const [flagpng, setFlagpng] = useState("https://flagcdn.com/w320/tc.png");
  const [Symbol, setSymbol] = useState("");

  const [nameCurrency, setNameC] = useState("");

  const data = useSelector((state) => state.currency.data);
  const filteredwithcurrencies = data.filter((i) => "currencies" in i);
  const currencies = data.currencies;
  const toggleOpen = () => {
    setisopen(!isopen);
  };
  const handleClick = (e) => {
    const { currencies, flags } = Object(
      filteredwithcurrencies.filter((x, index) => index == e.target.value)
    )[0];
    setFlagpng(flags.png);
    setSymbol(Object.keys(currencies)[0]);
    setNameC(currencies[`${Object.keys(currencies)[0]}`].name);
    return console.log(
      "isClicked",
      filteredwithcurrencies.filter((x, index) => index == e.target.value),
      currencies[`${Object.keys(currencies)[0]}`].name,
      e.target.value
    );
  };

  return (
    <div
      onClick={toggleOpen}
      className="h-full relative w-ful1 flex items-stretch justify-start hover:cursor-pointer px-2  sm:min-w-2/4"
    >
      <img className=" h-[17px] w-[22px] my-auto mr-2" src={flagpng}></img>
      <div className="text-left my-auto grow overflow-hidden whitespace-nowrap">
        {`${Symbol}- ${nameCurrency}`}
      </div>

      <img
        className={`h-[80%] my-auto justify-self-end ${
          isopen === true ? "rotate-180" : ""
        }`}
        src={icon}
      ></img>
      <ul
        className={`absolute m1 bg-white top-[110%] left-0 rounded border-gray-500 w-full max-h-[200px] overflow-scroll ring-1 ${
          isopen == true ? "opacity-1 z-10" : "opacity-0"
        }`}
      >
        {filteredwithcurrencies.slice(0, 9).map((each, i) => (
          <li
            key={i}
            className={` px-2 flex  items-center text-base text-left overflow-hidden whitespace-nowrap`}
            onClick={handleClick}
          >
            <img src={each.flags.png} className=" h-[17px] w-[22px]"></img>
            <button value={i} className="grow text-left py-1">
              {Object.keys(each.currencies)}-
              {each.currencies[`${Object.keys(each.currencies)[0]}`].name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

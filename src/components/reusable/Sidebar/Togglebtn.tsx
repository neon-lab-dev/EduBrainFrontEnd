import { useState } from "react";


const Togglebtn = (): JSX.Element => {
  const [isLightMode, setLightMode] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  const handleLightToggle: () => void = () => {
    setLightMode(!isLightMode);
    setDarkMode(false);
    setLightMode(true);
  };

  const handleDarkToggle: () => void = () => {
    setDarkMode(!isDarkMode);
    setLightMode(false);
    setDarkMode(true);
  };

  return (
    <div className="">
      <div className="border-neutral-55 border-2 rounded-xl h-[45px] flex items-center justify-between px-1">
    {/* <button className="text-white">Light</button>
    <button className="text-white">Dark</button> */}
     <button
     data-tip="Make light mode"
          className={`${isLightMode ? "text-primary-55 rounded-lg bg-primary-95 px-9 py-1 tooltip" : "text-neutral-40 px-9 py-2"} focus:outline-none font-roboto font-normal tooltip`}
          onClick={handleLightToggle}
        >
          Light
        </button>
        <button
        data-tip="Make dark mode"
           className={`${isDarkMode ? "text-primary-55 rounded-lg bg-primary-95 px-9 py-1 tooltip" : "text-neutral-40 px-9 py-2"} focus:outline-none font-roboto font-normal tooltip`}
          onClick={handleDarkToggle}
        >
          Dark
        </button>
</div>
    </div>
  );
};

export default Togglebtn;

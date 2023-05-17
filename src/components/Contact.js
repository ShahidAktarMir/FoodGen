import { useState } from "react";
const Section = ({ title, des, isV, setV }) => {
  return (
    <div className="border border-x-red-500 hover:text-3xl cursor-grab hover:border-y-green-500 hover:border-x-red-100 p-10 m-5 transition-all duration-200 ease-in-out rounded-md bg-slate-100">
      <p className="text-xl font-medium">{title}</p>
      {isV && <p>{des}</p>}
      {!isV ? (
        <button className="bg-stone-700 h-7 w-16 text-center text-white rounded-md text-xs mt-5 hover:bg-stone-800 transition-all duration-200 ease-in-out">
          Show
        </button>
      ) : (
        <button
          className="bg-stone-700 h-7 w-16  text-white rounded-md text-xs mt-5 hover:bg-stone-800 transition-all duration-200 ease-in-out"
          onClick={setV()}
        >
          Hide
        </button>
      )}
    </div>
  );
};
const Contact = () => {
  const [isVisible, setIsvisiable] = useState(true);
  return (
    <>
      <Section
        title="Contact"
        des="Name : Shahid Aktar Mir | Mob : 8013203559 | Email : shahidaktarm@gmail.com"
        isV={isVisible}
        setV={() => {
          setIsvisiable(true);
        }}
      />
    </>
  );
};

export default Contact;

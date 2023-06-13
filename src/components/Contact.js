import { useState } from "react";
const Section = ({ title, des }) => {
  return (
    <div className="border border-x-red-500 hover:text-3xl cursor-grab hover:border-y-green-500 hover:border-x-red-100 p-10 m-5 transition-all duration-200 ease-in-out rounded-md bg-slate-100">
      <p className="text-xl font-medium">{title}</p>
      <p>{des}</p>
    </div>
  );
};
const Contact = () => {
  return (
    <>
      <Section
        title="Contact"
        des="Name : Shahid Aktar Mir | Mob : 8013203559 | Email : shahidaktarm@gmail.com"
      />
    </>
  );
};

export default Contact;

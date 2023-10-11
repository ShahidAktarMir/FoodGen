const Footer = () => {
  return (
    <>
      <div className="h-full bg-slate-900 w-full grid grid-cols-3 justify-items-center ">
        <div className="p-10">
          <p className="text-white">Powered by</p>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
            className="h-10"
          />
        </div>
        <div className="text-white p-10">
          <h1 className="text-slate-500 font-extrabold">COMPANY</h1>
          <p>About us</p>
          <p>Contact us</p>
          <p>Help</p>
        </div>
        <div className="text-white p-10">
          <h1 className="text-slate-500 font-extrabold">LEGAL</h1>
          <p>Refund & Cancellation</p>
          <p>Privacy Policy</p>
          <p>Offer Terms</p>
        </div>
        <div className=" flex flex-wrap border-2 h-14 w-64 justify-center bg-slate-200 rounded-3xl p-1 mt-10">
          <h1 className="m-2 mr-10 font-medium text-xl">Follow me</h1>
          <a href="https://github.com/ShahidAktarMir/FoodGen" target="_blank">
            <img
              src="https://www.svgrepo.com/show/494272/github-round.svg"
              className="h-10 m-1"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shahid-aktar-mir-564b15203/"
            target="_blank"
          >
            <img
              src="https://www.svgrepo.com/show/494278/linkedin-round.svg"
              className="h-10 m-1"
            />
          </a>
        </div>
      </div>
      <div className="h-full bg-slate-900 text-white p-10 text-center">
        <h1>© 2023 Foodgen</h1>
      </div>
    </>
  );
};

export default Footer;

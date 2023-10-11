import SearchBar from "./SearchBar";
const Shimmer2 = () => {
  return (
    <div className="flex flex-wrap flex-col">
      <div className="flex flex-wrap justify-end m-auto mt-5 items-center rounded-3xl p-10 w-[700px]  bg-gray-200  animate-pulse ">
        <p className="h-[217px] w-[344px] rounded-3xl bg-gray-300 animate-pulse"></p>
      </div>
      <div className="m-5 ">
        <p className="border-b-2 border-orange-400 font-extrabold  text-2xl ">
          Menus
        </p>

        {Array(100)
          .fill("0")
          .map(() => {
            return (
              <div className="flex flex-wrap flex-row justify-between animate-pulse items-center mb-2 rounded-xl   p-5  w-[80%] m-auto border-b-2 border-yellow-200">
                <p className="h-[20px] w-[20px] rounded-xl  bg-gray-200 animate-pulse"></p>
                <p className="w-[100px] h-[50px] text-center rounded-xl   bg-gray-200   animate-pulse"></p>
                <p className="w-[100px] h-[50px]  overflow-hidden rounded-xl    bg-gray-200  text-center animate-pulse"></p>
                <p className="h-[50px] w-[100px] rounded-xl   bg-gray-200  animate-pulse"></p>
                <p className="w-[100px] h-[50px] text-center rounded-xl    bg-gray-200 animate-pulse"></p>
                <button className="w-[100px] h-[40px] text-center bg-yellow-300  rounded-2xl animate-pulse"></button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shimmer2;

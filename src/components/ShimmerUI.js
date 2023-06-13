import SearchBar from "./SearchBar";
const Shimmer = () => {
  return (
    <div className="bg-slate-300  p-5">
      <SearchBar />
      <div className="grid grid-cols-6 justify-items-center justify-center ml-28 mr-28">
        {Array(15)
          .fill(null)
          .map((i) => {
            return (
              <div
                className="my-5 mx-5 p-3 h-auto w-[15rem] bg-gray-200 rounded-xl hover:shadow transition-all duration-100"
                key={i}
              >
                <img className=" mt-2 h-[10rem] w-[18rem] bg-gray-100 rounded-t-lg mb-5 animate-pulse " />
                <div>
                  <h3 className="h-[1rem] w-[10rem] mt-5 bg-gray-100 rounded animate-pulse ">
                    {}
                  </h3>
                  <h4 className="h-[1rem] w-[6rem] mt-5 bg-gray-100 rounded animate-pulse ">
                    {}
                  </h4>
                  <p className="h-[1rem] w-[9rem] bg-gray-100 mt-5 rounded animate-pulse "></p>
                  <p className="  mt-2 h-0.5 w-0.5 bg-gray-100 rounded-full animate-pulse "></p>
                  <p className=" text-green-500  mt-2 hover:bg-green-500 animate-pulse  transition-all duration-200 ease-in-out hover:text-gray-100  bg-gray-200 rounded-full p-2 text-center font-semibold">
                    Loading....
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shimmer;

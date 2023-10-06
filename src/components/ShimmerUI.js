import SearchBar from "./SearchBar";
const Shimmer = () => {
  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-4 gap-4  justify-items-center justify-center">
        {Array(9)
          .fill(null)
          .map((i) => {
            return (
              <div
                className="2xl:w-[350px] 2xl:h-[320px] flex flex-wrap flex-col justify-between xl:h-[300px] xl:w-[300px]  lg:h-[240px] lg:w-[240px]  md:h-[210px] md:w-[170px]  sm:h-[150px] w-[150px]  rounded-xl transition-all duration-100 p-2 bg-gray-50  hover:shadow "
                key={i}
              >
                <img className="  2xl:h-[150px] 2xl:w-[350px]  xl:w-[300px]   lg:w-[240px]  xl:h-[150px] lg:h-[100px] md:h-[80px] sm:h-[60px]    md:w-[170px]  sm:w-[150px] bg-gray-200   animate-pulse " />
                <div className="flex flex-wrap flex-col pl-2">
                  <h3 className="2xl:h-[0.7rem] 2xl:w-[15rem]  xl:w-[12rem]   lg:w-[10rem]  xl:h-[0.7rem] lg:h-[0.7rem] md:h-[0.5rem] sm:h-[0.2rem]    md:w-[8rem]  sm:w-[6rem]  mt-5 bg-gray-200 rounded-xl animate-pulse ">
                    {}
                  </h3>
                  <h4 className="2xl:h-[0.7rem] 2xl:w-[10rem]  xl:w-[8rem]   lg:w-[6rem]  xl:h-[0.7rem] lg:h-[0.7rem] md:h-[0.5rem] sm:h-[0.2rem]    md:w-[4rem]  sm:w-[2rem]  mt-5 bg-gray-200 rounded-xl animate-pulse ">
                    {}
                  </h4>
                  <p className="2xl:h-[0.7rem] 2xl:w-[8rem]  xl:w-[6rem] xl:h-[0.7rem] lg:h-[0.7rem] md:h-[0.5rem] sm:h-[0.2rem]   lg:w-[5rem]   md:w-[3rem]  sm:w-[1rem]  bg-gray-200 mt-5 rounded-xl animate-pulse "></p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shimmer;

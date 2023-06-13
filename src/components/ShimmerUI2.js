import SearchBar from "./SearchBar";
const Shimmer2 = () => {
  return (
    <div>
      <div className="m-10 mt-36 flex flex-wrap space-x-10">
        <div className="bg-gray-100 p-5 animate-pulse border-2 border-x-red-500 border-y-green-100 hover:border-y-green-500 hover:border-x-red-100 rounded-2xl h-[33rem] w-96 transition-all duration-500 ease-in-out"></div>
        <div className=" p-2 rounded-lg  animate-pulse w-3/4">
          <p className="text-center animate-pulse"></p>
          {Array(15)
            .fill(null)
            .map((i) => {
              return (
                <div
                  className="grid grid-cols-6 gap-4 border-2 animate-pulse border-x-orange-200 bg-slate-50 p-5 m-5 rounded-lg"
                  key={i}
                >
                  <img className="h-5 animate-pulse mt-14" />{" "}
                  <p className="ml-2 mt-12">{}</p>
                  <p className="ml-2 animate-pulse mt-10">{}</p>
                  <img className="h-20 m-5 rounded animate-pulse" />
                  <p className="mt-10 ml-10 animate-pulse">₹{}</p>
                  <button className="bg-green-300 m-3 ml-10 animate-pulse p-1 h-8 mt-10 hover:bg-green-400 transition-all duration-100"></button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Shimmer2;

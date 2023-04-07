import { useEffect, useState } from "react";
const useOnline = () => {
  const [isOnline, setIsonline] = useState();

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsonline(true);
    });
    window.addEventListener("offline", () => {
      setIsonline(false);
    });
  }, []);
  return isOnline;
};
export default useOnline;

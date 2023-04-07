import { useEffect, useState } from "react";
const useOnline = () => {
  const [isOnline, setIsonline] = useState(false);
  const [isOffnline, setIsoffnline] = useState(false);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsonline("true");
    });
    window.addEventListener("offline", () => {
      setIsoffnline(true);
    });
  }, []);
  return isOnline;
};
export default useOnline;

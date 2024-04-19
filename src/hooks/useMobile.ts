import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

export default function useMobile() {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState<boolean>(width < 769);

  useEffect(() => {
    setIsMobile(width < 821);
  }, [width]);

  return isMobile;
}

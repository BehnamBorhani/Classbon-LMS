"use client";
import { useEffect } from "react";

const TawkToScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67f6b71d5ab784191531b107/1iodrml8v";
    script.charset = "UTF-8";
    script.async = true;
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToScript;

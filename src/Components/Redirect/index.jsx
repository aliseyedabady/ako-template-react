import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redirect = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let arr = [
    {
      from: "/product/card",
      to: "/card",
    },
    {
      from: "/client/amirkabir-foodcourt",
      to: "/c/5359886",
    },
    {
      from: "/blog/mzythay-kart-oyzyt-nfc",
      to: "/blog/advantage-nfc-visit-card",
    },
    {
      from: "/client/battery-center",
      to: "/c/3643306",
    },
    {
      from: "/client/cartino",
      to: "/c/5020062",
    },
  ];
  const redirect = () => {
    arr.map(re => {
      if (pathname.includes(re.from)) {
        navigate(re.to);
      }
    });
  };
  useEffect(() => {
    redirect();
  }, [pathname]);
  return <></>;
};

export default Redirect;

import React from "react";
import ribben from "../assets/Banner/ribben.png";
import banner from "../assets/Banner/banner.png";
import trophygif from "../assets/Banner/trophybg.gif";
import mountain from "../assets/Banner/mountain.png";
import ribbens from "../assets/Banner/ribbens.png";
import "../styles/Header.css";

const Header = ({ title }) => {
  return (
    // <header className="h-[45%] flex justify-between border bg-white relative before:absolute before:bg-borderbg before:-z-10 before:inset-0 before:-left-[3px] before:-top-[3px] before:rounded-md rounded-md before:w-[calc(100%+6px)] before:h-[calc(100%+6px)]">
    //   <img src={mountain} alt="" className="absolute object-contain bottom-0 h-[50%]"/>
    //   <img src={ribbens} alt="" className="absolute object-contain top-0 right-[25%] h-[30%]"/>
    //   <section className="flex h-full flex-1 pl-[5rem] pt-[6rem] flex-col z-10">
    //     <div className="flex">
    //       <h1 className="text-[3rem] font-semibold text-[#0478FF]">
    //         {title}
    //       </h1>
    //       <img src={ribben} alt="" className="object-contain"/>
    //     </div>
    //     <p className="text-xl">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     </p>
    //     <p className="text-xl">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     </p>
    //   </section>
    //   <section className="relative m-2 my-4 z-10">
    //     <img src={banner} alt="" className="object-fill h-full w-[15.5rem]"/>
    //     <img
    //       src={trophygif}
    //       alt=""
    //       className="absolute top-0 -z-[1] h-full shadow-sm"
    //     />
    //   </section>
    // </header>
    <header className="header">
      <img src={mountain} alt="" className="header__image--bottom" />
      <img src={ribbens} alt="" className="header__image--top" />
      <section className="header__content">
        <div className="header__title">
          <h1 className="header__title-text">{title}</h1>
          <img src={ribben} alt="" className="header__title-image" />
        </div>
        <p className="header__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="header__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
      <section className="header__banner">
        <img src={banner} alt="" className="header__banner-image" />
        <img src={trophygif} alt="" className="header__banner-trophy" />
      </section>
    </header>
  );
};

export default Header;

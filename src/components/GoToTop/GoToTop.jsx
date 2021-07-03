import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GoToTop = ({ bouncerImg }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <BackToTop>
          <div onClick={() => scrollToTop()}>
            {bouncerImg && <DownArrow src={`/images/${bouncerImg}`} />}
          </div>
        </BackToTop>
      )}
    </>
  );
};

export default GoToTop;

const BackToTop = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 15px;
  right: 15px;
  background: radial-gradient(
    99.87% 413.14% at 0% 4.98%,
    #443453,
    #232323,
    #252425
  );
  z-index: 10000;
  width: 45px;
  height: 45px;
  /* border-radius: 25px; */
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateX(160deg);

  &:hover {
    background: radial-gradient(
      99.87% 413.14% at 0% 4.98%,
      #252425,
      #232323,
      #443453
    );
  }
`;

const DownArrow = styled.img`
  margin-bottom: -7px;
  height: 40px;
  animation: animateButton infinite 1.5s;
`;

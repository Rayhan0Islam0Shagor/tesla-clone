import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

import { useSelector } from "react-redux";
import { selectCar } from "../../features/car/carSlice";

const Header = ({ burgerStatus, setBurgerStatus }) => {
  const cars = useSelector(selectCar);

  return (
    <Container>
      <a href="!#">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, i) => {
            return (
              <a href="!#" key={i}>
                {car}
              </a>
            );
          })}
      </Menu>

      <RightMenu>
        <ResponsiveA href="!#">Shop</ResponsiveA>
        <ResponsiveA href="!#">Tesla Account</ResponsiveA>

        {burgerStatus ? (
          <CustomClose onClick={() => setBurgerStatus(!burgerStatus)} />
        ) : (
          <CustomMenu onClick={() => setBurgerStatus(!burgerStatus)} />
        )}
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <li>
          <a href="!#">Existing Inventory</a>
        </li>
        <li>
          <a href="!#">Used Inventory</a>
        </li>
        <li>
          <a href="!#">Trad-in</a>
        </li>
        <li>
          <a href="!#">Cybertruck</a>
        </li>
        <li>
          <a href="!#">Roadaster</a>
        </li>
        <li>
          <a href="!#">Existing Inventory</a>
        </li>
        <li>
          <a href="!#">Existing Inventory</a>
        </li>
        <li>
          <a href="!#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #ffffff28;
  box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.5) 0px 30px 60px -30px;
  z-index: 1000;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-decoration: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-decoration: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MdMenu)`
  cursor: pointer;
  font-size: 25px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  padding: 0px 20px 20px 20px;
  background: #ffffff28;
  width: 300px;
  z-index: -1;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;

  box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.5) 0px 30px 60px -30px;
  z-index: 1000;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.5) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.5) 0px 30px 60px -30px;
      z-index: 1000;
      cursor: pointer;
    }

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(MdClose)`
  cursor: pointer;
  font-size: 25px;
`;

const ResponsiveA = styled.a`
  @media (max-width: 360px) {
    display: none;
  }
`;

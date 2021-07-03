import styled from "styled-components";
import Section from "../Section/Section";
import GoToTop from "../GoToTop/GoToTop";

import carInfos from "../../carInfo.json";

const Home = ({ setBurgerStatus }) => {
  return (
    <Container onClick={() => setBurgerStatus(false)}>
      {carInfos &&
        carInfos.slice(0, 1).map((carInfo) => {
          return (
            <Section
              key={carInfo.id}
              title={carInfo.title}
              description={carInfo.description}
              backgroundImg={carInfo.image}
              leftButtonText="Custom order"
              rightButtonText="Existing inventory"
              bouncerImg="down-arrow.svg"
            />
          );
        })}
      {carInfos &&
        carInfos.slice(1, 4).map((carInfo) => {
          return (
            <Section
              key={carInfo.id}
              title={carInfo.title}
              description={carInfo.description}
              backgroundImg={carInfo.image}
              leftButtonText="Custom order"
              rightButtonText="Existing inventory"
            />
          );
        })}
      {carInfos &&
        carInfos.slice(4, 5).map((carInfo) => {
          return (
            <Section
              key={carInfo.id}
              title={carInfo.title}
              description={carInfo.description}
              backgroundImg={carInfo.image}
              leftButtonText="Order now"
              rightButtonText="Learn more"
            />
          );
        })}
      {carInfos &&
        carInfos.slice(5, carInfos.length).map((carInfo) => {
          return (
            <Section
              key={carInfo.id}
              title={carInfo.title}
              description={carInfo.description}
              backgroundImg={carInfo.image}
              leftButtonText="Shop now"
            />
          );
        })}
      <GoToTop bouncerImg="down-arrow.svg" />
    </Container>
  );
};

export default Home;

const Container = styled.section`
  height: 100vh;
`;

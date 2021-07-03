import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  backgroundImg,
  leftButtonText,
  rightButtonText,
  bouncerImg,
}) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </ItemText>
      </Fade>

      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            {leftButtonText && <LeftButton>{leftButtonText}</LeftButton>}
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
          {bouncerImg && (
            <DownArrow loading="lazy" src={`/images/${bouncerImg}`} />
          )}
        </Buttons>
      </Fade>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => `url("/images/${props.backgroundImg}")`};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateButton infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

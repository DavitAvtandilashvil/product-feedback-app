import { Link } from "react-router-dom";
import arrowLeft from "/assets/shared/icon-arrow-left.svg";
import styled from "styled-components";

function GoBackComponent({ color = "#647196" }) {
  return (
    <StyledGoBackComponent>
      <Link to={-1}>
        <img src={arrowLeft} alt="arrow-left" />
        <GoBack color={color}>Go Back</GoBack>
      </Link>
    </StyledGoBackComponent>
  );
}

const StyledGoBackComponent = styled.div`
  & > a {
    display: flex;
    align-items: center;
    gap: 1.567rem;
  }
`;

const GoBack = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.023rem;
  text-align: left;
  color: ${(props) => props.color};
`;

export default GoBackComponent;

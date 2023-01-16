import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  span {
    color: ${props => props.scoreColor};
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${props => props.scoreColor};
  border-radius: 150px;

  height: 43px;
  width: 43px;

  margin-right: 5px;

  span {
    color: #ffffff;
  }
`;

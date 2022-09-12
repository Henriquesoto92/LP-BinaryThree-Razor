import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const BoxWorkstation = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  gap: 50px;

  div h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.25px;
    margin-bottom: 1rem;
    color: #d9e3ea;
  }

  div h2 span {
    color: #5d5dff;
  }

  div p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.25px;
    color: #9ba9b4;
  }
`;
export const CardImg = styled.div`
  height: 300px;
  width: 100%;
  border-radius: 12px;
  background: #25282c;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 300px;
    width: 600px;
    border-radius: 12px;
  }
`;

import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 10% 89%;

  .logoContainer {
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    /* width: 20%; */
    height: 70px;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-5);
  }

  .logo {
    height: auto;
    width: 80%;
    padding: 5px;
  }

  .titleContainer {
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 70px;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-5);
  }

  .title {
    letter-spacing: var(--letterSpacing);
    font-weight: 700;
    font-size: 30px;
  }
`;

export default Wrapper;

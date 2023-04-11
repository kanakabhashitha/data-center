import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 100vh; */
  width: 100%;
  padding: 20px;

  .main-row-1 {
    width: 100%;
    margin-top: 19px;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 60% 39%;
  }

  .main-row-1-col-1 {
    background-color: var(--white);
    height: 40vh;
    border-radius: var(--borderRadius);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-5);
  }

  .main-row-1-col-2 {
    background-color: var(--white);
    height: 40vh;
    border-radius: var(--borderRadius);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-5);
  }

  .main-row-1-col-2-row-1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main-row-2 {
    width: 100%;
    margin-top: 15px;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 47% 52%;
  }

  .main-row-2-col-1 {
    background-color: var(--white);
    height: 41vh;
    border-radius: var(--borderRadius);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-5);
  }

  .main-row-2-col-2 {
    background-color: var(--white);
    height: 41vh;
    border-radius: var(--borderRadius);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-5);
    padding: 10px 5px;
  }

  .led-text {
    font-size: 15px;
    letter-spacing: var(--letterSpacing);
    font-weight: 600;
    padding-top: 20px;
    /* padding-top: 20px; */
  }
`;

export default Wrapper;

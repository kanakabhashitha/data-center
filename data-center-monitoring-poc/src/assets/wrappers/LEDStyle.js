import styled from "styled-components";

const Wrapper = styled.section`
  .led-box {
    height: 30px;
    width: 25%;
    margin: 10px 0;
    float: left;
  }

  .led-green {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: #abff00;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
      #89ff00 0 2px 12px;
  }

  .led-red-blink {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: #f00;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 12px;
    -webkit-animation: blinkRed 0.5s infinite;
    -moz-animation: blinkRed 0.5s infinite;
    -ms-animation: blinkRed 0.5s infinite;
    -o-animation: blinkRed 0.5s infinite;
    animation: blinkRed 0.5s infinite;
  }

  @-webkit-keyframes blinkRed {
    from {
      background-color: #f00;
    }
    50% {
      background-color: #a00;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
        rgba(255, 0, 0, 0.5) 0 2px 0;
    }
    to {
      background-color: #f00;
    }
  }

  @-moz-keyframes blinkRed {
    from {
      background-color: #f00;
    }
    50% {
      background-color: #a00;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
        rgba(255, 0, 0, 0.5) 0 2px 0;
    }
    to {
      background-color: #f00;
    }
  }
  @-ms-keyframes blinkRed {
    from {
      background-color: #f00;
    }
    50% {
      background-color: #a00;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
        rgba(255, 0, 0, 0.5) 0 2px 0;
    }
    to {
      background-color: #f00;
    }
  }
  @-o-keyframes blinkRed {
    from {
      background-color: #f00;
    }
    50% {
      background-color: #a00;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
        rgba(255, 0, 0, 0.5) 0 2px 0;
    }
    to {
      background-color: #f00;
    }
  }
  @keyframes blinkRed {
    from {
      background-color: #f00;
    }
    50% {
      background-color: #a00;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
        rgba(255, 0, 0, 0.5) 0 2px 0;
    }
    to {
      background-color: #f00;
    }
  }

  /* green light */

  /* .led-green {
    margin: 0 auto;
    width: 24px;
    height: 24px;
    background-color: #abff00;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
      #89ff00 0 2px 12px;
  } */

  /* .led-green {
    margin: 0 auto;
    width: 70px;
    height: 70px;
    background-color: #abff00;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
      #89ff00 0 2px 12px;
    -webkit-animation: blinkGreen 0.5s infinite;
    -moz-animation: blinkGreen 0.5s infinite;
    -ms-animation: blinkGreen 0.5s infinite;
    -o-animation: blinkGreen 0.5s infinite;
    animation: blinkGreen 0.5s infinite;
  } */
`;

export default Wrapper;

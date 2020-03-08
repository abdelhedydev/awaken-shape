import styled from "styled-components";

const Wrapper = styled.div`
  .item {
    margin: 10px 0;
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .item__detail {
    max-width: 50%;
  }
  .slider__action {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    button {
      margin: 0 5px;
    }
  }
  .cards {
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
    margin: 30px 0;
  }
`;
export default Wrapper;

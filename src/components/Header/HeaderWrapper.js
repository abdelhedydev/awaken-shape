import styled from "styled-components";

const Wrapper = styled.div`
  .header__info {
    display: inline-flex;
    align-items: center;
  }
  h1 {
    font-size: 24px;
    font-family: "Proxima";
  }
  img {
    width: 60px;
    margin: 0 10px;
  }
  .header__container {
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
  }
  nav {
    a {
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;
export default Wrapper;

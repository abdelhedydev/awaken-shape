import React from "react";
import styled from "styled-components";
import Header from "../src/components/Header";
import Slider from "../src/components/Slider";
import Footer from "../src/components/Footer";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const App = () => (
  <div>
    <Header />
    <Slider />
    <Footer />
  </div>
);
export default App;

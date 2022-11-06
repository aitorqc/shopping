import styled from "styled-components";
import { Link, Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import ShopContextProvider from "./ShopContextProvider";
import Products from "./Products";
import Cart from "./Cart";

const Wrapper = styled.div`
  font-family: 'Roboto';
  margin: 40px;
  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  *{
    margin: 0;
  }
  display: grid;
  row-gap: 30px;
  p{
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  font-size: 2rem;
  width: 100%;
  justify-content: space-around;

  a{
    text-decoration: none;
    color: #bb7250;
    :hover{
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 560px){
    font-size: 1.5rem;
  }
`;

function App() {
  return (
    <ShopContextProvider>
      <Wrapper>
        <TitleWrapper>
          <h1>Tienda de Complementos</h1>
          <p>
            Selecciona lo que desees llevarte a casa
          </p>
        </TitleWrapper>
        <LinkWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </LinkWrapper>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Wrapper>
    </ShopContextProvider>
  );
}

export default App;

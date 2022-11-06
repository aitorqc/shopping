import React, { useContext } from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import { ShopContext } from './ShopContextProvider'

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  span{
    color: #379d3e;
    font-size: 1.5rem;
  }
`;
const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 30px;
  @media screen and (max-width: 860px){
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (max-width: 560px){
    grid-template-columns: repeat(1, auto);
  }
`;

export default function Cart() {
  const { products, total } = useContext(ShopContext);

  return (
    <>
      <Title>Your cart toal is <span>{total}.00$</span></Title>
      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductsWrapper>
    </>
  )
}

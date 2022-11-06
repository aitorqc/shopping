import React from 'react'
import styled from 'styled-components'

import { shopData } from './ShopData';
import ProductCard from './ProductCard';

const Title = styled.p`
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
`;
const ProductWrapper = styled.div`
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

export default function Products() {
    return (
        <>
            <Title>Welcome to DC Clothing Shop</Title>
            <ProductWrapper>
                {
                    shopData.map((data, index) =>
                        (<ProductCard key={index} {...data} />)
                    )
                }
            </ProductWrapper>
        </>
    )
}

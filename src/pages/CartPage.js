import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import Cart from "../components/CartPage/Cart";

export default function CartPage() {
    return (
        <>
            <Hero img={cartBcg} />
            <Cart />
        </>
    );
}
import Address from '@/components/modules/Cart/Addresh';
import CartProducts from '@/components/modules/Cart/CartProducts';
import Coupon from '@/components/modules/Cart/Coupon';
import PaymentDetails from '@/components/modules/Cart/PaymentDetails';
import ProductBanner from '@/components/modules/Products/Banner';
import NMContainer from '@/components/ui/core/NMContainer';
import React from 'react';

const CartPage = () => {
    return (
        <NMContainer>
            <ProductBanner title="Cart" path="Home-Cart"/>
            <div className='grid grid-cols-12 gap-8 my-5'>
                <CartProducts/>
                <Coupon/>
                <Address/>
                <PaymentDetails/>
            </div>
        </NMContainer>
    );
};

export default CartPage;
import ProductCard from '@/components/ui/core/ProductCard';
import { IProduct } from '@/Types/product';
import React from 'react';
import FilterSidebar from './FiltterSidebar';
import NMContainer from '@/components/ui/core/NMContainer';

const AllProducts = ({products}:{products:IProduct[]}) => {
    console.log(products);
    return (
       <NMContainer>
         <div className='flex gap-8 my-10'>
            <div>
                <FilterSidebar/>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                {products.map((product: IProduct, idx: number) => (
                    <ProductCard key={idx} product={product} />
                ))
                }
            </div>
        </div>
       </NMContainer>
    );
};

export default AllProducts;
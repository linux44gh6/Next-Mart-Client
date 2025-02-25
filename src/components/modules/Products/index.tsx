import ProductCard from '@/components/ui/core/ProductCard';
import { IProduct } from '@/Types/product';
import React from 'react';
import FilterSidebar from './FiltterSidebar';

const AllProducts = ({products}:{products:IProduct[]}) => {
    console.log(products);
    return (
        <div className='flex gap-10'>
            <div>
                <FilterSidebar/>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                {products.map((product: IProduct, idx: number) => (
                    <ProductCard key={idx} product={product} />
                ))
                }
            </div>
        </div>
    );
};

export default AllProducts;
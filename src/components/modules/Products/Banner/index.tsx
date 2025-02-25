import styles from './banner.module.css'
const ProductBanner = () => {
    return (
        <div className={`${styles.banner} border-2 border-white rounded-3xl mt-10 flex justify-center items-center `}>
            <div>
            <h2 className='font-bold text-2xl'>All Product</h2>
            <p>Home-Product</p>
            </div>
        </div>
    );
};

export default ProductBanner;
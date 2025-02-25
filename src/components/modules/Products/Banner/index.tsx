import styles from './banner.module.css'
const ProductBanner = ({title, path}:{title:string, path:string}) => {
    return (
        <div className={`${styles.banner} border-2 border-white rounded-3xl mt-10 flex justify-center items-center `}>
            <div>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p>{path}</p>
            </div>
        </div>
    );
};

export default ProductBanner;
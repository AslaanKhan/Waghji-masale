import React, { useState } from 'react';
import { chickenProductList } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Pagination from '../Pagination';
import { CiBoxList, CiGrid41 } from 'react-icons/ci';

const OtherPage = () => {
    const ProductList = chickenProductList;
    const [productView, setProductView] = useState('grid');

    const productsPerPage = 6;
    const totalPages = Math.ceil(ProductList.length / productsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const getCurrentProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return ProductList.slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useGSAP(() => {
        gsap.to("#products", { opacity: 1, duration: 1, delay: 0.1, ease: 'power4.inOut' })
        gsap.to("#productCard", { opacity: 1, duration: 1, stagger: 0.2, delay: 0.5, ease: 'power4.inOut' })
    }, [])

    return (
        <section id='products' className='opacity-0 nav-height bg-black relative mt-4 w-[90%] mx-auto'>
            <div className='flex justify-center items-center'>
                <h1 className="md:text-3xl text-2xl font-bold text-center text-white my-8 mr-auto">
                Explore Exotic Flavors with our Miscellaneous Spice Mixes
                </h1>
                <div className='hidden md:flex items-center ml-auto cursor-pointer' onClick={() => setProductView(productView === 'grid' ? 'list' : 'grid')}>
                    { productView === 'grid' ? <CiBoxList size={40} /> : <CiGrid41 size={40} /> }
                </div>
            </div>
            <div className={`${productView === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6' : 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6'}`}>
                {getCurrentProducts().map((product, i) => (
                    <ProductCard key={i} product={product} productView={productView} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
    );
};

const ProductCard = ({ product, productView }) => {
    const [selectedSize, setSelectedSize] = useState(product.size[0]);

    return (
        <div id='productCard' className='opacity-0 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className={`flex ${productView === 'grid' ? 'flex-col' : 'flex-row' } items-center`}>
                <div className={` mb-4 ${productView === 'grid' ? ' ' : 'w-[20%]'}`}>
                    <img src={product.productImg} className='w-[150px] h-[150px] object-cover ' alt={product.label} />
                </div>
                <div className={` ${productView === 'grid' ? 'w-full text-center' : 'w-[80%] text-left'}`}>
                    <p className='text-yellow-500 text-lg font-extrabold mb-2'>Rs. {product.price[selectedSize]}</p>
                    {product.size.map((size, index) => (
                        <span className={`${selectedSize === size ? 'text-yellow-500' : 'text-white'} cursor-pointer`} key={index} onClick={() => setSelectedSize(size)}>
                            {size} {index < product.size.length - 1 ? ' / ' : ''}
                        </span>
                    ))}
                    <h3 className='font-semibold text-white my-1'>{product.label}</h3>
                    <p className='text-white line-clamp-3 text-sm'>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default OtherPage;

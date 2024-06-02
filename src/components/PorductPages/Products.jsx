import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../../GlobalProvider/Context';
const Products = () => {
    const { products } = useContext(ProductContext)

    useGSAP(() => {
        gsap.from('#products', { opacity: 1, duration: 1, ease: 'power4.inOut' })
        gsap.to('#productCard', { opacity: 1, duration: 1,stagger: 0.1, delay: 0.1, ease: 'power4.inOut' })
    }, [])

    useEffect(() => {
        gsap.from('#products', { opacity: 1, duration: 1, ease: 'power4.inOut' })
        gsap.to('#productCard', { opacity: 1, duration: 1,stagger: 0.1, delay: 0.1, ease: 'power4.inOut' })
    }, [products])

    return (
        <section id='products' className='bg-black relative w-[90%] h-full mx-auto my-auto'>
            <h1 className="md:text-3xl text-2xl font-bold text-center text-white my-8"> Search Our Delicious Spice Mixes</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                {products.length > 0 ? products.map((product, i) => <ProductCard key={i} product={product} />) : 'No products found'}
            </div>
        </section>
    );
};

const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product.size[0]);
    const handleSizeChange = (size) => setSelectedSize(size);

    return (
        <div id='productCard' className='opacity-0 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex flex-col items-center'>
                <div className='w-[150px] h-[150px] mb-4'>
                    <img src={product.productImg} className='w-full h-full object-cover rounded-full' alt={product.label} />
                </div>
                <div className='text-center'>
                    <p className='text-yellow-500 text-lg font-extrabold mb-2'>
                        Rs. {product.price[selectedSize]}
                    </p>
                    <div className='flex flex-wrap justify-center'>
                        {product.size.map((size, index) => (
                            <span
                                key={index}
                                className={`text-white cursor-pointer ${
                                    selectedSize === size
                                        ? 'text-yellow-500'
                                        : ''
                                }`}
                                onClick={() => handleSizeChange(size)}
                            >
                                {size}
                                {index < product.size.length - 1 && ' / '}
                            </span>
                        ))}
                    </div>
                    <h3 className='font-semibold text-white my-1'>{product.label}</h3>
                    <p className='text-white line-clamp-3 text-sm'>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Products;

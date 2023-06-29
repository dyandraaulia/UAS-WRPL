import styles from './LandingPage.module.css';
import { useState, useRef } from 'react';

const categoriesData = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];
  

const productsData = [
{ id: 1, name: 'Product 1', price: 10, image: '/images/kucing-banner.png' },
{ id: 2, name: 'Product 2', price: 20, image: '/images/kucing-banner.png' },
{ id: 3, name: 'Product 3', price: 30, image: '/images/kucing-banner.png' },
{ id: 1, name: 'Product 1', price: 10, image: '/images/kucing-banner.png' },
{ id: 2, name: 'Product 2', price: 20, image: '/images/kucing-banner.png' },
{ id: 3, name: 'Product 3', price: 30, image: '/images/kucing-banner.png' },
{ id: 1, name: 'Product 1', price: 10, image: '/images/kucing-banner.png' },
{ id: 2, name: 'Product 2', price: 20, image: '/images/kucing-banner.png' },
{ id: 3, name: 'Product 3', price: 30, image: '/images/kucing-banner.png' },
{ id: 1, name: 'Product 1', price: 10, image: '/images/kucing-banner.png' },
{ id: 2, name: 'Product 2', price: 20, image: '/images/kucing-banner.png' },
{ id: 3, name: 'Product 3', price: 30, image: '/images/kucing-banner.png' },
];

const productLimit = 10;
  
export default function Home() {
    const categoriesRef = useRef(null);
    const [isOverflowed, setIsOverflowed] = useState(false);

    const handleSlideLeft = () => {
        if (categoriesRef.current) {
        categoriesRef.current.scrollBy({ left: -100, behavior: 'smooth' });
        }
    };

    const handleSlideRight = () => {
        if (categoriesRef.current) {
        categoriesRef.current.scrollBy({ left: 100, behavior: 'smooth' });
        }
    };

    const handleCategoriesOverflow = () => {
        if (categoriesRef.current) {
        setIsOverflowed(
            categoriesRef.current.scrollWidth > categoriesRef.current.clientWidth
        );
        }
    };
    const limitedProducts = productsData.slice(0, productLimit);

    return (
        <div className={styles.container}>
            <header className={styles.banner}>
                <div className={styles.boxBanner}>
                    <div className={styles.boxBannerText}>
                        <h1>Welcome to My Ecommerce Store</h1>
                        <p>Discover amazing products at great prices.</p>
                        <button>Shop Now</button>
                    </div>
                    <div className={styles.boxBannerImage}>
                        <img src="./images/kucing-banner.png" alt="Banner" />
                    </div>
                </div>
            </header>

            <main className='body'>
            <section className={styles.categories}>
                <h2>Categories</h2>
                <div className={styles.categoryContainer}>
                    {isOverflowed && (
                        <button onClick={handleSlideLeft}>&lt;</button>
                    )}
                    <div
                        className={styles.categoryWrapper}
                        ref={categoriesRef}
                        onScroll={handleCategoriesOverflow}
                    >
                    <div className={styles.categoryBoxContainer}>
                    {categoriesData.map((category) => (
                        <div key={category.id} className={styles.categoryBox}>
                        {category.name}
                        </div>
                    ))}
                    </div>
                </div>
                {isOverflowed && (
                    <button onClick={handleSlideRight}>&gt;</button>
                )}
                </div>
            </section>

                <section className={styles.products}>
                    <h2>Products</h2>
                    <div className={styles.productContainer}>
                        {limitedProducts.map((product) => (
                            <div key={product.id} className={styles.productBox}>
                                <img src={product.image} alt={product.name} className={styles.productImage} />
                                <p>{product.name}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.viewAllProducts}>
                        <button>View All Products</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

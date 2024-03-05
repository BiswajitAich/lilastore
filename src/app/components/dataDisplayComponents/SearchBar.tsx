import { Key, useRef, useState } from 'react';
import productData from '../../../../public/data/search/searchData.json'
import headerStyles from '../../styles/header.module.css'
import StopContextMenu from '../simplifiedComponents/StopContextMenu';
interface Product {
    name: string,
    link: string
}

const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);


    const handleSearch = (e: { target: { value: any } }) => {
        const inputValue = e.target.value;
        setSearchQuery(inputValue);

        const filteredResults = productData.filter((product) => {
            return product.name && product.name.toLowerCase().includes(inputValue.toLowerCase());
        });

        setFilteredProducts(filteredResults.slice(0, 5));
    }

    const handleSearchBtn = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    const handleSearchClear = () => {
        if (inputRef.current) {
            setSearchQuery("");
        }
    }

    return (
        <>
            <div className={headerStyles.headerDiv} onContextMenu={StopContextMenu}>
                <input
                    type='text'
                    placeholder='Search for products...'
                    id={headerStyles.searchInput}
                    value={searchQuery}
                    onChange={handleSearch}
                    ref={inputRef}
                />
                {searchQuery === "" ? (
                    <button className={headerStyles.search} aria-label="Search" onClick={handleSearchBtn}>
                        <div className={headerStyles.circle}></div>
                        <div className={headerStyles.handle}></div>
                    </button>
                ) : (
                    <button className={headerStyles.search} aria-label="Search" onClick={handleSearchClear}>
                        <div className={headerStyles.crossbar1} style={{ width: "25px" }}></div>
                        <div className={headerStyles.crossbar2} style={{ width: "25px" }}></div>
                    </button>
                )
                }
            </div>
            <div className={headerStyles.searchResult}>
                {searchQuery !== "" ? (
                    <div className={headerStyles.fullDiv}>
                        {searchQuery !== "" ? (

                            filteredProducts.length === 0 ? (
                                <div style={{ maxWidth: "50vw" }}>No product found!</div>
                            ) : (
                                filteredProducts.map((product: Product, id: Key | null | undefined) => (
                                    product.name && product.link &&
                                    <a href={product.link} key={id}>
                                        <div >
                                            {product.name}
                                        </div>
                                    </a>
                                ))
                            )
                        ) : null}
                    </div>
                ) : null}
            </div>
        </>
    )
}
export default SearchBar
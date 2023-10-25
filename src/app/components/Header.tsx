"use client"
import React, { useEffect, useState, useRef } from 'react'
import headerStyles from './../styles/header.module.css'
import productData from './../../../public/data/search/searchData.json'


interface Product {
  name: string,
  link: string
}


const Header = () => {
  const [logo, setLogo] = useState(false);
  // const [show, setShow] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 320) setLogo(true);
    else setLogo(false);
  }, [])

  // const handleShow = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   show ? setShow(false) : setShow(true);
  // const menuElement = document.querySelector(".menu");
  // if (!show) {
  //   setTimeout(() => {
  //     menuElement.style.display = "none";
  //   }, 300);
  // } else if (show) {
  //   menuElement.style.display = "flex";
  // }
  // }

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
    <header className={headerStyles.header}>

      {/* logo */}
      {logo ? (
        <img
          src={"/images/logos/ls-logo.webp"}
          style={{ minWidth: "50px", maxWidth: "50px", width: "50px", height: "50px", boxShadow: "8px 0px 8px #001341", backgroundColor: "#001341"}}
          alt='logo'
          placeholder='blur'
        />
      ) : (
        <img
          src={"/images/logos/lila-store-logo.webp"}
          style={{ minWidth: "150px", maxWidth: "150px", width: "150px", height: "50px", boxShadow: "8px 0px 8px #001341", backgroundColor: "#001341" }}
          alt='logo'
          placeholder='blur'
        />
      )
      }
      {/* logo */}

      {/* search */}
      <div className={headerStyles.headerDiv}>
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
      {/* search */}

      <div className={headerStyles.searchResult}>
        {searchQuery !== "" ? (
          filteredProducts.length === 0 ? (
            <div>No product found!</div>
          ) : (
            filteredProducts.map((product: Product, id) => (
              product.name && product.link &&
              <div key={id}>
                <a href={product.link}>{product.name}</a>
              </div>

            ))
          )
        ) : null}
      </div>




      {/* menu button */}
      {/* <div>
        {show ?
          (
            <button className={headerStyles.bars} aria-label="Menu" onClick={handleShow}>
              <div></div>
              <div></div>
              <div></div>
            </button>
          ) : (
            <button className={headerStyles.cross} aria-label="Menu" onClick={handleShow}>
              <div className={headerStyles.crossbar1}></div>
              <div className={headerStyles.crossbar2}></div>
            </button>
          )
        }
      </div> */}
      {/* menu button */}

      {/* menu */}
      {/* {
        !show ? (
          <div className={`${headerStyles.menuContainer} ${headerStyles.dropDown}`}>
            <div className={headerStyles.menu}>
              <p>
                efvjbhevihefihv
              </p>
              <p>
                efvjbhevihefihv
              </p>
              <p>
                efvjbhevihefihv
              </p>
              <p>
                efvjbhevihefihv
              </p>
            </div>
          </div>
        ) : null
      } */}
      {/* menu */}

    </header >
  )
}

export default Header;
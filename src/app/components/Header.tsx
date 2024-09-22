"use client"
import React, { useEffect, useState } from 'react'
import headerStyles from './../styles/header.module.css'
import SearchBar from './dataDisplayComponents/SearchBar';
import StopContextMenu from './simplifiedComponents/StopContextMenu';





const Header = () => {
  const [logo, setLogo] = useState(false);
  // const [show, setShow] = useState(true);


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




  return (
    <header className={headerStyles.header} onContextMenu={StopContextMenu}>

      {/* logo */}
      {logo ? (
        <img
          src={"./static/logos/ls-logo.webp"}
          style={{ minWidth: "50px", maxWidth: "50px", width: "50px", height: "50px", boxShadow: "8px 0px 8px #001341", backgroundColor: "#001341" }}
          alt='logo'
          placeholder='blur'
        />
      ) : (
        <img
          src={"./static/logos/lila-store-logo.webp"}
          style={{ minWidth: "150px", maxWidth: "150px", width: "150px", height: "50px", boxShadow: "8px 0px 8px #001341", backgroundColor: "#001341" }}
          alt='logo'
          placeholder='blur'
        />
      )
      }
      {/* logo */}

      {/* search */}
      <SearchBar />
      {/* search */}






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
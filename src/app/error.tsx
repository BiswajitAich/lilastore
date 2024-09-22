'use client'
import Image from "next/image";
import sad from "../../public/static/some/sad.webp"
export default function Error() {


  return (
    <div className="container">
      <div className="jewelry-box">
        <div className="cover"></div>
        <div className="inner-box">
          <h1>! Error !</h1>
          <p>Some thing went wrong Please reload the page.</p>
        </div>
        <span>
          <Image src={sad} height={200} width={200} loading="lazy" alt=""/>
        </span>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #d4af37, #f8f0e3);
          font-family: 'Helvetica Neue', sans-serif;
          perspective: 1000px;
        }

        .jewelry-box {
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          transform: rotateY(20deg) rotateX(10deg);
          transition: transform 0.5s ease-in-out;
        }

        .jewelry-box:hover {
          transform: rotateY(0deg) rotateX(0deg);
        }

        .cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #a67c00, #e6be8a);
          z-index: 1;
          clip-path: polygon(0 0, 100% 0, 100% 30%, 0 60%);
          transform: translateY(-10px);
          transition: transform 0.5s ease-in-out;
        }

        .jewelry-box:hover .cover {
          transform: translateY(0px);
        }

        .inner-box {
          position: relative;
          z-index: 2;
          padding: 20px;
          text-align: center;
          transform: translateZ(20px);
          background: white;
          border-radius: 10px;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
        }

        h1 {
          font-size: 24px;
          color: #b57c00;
        }

        p {
          color: #444;
        }

      `}</style>
    </div>
  );
}

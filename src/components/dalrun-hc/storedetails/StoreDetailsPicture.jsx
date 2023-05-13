import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalButton from "./storemodal/ModalButton";
import ModalContainer from "./storemodal/ModalContainer";

function StoreDetailsPicture() {
  let prodParams = useParams();
  console.log("StoreDetailsPicture() {: ", prodParams.productCode);
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

  const [productPictureList, setProductPictureList] = useState([]);
  const [pictureLocation, setPictureLocation] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(false);

  const productDetailsPictureList = async (productCode) => {
    const resp = await axios.post("http://localhost:3000/getProductAllPictureList", null, { params: {"productCode": productCode} });
    console.log("productDetailsPictureList: ", resp.data);
    setProductPictureList(resp.data);

    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }

  useEffect(() => {
    productDetailsPictureList(prodParams.productCode);
  }, [prodParams.productCode])

  useEffect(() => {
    console.log(pictureLocation)
  }, [pictureLocation])

  if(loading === false){
    return <div>Loading...</div>
  }

  // const showPictureModal = (e) => {
  //   const [showModal, setShowModal] = useState(false);
  //   setPictureLocation(e.target.src)
  //   const handleClick = () => {
  //     setShowModal(true);
  //   };
  //   return (
  //     <div>
  //     {showModal && <ModalContainer pictureLocation2={pictureLocation1} onClose={() => setShowModal(false)} />}
  //   </div>
  //   )
  // }

  const handleImageClick = (e) => {
    setImageSrc(e);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return checkbox_DisplayMode 
  // USER_MODE
  ? (
    <>
    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
    <div className="productPic_container">


      {productPictureList.map((pic, index) => (

        <div key={index}>
          {index == 0 ?
            <div>
              <img 
              className="detailimg"
              src={`http://localhost:3000/dalrun-hc/store/products/${prodParams.productCode}/${pic}`}
              alt={pic}
              loading="lazy"
              /> 
            </div>
            :
            <div className="columnimg" >
              <img onClick={(e) => handleImageClick(e.target.src)}
                className="detailimg zooming zoomin_pointer"
                src={`http://localhost:3000/dalrun-hc/store/products/${prodParams.productCode}/${pic}`}
                alt={pic}
                loading="lazy"
              />
            </div>
          }
        </div>
      ))}
      
      {showModal && (
        <ModalContainer pictureLocation2={imageSrc} onClose={handleCloseModal} />
      )}

    </div>
    </>
    )


    // DEVELOPER_MODE
    : (
      <>
      <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
      <div>
      <ModalButton prodParams={prodParams} productPictureList={productPictureList} pictureLocation={pictureLocation}></ModalButton>
      <div className="product_productOrigFile">
        <h1 className="product_productOrigFile">product_origfile_blob 서버: {productPictureList[0]}</h1>
      </div>

      {productPictureList.map((pic, index) => (
        <div key={index}>
          <p>{index}</p>
          <img
            src={`http://localhost:3000/dalrun-hc/store/products/${prodParams.productCode}/${pic}`}
            alt={pic}
            loading="lazy"
          />
        </div>
      ))}


    </div>
    </>
    )
}

export default StoreDetailsPicture;
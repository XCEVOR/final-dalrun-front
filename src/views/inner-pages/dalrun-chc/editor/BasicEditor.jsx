import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";

import HeaderDefault from "../../../../components/header/HeaderDefault";
import CopyRight from "../../../../components/footer/copyright/CopyRight";
import Footer from "../../../../components/footer/Footer";
import Social from "../../../../components/social/Social";
import ContactForm from "../../../../components/ContactForm";
import Address from "../../../../components/Address";

const Contact = () => {
  // const [resp, setResp] = useState();
  const [imgFile, setImgFile] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png");
  const imgRef = useRef();    // useRef.current

  function imageLoad(){
     const file = imgRef.current.files[0];
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onloadend = () => {
      setImgFile(reader.result);
     }
  }

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const numberChange = (e) => setNumber(e.target.value);
  const nameChange = (e) => setName(e.target.value);
  const addressChange = (e) => setAddress(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    // FILE + FORM FIELD
    let formData = new FormData();
    formData.append("number", number);
    formData.append("name", name);
    formData.append("address", address);

    formData.append("fileupload_RequestParam", document.frm.fileupload_RequestParam.files[0]);

    // SEND
    axios.post("http://localhost:3000/uploadMyFile", formData)
    .then(res=>{
       console.log(res.data);
      //  alert('upload 성공');
    })
    .catch(function(error){
      //  alert('file upload 실패');
    });
  }



  return (
    <div>
      <Helmet>
        <title>BASIC EDITOR</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--contact">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>

            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">
                      BASIC EDITOR
                    </h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem" }}
                    ></div>

                    <Social />
                    {/* <!--Social Icon--> */}
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* Contact top portion */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          {/* End section contact header */}




          <section>
            <div className="ptf-main">
              <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">  
                <input value={number} onChange={numberChange} placeholder='번호' /><br/>
                <input value={name} onChange={nameChange} placeholder='이름' /><br/>
                <input value={address} onChange={addressChange} placeholder='주소' /><br/><br/>  
                <input type="file" name="fileupload_RequestParam" onChange={imageLoad} ref={imgRef} /><br/><br/>
                <img style={{width:"400px", height:"400px"}} src={imgFile} alt=""/>
                <hr/>
                <input type="submit" value="file upload" />
              </form>
            </div>
          </section>




          <section>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-4">
                  <Address />
                </div>
                {/* End .col */}

                <div className="col-lg-8">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                      Tell us about your project and goals.
                    </h5>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3.125rem" }}
                    ></div>
                    <ContactForm />
                    {/* End ContactForm */}
                  </div>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

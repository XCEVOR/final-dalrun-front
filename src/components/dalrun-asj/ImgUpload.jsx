import React, { useEffect, useRef, useState } from "react";

function ImgUpload({max}) {
    const [uploadImages, setUploadImages] = useState([]);
    const dragBoxRef = useRef();
    const inputRef = useRef();

    const ImgLoader = (files) => {
        for(const file of files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target.result;
                if(result) {
                    setUploadImages(img => [...img, result].slice(0, max));
                }
            };
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        function handleDragEnter(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        function handleDragOver(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        const handleDrop = (e) => {
          e.preventDefault();
          e.stopPropagation();
      
          const files = e.dataTransfer.files;
          ImgLoader(files);
        };
        
        const dragBox = dragBoxRef.current;
        dragBox.addEventListener("dragenter", handleDragEnter);
        dragBox.addEventListener("dragover", handleDragOver);
        dragBox.addEventListener("drop", handleDrop);
      
        return () => {  // 등록한 이벤트 핸들러 제거
          dragBox.removeEventListener("dragenter", handleDragEnter);
          dragBox.removeEventListener("dragover", handleDragOver);
          dragBox.removeEventListener("drop", handleDrop);
        };
      }, [uploadImages]);

    return (
        <div>
            <label htmlFor="img">상품 이미지</label>
            <div id="productimgBox" ref={dragBoxRef}>
                <div>
                    <p>이미지를 드래그앤드롭해주세요.</p>
                    <ul className="product_img">
                    {
                        uploadImages.map((img, i) => {
                            return(
                                <li key={i}>
                                    <img src={img} />
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>   
            </div>
        </div>
    );
}

export default ImgUpload;
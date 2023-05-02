import React, { useEffect, useRef, useState } from "react";

function ImgUpload({max, setImgList}) {
    const [previewImages, setPreviewImages] = useState([]);
    const [uploadImages, setUploadImages] = useState([]);
    const dragBoxRef = useRef();
    const ImgLoader = (files) => {
        for(const file of files) {
            // 전송할 이미지
            setUploadImages(img => [...img, file].slice(0, max));

            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target.result;
                if(result) {
                    // 미리보기할 이미지 목록
                    setPreviewImages(img => [...img, result].slice(0, max));
                }
            };
            reader.readAsDataURL(file);
        }
    }

    const delImg = (e) => {
        e.preventDefault();

        const idx = e.target.value;
        
        setPreviewImages(previewImages.filter((f, index) => index !== Number(idx)));
        setUploadImages(uploadImages.filter((f, index) => index !== Number(idx)));
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
      
        setImgList(uploadImages);

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
                    <p>이미지를 드래그앤드롭해주세요. (최대 {max}개)</p>
                    <ul className="product_img">
                    {
                        previewImages.map((img, i) => {
                            return(
                                <li key={i}>
                                    <img src={img} />
                                    <button value={i} onClick={delImg}>X</button>
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
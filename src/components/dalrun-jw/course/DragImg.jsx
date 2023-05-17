import React, { useEffect, useRef, useState } from "react";

function DragImg({ max, setImgList }) {
  const [previewImages, setPreviewImages] = useState([]);
  const [uploadImages, setUploadImages] = useState([]);
  const dragBoxRef = useRef();
  const fileInputRef = useRef();

  const ImgLoader = (files) => {
    for (const file of files) {
      // 전송할 이미지
      setUploadImages((img) => {
        const newImages = [...img, file].slice(0, max);
        setImgList(newImages);
        return newImages;
      });

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target.result;
        if (result) {
          // 미리보기할 이미지 목록
          setPreviewImages((img) => [...img, result].slice(0, max));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const delImg = (index) => {
    setPreviewImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
    setUploadImages((prevImages) => {
      const newImages = prevImages.filter((_, i) => i !== index);
      setImgList(newImages);
      return newImages;
    });
  };

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

    return () => { // 등록한 이벤트 핸들러 제거
      dragBox.removeEventListener("dragenter", handleDragEnter);
      dragBox.removeEventListener("dragover", handleDragOver);
      dragBox.removeEventListener("drop", handleDrop);
    };
  }, [uploadImages]);

  const handleClick = () => { 
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    ImgLoader(e.target.files);
  };

  return (
    <div
      id="productimgBox"
      ref={dragBoxRef}
      className="image-drop-box"
      style={{ width: "965px", padding: "10px" }}
    >
      <div>
        <p>메인 이미지를 {max}개 드래그 앤 드롭해주세요.</p>
        <input 
          type='file' 
          accept='image/*' 
          multiple 
          ref={fileInputRef} 
          style={{ display:'none' }} 
          onChange={handleFileChange} 
        />
        <ul className="product_img">
          {previewImages.map((img, i) => (
            <li key={i}>
              <img
                src={img}
                alt={`Preview ${i}`}
                style={{ maxWidth: "300px", maxHeight: "300px" }}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData("text/plain", i);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  const sourceIndex = Number(e.dataTransfer.getData("text/plain"));
                  const targetIndex = i;
                  if (sourceIndex !== targetIndex) {
                    const updatedImages = [...previewImages];
                    const movedImage = updatedImages.splice(sourceIndex, 1)[0];
                    updatedImages.splice(targetIndex, 0, movedImage);
                    setPreviewImages(updatedImages);
                  }
                }}
              />
              <button value={i} onClick={() => delImg(i)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DragImg;







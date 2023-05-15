import React, { useState, useRef, useMemo } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import { nanoid } from '@reduxjs/toolkit';
import 'react-quill/dist/quill.snow.css';

const CustomEditor = ({ handleEditorChange, val }) => {
  const [value, setValue] = useState('');
  const quillRef = useRef();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const postId = nanoid();

  console.log(val);
  let memId = null;
  if (loginData) {
    memId = loginData.memId;
  }

  

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ 'header': ['1', '2', '3', '4', '5', '6', false] }],
          ['bold', 'italic', 'underline', 'strike', 'clear'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'font': [] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['link', 'image'],
        ],
        handlers: {
          image: () => {
            let fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute('accept', 'image/*');
            fileInput.click();

            fileInput.onchange = async () => {
              let file = fileInput.files[0];
              let formData = new FormData();
              formData.append('imageFile', file);
              formData.append('memId', memId);
              formData.append('postId', postId);

              try {
                const response = await axios.post('http://localhost:3000/uploadDiaryImg', formData);
                const range = quillRef.current.getEditor().getSelection();
                quillRef.current.getEditor().insertEmbed(range.index, 'image', response.data.url);
              } catch (error) {
                console.error('Error during image upload:', error);
              }
            };
          },
        },
      },
    };
  }, []);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'clear',
    'list', 'bullet', 'indent',
    'size', 'font',
    'color', 'background',
    'align',
    'link', 'image'
  ];

  const handleChange = (content) => {
    setValue(content);
    handleEditorChange({ target: { name: 'content', value: content } });
  };

  return (
    <div style={{ height: 500, width: 1000, overflow: 'auto' }}>
      <ReactQuill 
        ref={quillRef} 
        theme="snow" 
        modules={modules}
        formats={formats}
        value={val !== undefined ? val : value} 
        onChange={handleChange} 
        style={{ marginTop:'1rem', height: 430, width: 970 }}
      />
    </div>
  );
};

export default CustomEditor;

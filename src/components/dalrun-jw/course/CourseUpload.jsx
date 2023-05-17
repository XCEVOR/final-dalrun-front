import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, FormGroup } from 'react-bootstrap';
import ModalPortal from '../Portal';
import ModalFrame from '../ModalFrame';
import DragImg from './DragImg';
import CourseEditor from './CourseEditor';
import sidoList from '../course/AreaCode';
import axios from 'axios';

const CourseUpload = ({ open, close }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [imgList, setImgList] = useState([]);
  const [course, setCourse] = useState({
    areaName: '',
    courseTitle: '',
    content: '',
    file: null,
  });

  // 모달창 킬 때 초기화
  useEffect(() => {
    if (open) {
      setSelectedOption('');
      setImgList([]);
      setCourse({
        areaName: '',
        courseTitle: '',
        content: '',
        file: null,
      });
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'areaCode') {
      setCourse(prevState => ({ ...prevState, [name]: parseInt(value, 10) }));
    } else {
      setCourse(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setCourse(prevState => ({...prevState, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('areaName', course.areaName);
    formData.append('courseTitle', course.courseTitle);
    formData.append('content', course.content);
    formData.append('gpxFile', course.file);
    console.log('imgList', imgList);
    if (imgList.length>0) {
      formData.append('imgFile', imgList[0]);
    }

    axios
      .post('http://localhost:3000/adminCourseUpload', formData)
      .then((resp) => {
        console.log(resp.data);
        window.location.reload();
        alert('업로드 완료. 10포인트가 적립되었습니다.');
      })
      .catch((error) => {
        alert('업로드 실패. 예기치 못한 오류가 발생하였습니다.');
        console.error(error);
      });
    };

  return (
    <ModalPortal>
      {open && (
        <ModalFrame open={open} close={close} header="추천 코스 업로드" >
          <Form onSubmit={handleSubmit} style={{ margin: 0 }} encType="multipart/form-data">
            <FormGroup>
              <Form.Label>대표이미지</Form.Label>
              <div className="image-drop-box">
                <DragImg max="1" setImgList={setImgList} />
              </div>
            </FormGroup>
            <FormGroup>
              <Form.Label>지역 선택</Form.Label>
              <Form.Control as="select" name='areaName' value={course.areaName} onChange={handleChange}>
                <option value="">지역을 선택하세요</option>
                {sidoList.map((sido) => (
                  <option key={sido.id} value={sido.name}>
                    {sido.name}
                  </option>
                ))}
              </Form.Control>
            </FormGroup>
            <FormGroup>
              <Form.Label>gpx 파일</Form.Label>
              <input type="file" name="gpxFile" accept='.gpx' onChange={handleFileChange} />
            </FormGroup>
            <div style={{ marginBottom: '1rem' }}>
              <FormGroup>
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" name="courseTitle" value={course.courseTitle} onChange={handleChange} style={{ paddingTop: '-0.5rem' }} />
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <Form.Label>내용</Form.Label>
                <CourseEditor handleEditorChange={handleChange} />
              </FormGroup>
            </div>
            <footer>
              <Button type="submit" className="close">
                업로드
              </Button>
              <Button className="close" onClick={close}>
                Close
              </Button>
            </footer>
          </Form>
        </ModalFrame>
      )}
    </ModalPortal>
  );
};

export default CourseUpload;

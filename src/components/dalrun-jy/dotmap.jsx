import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/mjy-assets/css/earth.css";

import axios from 'axios';
import Dot from "./dot";
import ReactTooltip from "react-tooltip";

const Dotmap = () => {

  //도트맵 리스트
  const [dotList, setDotList] = useState([]);

  // 로그인 정보
  const [login,setLogin]=useState(true);


  // 나의 랭크 리스트
  const [ranMykList, setMyrankList] = useState([]);

  // 도트맵 hover 애니메이션
  const [dothover, setDothover] =  useState(0);


  // 도트맵 전체 정보 가져오기 
  function getearthPage() {
    axios.get("http://localhost:3000/earthPage")
      .then(function (resp) {
        setDotList(resp.data);

      }).catch(function (err) {
        alert(err);
      })
  };

  // 나의 랭크 정보 가져오기
  function getMyCrewRank() {
    axios.get("http://localhost:3000/getMyCrewRank", { params: { 'crewName': 'MYCREW' } })
      .then(function (resp) {
        setMyrankList(resp.data);
       
      }).catch(function (err) {
        alert(err);
      })
  }


  // 도트맵 구매 버튼을 눌렀을 때 
  //(formdata 전송 [크루이름, 위치, 가격, 이미지, 메세지])
  const onSubmit = (e) => {
    e.preventDefault();


    let formData = new FormData();
    //formData.append("Id", document.frm.crewId.value);
    formData.append("crewName", document.getElementById('mycrewname').textContent);
    // formData.append("groundColor", document.frm.dotColor.value);
    formData.append("message", document.frm.description.value);
    formData.append("price", document.frm.dotprice.value);
    formData.append("image", document.frm.uploadFile.files[0]);
    formData.append("location", document.getElementById("location").textContent);

    if (document.frm.description.value && document.frm.uploadFile.files[0]) {

      axios.post("http://localhost:3000/buydotMap", formData)
        .then(res => {
          alert('file upload에 성공했습니다');
          document.frm.reset();
          document.getElementById('ModalBuyHeader').style.display = 'none';
          document.getElementById('modalHeader').style.display = 'none';
          getearthPage();
        })
        .catch(function (error) {
          alert('file upload에 실패했습니다');
        });
    } else {
      document.getElementById('submitalert').style.display = 'block';
    }

  }

  // 도트맵 메세지를 닫았을 때
  const exixBuyHeader = (e) => {
    document.frm.reset();
    document.getElementById('modalHeader').style.display = 'none';
    document.getElementById('submitalert').style.display = 'none';
  }

  // 도트맵 메세지 변경
  const accountMessage = (e) => {

    let groundpoint=document.getElementById('price').textContent;
    let mycrewpoint= ranMykList.crewscore;
    let diff = parseInt(mycrewpoint, 10) - parseInt(groundpoint, 10);

    if (login && mycrewpoint >= groundpoint) {
      document.getElementById('buyaccept').style.display = 'block';
      document.getElementById('tokendiff').style.display = 'none';
      document.getElementById('countmytoken').textContent = diff;
    } else if (login && mycrewpoint < groundpoint) {
      document.getElementById('buyaccept').style.display = 'none';
      document.getElementById('tokendiff').style.display = 'block';

      document.getElementById('tokendiff').textContent = "💡 잔액 부족 " + Math.abs(diff) + " 원이 부족합니다..";


    }
  }





  useEffect(() => {
    getearthPage();
    getMyCrewRank();
  }, []);

  useEffect(() => {

    const login = true;
    //getearthPage();
    const rect_Collection = document.querySelectorAll('rect');
    /* 도트 */
    let j = 0;
    outerFor: for (let i = 0; i < rect_Collection.length; i++) {
      /* 아이디 부여 */
      rect_Collection[i].setAttribute('id', 'dot' + i.toString());

      /* 가격 부여 */
      if (0 <= i && i <= 215) {
        rect_Collection[i].setAttribute('price', '500');
        rect_Collection[i].setAttribute('level', '1');
      }
      else if (216 <= i && i <= 666) {
        rect_Collection[i].setAttribute('price', '1000');
        rect_Collection[i].setAttribute('level', '2');
      }
      else if (667 <= i && i <= 1660) {
        rect_Collection[i].setAttribute('price', '1500');
        rect_Collection[i].setAttribute('level', '3');
      }
      else if (1661 <= i && i <= 2370) {
        rect_Collection[i].setAttribute('price', '1000');
        rect_Collection[i].setAttribute('level', '2');
      }
      else {
        rect_Collection[i].setAttribute('price', '500');
        rect_Collection[i].setAttribute('level', '1');
      }


      if (dotList.length !== 0 && dotList.length > j + 1 && i === dotList[j].location) {

        let { location, crewName, id, regdate, message, groundcolor, dotNewFile, sale } = dotList[j];

        rect_Collection[i].style.fill = groundcolor;
        // 도트 값이 있을 때
        rect_Collection[i].addEventListener('click', () => {

          document.getElementById('modalHeader').style.display = 'none';
          document.getElementById('ModalBuyHeader').style.display = 'block';

        
 

          if (document.getElementById('ModalBuyHeader')) {

            document.getElementById('dotPicture').src = "http://localhost:3000/dalrun-jy/uploadtemp/"+dotNewFile;
            document.getElementById('myprofile').src = "assets/img/dalrun-jy/mainreview.jpg";
            document.getElementById('buyer').textContent = id;
            document.getElementById('dotDescription').textContent = message;
            document.getElementById('createDate').textContent = regdate;

          }
        });
        rect_Collection[i].addEventListener('mousehover', () => {
          

        });


        ++j;

      } else {
        /* 도트 클릭시 모달창 생성 */
        // 도트 값이 없을 때 
        rect_Collection[i].addEventListener('click', () => {


          document.getElementById('ModalBuyHeader').style.display = 'none';
          document.getElementById('modalHeader').style.display = 'block';
          if (document.getElementById('modalHeader')) {
            document.getElementById('dotId').value = rect_Collection[i].getAttribute('id');
            document.getElementById('price').textContent = rect_Collection[i].getAttribute('price');
            document.getElementById('location').textContent = i + "";

            document.getElementById('level').value = rect_Collection[i].getAttribute('level');
            document.getElementById('dotprice').value = rect_Collection[i].getAttribute('price');
            accountMessage();

          }
        });

      }
      // }

      /* 구매가능 지역 툴팁 표시 */
      // tippy("#dot"+i.toString(), {
      //     content: rect_Collection[i].getAttribute('price') + '토큰에 구매할수 있는 지역입니다.',
      //     theme: 'notPurchase',
      //     arrow: false,
      // });

    }

    if (login) {
      document.getElementById('loginform').style.display = 'block';
      document.getElementById('logoutform').style.display = 'none';

      document.getElementById('mytoken').textContent = ranMykList.crewscore;

      document.getElementById('mycrewname').textContent = ranMykList.crewname;
     
    }
  }, [dotList,ranMykList]);







  return (
    <div id="header">
      <div className="worldhero" style={{ position: 'relative' }} >
        <Dot />

        {/* 땅구매 Modal  */}
        {/* 도트맵에 값이 없을 때 */}
        {/* {showModal && (  */}
        <div id="modalHeader" className="modal-dialog modal-dialog-scrollable" style={{ position: 'absolute', zIndex: '1', backgroundColor: 'white', top: '5%', left: '25%', display: "none" }}>
          <div className="modal-content" style={{ margin: '20px' }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">도트맵에 자신의 흔적을 남겨보세요! <iconify-icon icon="emojione-v1:shooting-star" width="30" height="30"></iconify-icon></h5>
              <button type="button" className="btn-close" onClick={exixBuyHeader} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="hidden" id="level" />
              <p style={{ fontWeight: '700', fontSize: '25px' }}> 지역마다 가격이 다릅니다. </p>
              <p>💡보유하신 토큰을 확인해주세요</p>
              <div> 현재 위치는
                <p id="location" style={{ padding: '8px', display: 'inline' }}> </p>
                 입니다.
              </div>

              <div>현재 위치 가격은
                <p id="price" style={{ padding: '8px', display: 'inline' }}></p>
                입니다.
              </div>
              <div id="logoutform">
                <span ><a href="/login" style={{ textDecoration: 'underline', color: '#0d6efd', fontSize: '15px', padding: '0.5rem' }}>로그인이 필요합니다.</a></span>
              </div>
              <div id="loginform" /*style={{display:'none'}}*/>

                <div style={{marginTop:'10px'}}>
                  <h4 id="mycrewname"></h4>
                  <span >나의 크루 포인트는  
                    <p id="mytoken" style={{ display: 'inline' }}></p>입니다.
                    <p id="tokendiff" style={{ display: 'inline-block' }}></p>

                  </span>
                </div>
                <div id="buyaccept" style={{ display: 'none' }}>
                  <div>
                    구매 후 나의 크루 포인트는
                    <p  id="countmytoken" style={{ padding: '8px', display: 'inline-block' }}>
                    
                    </p>입니다.
                  </div>
                  {/* <!-- 도트 구매 정보 --> */}
                  <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
                    <input type="hidden" id="dotId" />
                    <input type="hidden" name="crewId" id="crewId" />
                    <input type="hidden" id='dotprice' name='price' />

                    <p id="submitalert" style={{ display: 'none', color: 'red' }}>
                      💡 메세지나 사진을 첨부해주세요..
                    </p>
                    <div className="mb-3">
                      <label htmlFor="description" className="col-form-label">메세지</label>
                      <input type="text" className="form-control" name="description" maxLength="150" placeholder="구매할 땅에 메시지를 적어보세요." style={{ maxWidth: '80%', height: '100px', marginLeft: '5px' }} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dot-img" className="col-form-label">사진</label>
                      <input type="file" className="form-control" name="uploadFile" accept="*" placeholder="구매할 땅에 이미지를 넣어보세요."
                        style={{ maxWidth: '50%', marginLeft: '10px' }} />
                    </div>

                    <div className="modal-footer" style={{ marginRight: '30px' }}>
                      <button id="buyLandButton" type="submit" className="btn btn-primary">구매</button>
                      <button type="button" className="btn btn-secondary" onClick={exixBuyHeader}>취소</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 도트맵에 값이 있을 때 */}
        {/* {showModalBuy && ( */}
        <div id="ModalBuyHeader" className="modal-dialog modal-center" style={{ position: 'absolute', zIndex: '1', top: '5%', left: '25%', display: "none" }}>
          <div className="modal-content">
            {/* BEGIN: card */}
            <div className="card" data-effect="zoom" onClick={(e) => { document.getElementById('ModalBuyHeader').style.display = 'none'; }}>
              <figure className="card__image">
                <img id="dotPicture" alt="Short description" />
              </figure>
              <div className="card__header" >
                <figure className="card__profile">
                  <img id="myprofile" alt="Short description" src="" />
                </figure>
              </div>
              <div id="tip"></div>
              <div className="card__body">
                <h3 className="card__name" id="buyer"></h3>
                <p className="card__job">Seize the day</p>
                <p className="card__bio" id="dotDescription"></p>
              </div>
              <div className="card__footer">
                <p className="card__date" id="createDate" />
                <a href="#" id="dotTxHash" className="card__tx">트랜잭션 정보보기</a>
              </div>
            </div>
            {/* END: card */}
          </div>
        </div>

        <div>
       
        </div>

      </div>

    </div>
  )
}



export default Dotmap;

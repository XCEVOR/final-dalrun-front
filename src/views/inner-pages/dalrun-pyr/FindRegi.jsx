import './css/FindRegi.css';

function FindRegi(){

    return(
        <body>
     <article className="hero">
    <h2>아이디·비밀번호 찾기</h2>
    <div className="login-wrap">
   <div className="login-html">
      <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">아이디 찾기</label>
      <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">비밀번호 찾기</label>
      <div className="login-form">
      
         <div className="sign-in-htm">
        <div className="group">
          <h4>이메일 주소 확인</h4>
          <h5>작성하신 이메일로 아이디를 보내드립니다.</h5>
               <input id="name" name="name" type="text" className="input" placeholder="이름"/>
            </div>
            <div className="group">
               <input id="email" type="text" name="email" className="input" data-type="text" placeholder="이메일 주소"/>
            </div>
            <div className="group">
               <button type="submit" className="pyr_button">아이디 찾기</button>
        </div>
         </div>
         
         <div className="sign-up-htm">
            <div className="group">
          <h4>아이디, 이메일 주소 확인</h4>
          <h5>작성하신 이메일로 임시 비밀번호를 보내드립니다.</h5>
               <input id="id" type="text" className="input" name="id" placeholder="아이디"/>
            </div>
        <div className="group">
               <input id="name" type="text" className="input" name="name" placeholder="이름"/>
            </div>
            <div className="group">
               <input id="phone" type="text" className="input" name="phone" placeholder="이메일 주소"/>
            </div>
            <div className="group">
               <button type="submit" className="button">비밀번호 찾기</button>
        </div>
         </div>
      </div>
   </div>
</div>
  </article>
</body>

    );
}
export default FindRegi;

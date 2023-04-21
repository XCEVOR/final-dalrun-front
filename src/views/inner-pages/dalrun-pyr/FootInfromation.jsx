import React, { useState } from 'react';

function FootSizeSelector() {
  const [footSize, setFootSize] = useState('');

  const handleFootSizeChange = (event) => {
    setFootSize(event.target.value);
  }

//   function account(){
//     axios.post("http://localhost:3000/addmember", null, { params:{'id':id, 'pwd':pwd,'email':email} })
//          .then(function(res){
//             if(res.data === "YES"){
//                 alert('정상적으로 가입되었습니다');
//                 history('/login');
//             }else{
//                 alert('회원가입에 실패했습니다. 다시 가입해주세요.');
//             }
//          })
//          .catch(function(err){
//             alert(err);
//          })
// }

  return (
    <div>
      <label htmlFor="foot-size">발볼 넓이:</label>
      <select id="foot-size" value={footSize} onChange={handleFootSizeChange}>
        <option value="">선택하세요</option>
        <option value="narrow">발볼이 좁은편</option>
        <option value="normal">보통</option>
        <option value="wide">넓은편</option>
        <option value="extra-wide">아주 넓은편</option>
      </select>
      {/* <div>
        <button onClick={}>회원가입</button>
      </div> */}
    </div>
    
  );
}

export default FootSizeSelector;
// import React, { useState } from "react";
// import axios from 'axios';

// function usernameCheck() {
//   let submit = false;
//   const username = document.querySelector(".username").value.replaceAll(" ", "");
//   if (!username) {
//     return false;
//   }

//   axios
//     .get("/overlapCheck", {
//       params: {
//         value: username,
//         valueType: "username",
//       },
//     })
//     .then((response) => {
//       if (response.data === 1) {
//         submit = true;
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       alert("에러");
//     });

//   return submit;
// }

// document.querySelector(".next_page").addEventListener("click", () => {
//   if (!usernameCheck()) {
//     swal("아이디를 정확히 입력해주세요");
//     return;
//   }

//   const data = {
//     username: document.querySelector(".username").value,
//   };

//   axios
//     .post("/find/password/auth", data)
//     .then((response) => {
//       location.href = `/find/password/auth?username=${response.data}`;
//     })
//     .catch((error) => {
//       console.error(error);
//       alert("에러");
//     });

//   return (
//     <main className="find_password_page">
//       <div className="find_info">
//         <h3>가입하신 아이디를 입력해주세요</h3>
//         <input
//           type="text"
//           name="username"
//           className="username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//         <button type="button" className="next_page" onClick={handleSubmit}>
//           다음
//         </button>
//       </div>
//     </main>
//   );
// });
// export default usernameCheck;
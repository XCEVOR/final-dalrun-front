import axios from "axios";
import { useRef, useState, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";

function MemberUpdate({data, onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();
    const [update, setUpdate] = useState("");

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");
    const [point, setPoint] = useState("");
    const [footSize, setFootSize] = useState("");
    const [grade, setGrade] = useState("");
    const [imgFile, setImgFile] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const imgRef = useRef(); // 파일 선택 창에서 선택된 파일을 가리키는 역할
      
    const setInput = (data) => {
        setId(data.memId);
        setPwd(data.password);
        setName(data.memberName);
        setEmail(data.email);
        setPhone(data.phone);
        setBirth(data.birth);
        setPoint(data.point);
        setFootSize(data.foot);
        setGrade(data.grade);
    }

    useEffect(() => {
        setInput(data);
    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("memId", id);
        formData.append("password", pwd);
        formData.append("memberName", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("birth", birth);
        formData.append("point", point);
        formData.append("grade", grade);
        formData.append("foot", footSize);

        axios.post('http://localhost:3000/admin_updatemember', formData)
            .then((resp) => {
                console.log(resp.data);
                setUpdate(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const updateAf = () => {
        if(update === "YES") {
          // alert("수정완료");
          console.log("수정완료");
          onHide();
          setSearchParam(searchParam.set('target',''));
        }
      }

    return (
        <div className="admin_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form">
                    <fieldset>
                        <div className="profile_img">                        
                        {/* <Avatar 
                            src={image} 
                            style={{margin:'20px'}} 
                            size={200} 
                            onClick={()=>{fileInput.current.click()}}/> */}
                                <label className="signup-profileImg-label" htmlFor="profileImg">프로필 이미지</label>

                                {/* // 업로드 된 이미지 미리보기 */}
                                <img
                                src={imgFile ? imgFile :`/images/icon/user.png`}
                                alt="프로필 이미지"
                                />
                        </div>
                        <div>
                            <label htmlFor="id">아이디</label>
                            <input type="text" value={id || ""} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="pwd">비밀번호</label>
                            <input type="text" value={pwd || ""} onChange={(e) => setPwd(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="name">이름</label>
                            <input type="text" value={name || ""} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">이메일</label>
                            <input type="email" value={email || ""} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="phone">연락처</label>
                            <input type="tel" value={phone || ""} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="birthdate">생년월일</label>
                            <input type="date" value={birth || ""} onChange={(e) => setBirth(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="point">포인트</label>
                            <input type="number" value={point || ""} onChange={(e) => setPoint(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="foot-size">등급:</label>
                            <select id="foot-size" value={grade || ""} onChange={(e) => setGrade(e.target.value)}>
                                <option value="">선택하세요</option>
                                <option value="걸음마">걸음마</option>
                                <option value="런니니">런니니</option>
                                <option value="러너">러너</option>
                                <option value="마라토너">마라토너</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="foot-size">발볼 넓이:</label>
                            <select id="foot-size" value={footSize} onChange={(e) => setFootSize(e.target.value)}>
                                <option value="">선택하세요</option>
                                <option value="narrow">발볼이 좁은편</option>
                                <option value="normal">보통</option>
                                <option value="wide">넓은편</option>
                                <option value="extra-wide">아주 넓은편</option>
                            </select>
                        </div>
                        <input type="submit" value="수정" onClick={updateAf} />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default MemberUpdate;
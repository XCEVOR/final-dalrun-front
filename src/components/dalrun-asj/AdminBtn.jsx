import { useState } from "react";
import { Link } from "react-router-dom";

function AdminBtn(props) {
  const [active, setActive] = useState('0');  

  const propsArray = Object.values(props);

  const clickHandle = (e) => {
    setActive(e.target.value);
  }

  const Rendering = (prop) => {
    const name = prop.name;
    const link = prop.link;
    const i = prop.i;

    return (
      <Link to={`${link}`}>
        <button 
          value={i} 
          className={i == active ? "active" : ""}
          onClick={clickHandle}
        >
          {name}
        </button>
      </Link>
    );
  }

  return (
    <div>
      {
        propsArray.map((prop, i)=>{
          if(prop.cate === "question") return <Rendering key={i} name={prop.name} link={`${prop.cate}/productinquiry`} i={i}/>
          else return <Rendering key={i} name={prop.name} link={prop.cate} i={i}/>;
        })
      }
    </div>
  );
}

export default AdminBtn;
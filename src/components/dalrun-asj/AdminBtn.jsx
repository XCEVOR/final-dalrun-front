import { useState } from "react";
import { Link } from "react-router-dom";

function AdminBtn(props) {
  const [active, setActive] = useState('0');  

  const propsArray = Object.values(props);

  const clickHandle = (e) => {
    setActive(e.target.value);
  }

  return (
    <div>
        {
          propsArray.map((prop, i)=>{
            return (
              <Link key={i} to={`${prop.cate}`}>
                <button 
                  value={i} 
                  className={i == active ? "active" : ""}
                  onClick={clickHandle}
                >
                  {prop.name}
                </button>
              </Link>
            );
          })
        }
    </div>
  );
}

export default AdminBtn;
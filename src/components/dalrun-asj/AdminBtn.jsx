import { useState } from "react";

function AdminBtn(props) {
  const [active, setActive] = useState('0');  
  const [clicked, setClicked] = useState(props[0].cate);

  const propsArray = Object.values(props);

  const clickHandle = (e) => {
    setActive(e.target.value);
    setClicked(e.target.name);
  }

  return (
    <div>
        {
          propsArray.map((prop, i)=>{
            return (
                <button 
                  key={i}
                  value={i} 
                  name={prop.cate}
                  className={i == active ? "active" : ""}
                  onClick={clickHandle}
                >
                  {prop.name}
                </button>
            );
          })
        }
        {
            propsArray.filter(prop => prop.cate === clicked ).map((p, i)=>{
                return <div key={i}>{p.selected}</div>
            })
        }
    </div>
  );
}

export default AdminBtn;
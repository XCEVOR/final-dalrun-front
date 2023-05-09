import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCubes, faCommentDots, faBell, faBan } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function TaskList() {
    const [taskData, setTaskData] = useState([]);
    const [getData, setGetData] = useState(false);
  
    const getTaskList = () => {
      axios.get('http://localhost:3000/getDashboardData')
              .then((resp) => {
                  console.log(resp.data)
                  setGetData(true);
                  setTaskData(resp.data);
              })
              .catch((err) => console.log(err));
    }

    useEffect(() => {
      getTaskList();
    }, [getData]);

    return(
        <div className="todo_container">
            <div className="todo_box">
                <div className="flex">
                    <FontAwesomeIcon className="icon i_1" icon={faBell} style={{color: "#26ae9a",}} />
                    <div>
                        <span className="todo_title">주문건수</span>
                        <span className="todo_con">
                            <Link to={"/admin/store/order?order=0&delivery=0"}>{taskData.orderCnt}건</Link>
                        </span>
                    </div>
                </div>
            </div>    
            <div className="todo_box">
                <div className="flex">
                    <FontAwesomeIcon className="icon i_2" icon={faBan} style={{color: "#2b54a3",}} />
                    <div>
                        <span className="todo_title">취소/환불/반품</span>
                        <span className="todo_con">
                            <Link to={"/admin/store/order"}>{taskData.orderSummaryCnt}건</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="todo_box">
                <div className="flex">
                    <FontAwesomeIcon className="icon i_3" icon={faCubes} style={{color: "#7d2c8b",}} />
                    <div>
                        <span className="todo_title">재고부족</span>
                        <span className="todo_con">
                            <Link to={"/admin/store/product"}>{taskData.stockoutCnt}건</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="todo_box">
                <div className="flex">
                    <FontAwesomeIcon className="icon i_4" icon={faCommentDots} style={{color: "#cb1270",}} />
                    <div>
                        <span className="todo_title">답변대기</span>
                        <span className="todo_con">
                            <Link to={"/admin/bbs/question/productinquiry"}>{taskData.inquiryWaitingCnt}건</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskList;
import AdminProductinquiry from "./admin-question/AdminProductinquiry";
import AdminQna from "./admin-question/AdminQna";
import AdminBtn from "../../../../../components/dalrun-asj/AdminBtn";

function AdminQuestion() {
    const category = [
        {cate:"productinquiry", name:"상품문의", selected:<AdminProductinquiry/>}, 
        {cate: "qna", name:"QnA", selected:<AdminQna />}, 
    ];

    return (
        <div className="bbs">
            <div className="bbs-content">
                <div className="search outline"></div>
                <AdminBtn {...category} />
            </div>
        </div>
    );
}

export default AdminQuestion;
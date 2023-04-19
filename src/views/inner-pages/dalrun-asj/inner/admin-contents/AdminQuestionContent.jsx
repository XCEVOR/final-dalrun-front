import { useParams } from "react-router-dom";

function AdminQuestionContent(props) {
    const { sub } = useParams();

    return (
        <div>
            {
                Object.values(props).filter(prop => sub === prop.cate)
                .map((p,i) => {return <div key={i}>{p.selected}</div>})
            }
        </div>
    );
}

export default AdminQuestionContent;
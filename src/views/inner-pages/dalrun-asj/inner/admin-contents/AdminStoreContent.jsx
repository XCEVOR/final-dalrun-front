import { useParams } from "react-router-dom";

function AdnimStoreContent(props) {
    const { cate } = useParams();

    return (
        <div>
            {
                Object.values(props).filter(prop => cate === prop.cate)
                .map((p,i) => {return <div key={i}>{p.selected}</div>})
            }
        </div>
    );
}

export default AdnimStoreContent;
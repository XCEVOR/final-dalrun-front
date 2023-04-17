import { useSearchParams } from "react-router-dom";

function AdminSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const choice = searchParams.get("choice");
    const search = searchParams.get("search");
    const grade = searchParams.get("grade");

    console.log(choice, search, grade);

    const getDataList = () => {}

    return (
        <div></div>
    );
}

export default AdminSearch;
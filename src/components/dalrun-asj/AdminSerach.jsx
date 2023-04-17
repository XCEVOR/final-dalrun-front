import { useSearchParams } from "react-router-dom";

function AdminSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const choice = searchParams.get("choice");
    const search = searchParams.get("search");
    const radioVal = searchParams.get("radioVal");

    console.log(choice, search, radioVal);

    return (
        <div></div>
    );
}

export default AdminSearch;
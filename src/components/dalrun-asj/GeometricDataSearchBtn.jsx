import axios from "axios";

function GeometricDataSearchBtn({setLat, setLng, location}) {
    const searchGeoData = (e, address) => {
        e.preventDefault();

        if(address !== undefined) {
            axios.get("http://localhost:3000/getGeometricData", { params: {"address":address} })
                .then((resp) => {
                    const addresses = resp.data.addresses;
                    if(addresses && addresses.length > 0) {
                        const address = addresses[0];
                        console.log(address);
                        setLat(address.y);
                        setLng(address.x);
                    } else {
                        alert("정확한 주소를 입력해주세요.");
                    }
                })
                .catch((err) => console.log(err));
        }
    }

    return(
        <>
            <button onClick={(e) => searchGeoData(e, location)} >찾기</button>
        </>
    );
}

export default GeometricDataSearchBtn;
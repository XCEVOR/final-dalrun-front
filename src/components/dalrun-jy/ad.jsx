

function Ad(props) {

     // 도트맵 메세지를 닫았을 때
 const exixBuyHeader = (e) => {
    document.getElementById('modalAd').style.display = 'none';
  }
  
    return(
        <>
        <div id='modalAd' 
        style={{height:'700px',width:'650px',backgroundSize:'cover' , backgroundColor:'white',position:'absolute', zIndex:'3' ,left:`${props.left}%`,top:`${props.top}%`,
        backgroundImage:`url(assets/img/dalrun-jy/${props.image})`}} >
            <button style={{float:"right" ,backgroundColor:`${props.color}`}} type="button" className="btn-close" onClick={exixBuyHeader} aria-label="Close"></button>
            </div>
        </>
    )
    
}

export  default  Ad;
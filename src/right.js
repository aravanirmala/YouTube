import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Video = (props) => {
    return <div className="video-container">
        <img className="thumbnail" src={props.data.snippet.thumbnails.high.url}></img>
        <h4>{props.data.snippet.title}</h4>
        <h4>{props.data.snippet.channelTitle}</h4>
    </div>
}



const RightContainer = () => {
    const [videoArray, setVideoArray] = useState([])

    async function tube() {
        const tubeApiData = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAr678L_Q1UClqzH2Q_tpTeko1SkkCgSsA')
        const data = await tubeApiData.json()
        setVideoArray(data.items)
        console.log(data.items)
    }

    useEffect(() => {
        tube()
    }, [])
    return (
        <div className="right-container">
            <div className="right-container-content">
                <div className="button-flex">

                    <button className="global-btn">News</button>
                    <button className="global-btn">Java Script</button>
                    <button className="global-btn">Sports</button>
                    <button className="global-btn">Kdrama</button>
                    <button className="global-btn">Telugu cinema</button>
                    <button className="global-btn">Telugu </button>
                </div>
                <div className="video-flex">
                    {
                        videoArray.map((x) => {
                            return < Link className="link" to={"/video/" + x.id}><Video key={x.id} data={x} /></Link>
                        })

                    }



                </div>
            </div>
        </div>
    );
};
export default RightContainer
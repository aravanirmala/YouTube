import { useParams } from "react-router";

const Vid=()=>{
    const firstUrl="https://www.youtube.com/embed/"
    const {id}=useParams()
    // const id=V-6vNxteAc0?si=uJlchVqJe5tPIClB
    return <div>
        <iframe width="100%" height="700" src={firstUrl+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
};
export default Vid
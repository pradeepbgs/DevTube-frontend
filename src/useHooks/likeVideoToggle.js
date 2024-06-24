import axios from "axios";


export const toggleLike = async (videoId) => {
    try {
        const res = await axios.post(`https://video-backend-3ot2.onrender.com/api/v1/likes/toggle/v/${videoId}`,{}, {withCredentials: true})
        return res;
    } catch (error) {
        console.log(error);
    }
}
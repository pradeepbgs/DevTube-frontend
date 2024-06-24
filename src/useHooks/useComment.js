import axios from "axios";


const useComment = async (userComment, videoId) => {
    try {
        const res = await axios
        .post(`https://video-backend-3ot2.onrender.com/api/v1/comments/${videoId}`, {content: JSON.stringify(userComment)}, {withCredentials: true})
        return res;
    } catch (error) {
        console.log(error);
    }
}

export  {useComment}
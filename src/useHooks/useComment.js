import axios from "axios";


const useComment = async (userComment, videoId) => {
    try {
        const res = await axios
        .post(`http://localhost:3000/api/v1/comments/${videoId}`, {content: JSON.stringify(userComment)}, {withCredentials: true})

    } catch (error) {
        console.log(error);
    }
}

export  {useComment}
import axios from "axios";
import {addUserPlaylist} from '../utils/userSlice'

export const usePlayLists = async (dispatch,userId) => {
    
    try {
        const res = await axios.get(`https://video-backend-3ot2.onrender.com/api/v1/playlists/user/${userId}`, {withCredentials: true})
        
        if(res){
            dispatch(addUserPlaylist(res.data.data))
            return res;
        }
        
    } catch (error) {

        console.log(error);

    }

}
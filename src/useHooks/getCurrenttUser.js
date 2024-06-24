import axios from "axios";
import { addCurrentUser } from "../utils/userSlice";

export const getCurrentUser = async (dispatch) => {
    try {
        const res = await axios.get("https://video-backend-3ot2.onrender.com/api/v1/users/current-user", {withCredentials: true});
        if (res?.data?.data) {
            dispatch(addCurrentUser(res.data.data))
            return res;
        }
    } catch (error) {
        console.log(error);
    }
}
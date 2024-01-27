import axios from "axios";
import { addCurrentUser } from "../utils/userSlice";

export const getCurrentUser = async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:3000/api/v1/users/current-user", {withCredentials: true});
        if (res?.data?.data) {
            dispatch(addCurrentUser(res.data.data))
            return res;
        }
    } catch (error) {
        console.log(error);
    }
}
import axios from 'axios';
import { COMMON_URL } from '../utility/Constant';
import { Add_new_status } from '../utility/Constantticketstatus';

export const addnewstatus = async () => {
    try {
        const response = await axios.get(`${COMMON_URL}${Add_new_status}`);
        return response.data.data;
    } catch (error) {
        alert(error.message);
    }
};
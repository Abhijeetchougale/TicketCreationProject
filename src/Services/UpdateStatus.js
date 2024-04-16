import axios from 'axios';
import { COMMON_URL } from '../utility/Constant';
import { update_status } from '../utility/Constantticketstatus';

export const updatestatus = async () => {
    try {
        const response = await axios.get(`${COMMON_URL}${update_status}`);
        return response.data.data;
    } catch (error) {
        alert(error.message);
    }
};
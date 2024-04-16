import axios from 'axios';
import { COMMON_URL } from '../utility/Constant';
import { Add_Bulk_status } from '../utility/Constantticketstatus';

export const addbulkstatus = async () => {
    try {
        const response = await axios.get(`${COMMON_URL}${Add_Bulk_status}`);
        return response.data.data;
    } catch (error) {
        alert(error.message);
    }
};
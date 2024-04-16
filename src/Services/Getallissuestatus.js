
import axios from 'axios';
import { COMMON_URL } from '../utility/Constant';
import { get_all_issue } from '../utility/Constantticketstatus';

export const getallissue = async () => {
    try {
        const response = await axios.get(`${COMMON_URL}${get_all_issue}`);
        return response.data.data;
    } catch (error) {
        alert(error.message);
    }
};
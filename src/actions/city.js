import axios from 'axios';
import qs from 'qs';

import { API_URL } from './../shared/consts';

export const GET_CITY_ACTIVITIES = "GET_CITY_ACTIVITIES";
export const GET_ACTIVITY_INFO = "GET_ACTIVITY_INFO";

export const getCityActivities = ({city, limit, offset}) => {
	
    const data = {
		"filter[location.url]": city,
		limit,
		offset
	}
    
	const stringified = qs.stringify(data);

	const config = {
		method: 'get',
		url: `${API_URL}tours?${stringified}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}

	const request = axios(config);

    return{
        type: GET_CITY_ACTIVITIES,
		payload: request
    } 
};

export const getActivityInfo = ({id}) => {
	    
	const config = {
		method: 'get',
		url: `${API_URL}tours/${id}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}

	const request = axios(config);

    return{
        type: GET_ACTIVITY_INFO,
		payload: request
    }
};

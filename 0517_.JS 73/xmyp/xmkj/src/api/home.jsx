import axios from './axios';

export function init() {
    return axios.post('./init')
};
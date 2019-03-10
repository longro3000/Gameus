import axios from 'axios';
const client_id = 'v1dtby0dm4v7pp4fi6txlt4p6ucdn3';

export default axios.create({
        baseURL: 'https://api.twitch.tv/kraken',
        headers: {
            'Client-ID': client_id
        }
});
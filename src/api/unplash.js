import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID tTapuA3As4sJADIUT7K1Mh6tTFM6cn7fIntenDNfiz0'
     }
})
import { useState, useEffect } from 'react';
import axios from 'axios';

function SetParameters() {
    const [registrants, setRegistrants] = useState(null);

    useEffect(() => {
        axios.get('https://revolutionuc-api.herokuapp.com/api/stats/registrants')
            .then(res => {
                setRegistrants(res.data.length);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return registrants
}

export default SetParameters;
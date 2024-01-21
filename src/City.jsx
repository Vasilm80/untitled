import React, {useState} from 'react';
import axios, {create} from "axios";


const API_URL = 'http://127.0.0.1:8000/api/city/'

function Sity_all(props) {
//     async function getcity() {
//         const [city, setcyti] = useState(() => [])
//         const response = await axios.get(API_URL)
//         setcyti(response.data)
// }
    return (
    <div className='sity_all'>
        {/*{city.map(city => <Sity_all city={city.name} key={city.id}/>)}*/}
        <p>{props.region}</p>
        <p>{props.name}</p>
        <button className='close' >X</button>
    </div>
    )
}

export default Sity_all
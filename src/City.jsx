import React, {useState} from 'react';
import axios, {create} from "axios";



const API_URL = 'http://127.0.0.1:8000/api/city/'

function Sity_region(props) {
    return (
        <div>
            {props.city.name}
        </div>
    )
}

function Sity_all(props) {
 const [city, setCity] = useState([])
    async function getcity() {
        const response = await axios.get(API_URL)
        setCity(response.data)
    }

    return (
    <div className='sity_all'>

        <button className='close' onClick={document.getElementById('city_region').style.hidden} >X</button>
        <div>


        <p onClick={getcity}>{props.citys.name_region}</p>
            <div>
                {city.map(city => <Sity_region city={city} key={city.id}/>) }
            </div>
        </div>
    </div>
    )
}

export default Sity_all
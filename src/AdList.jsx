import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Ad from "./Ad";

const API_URL = 'http://127.0.0.1:8000/api/car/'


export default function CarList () {
    const [cars, setCars] = useState([])




    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

return (
        <div>

            {cars.map(cars => <Ad cars={cars} key={cars.id}/>)}
        </div>
    )
}
import './App.css';

import Sity_all from "./City";
import Select from "./select";
import Mark from "./Mark";
import React, {useEffect, useState} from "react";
import axios from "axios";
import CarList from "./AdList";


const API_URL = 'http://127.0.0.1:8000/api/city/'
const API_CAR = 'http://127.0.0.1:8000/api/car/'

export default function AVContent() {
    const [citys, setCitys] = useState([])
    const [cars, setCars] = useState([])
    const [mark,setMark] = useState('Марка')
    async function getcity() {
        const response = await axios.get(API_URL)
        setCitys(response.data)
    }

    useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(API_CAR);
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    const count = cars.length

    return(
        <div className='Av-content-body'>

            <div className='Av-content-head'>
                <h1>Объявления о продаже автомобилей в Беларуси</h1>
                <p>Автобай - бесплатно продать или купить авто с пробегом</p>
            </div>
            <div className='city'>
                Легковые автомобили

                <div className='city_region' onClick={getcity}>
                    <img src="https://autobuy.by/images/product/city.svg" width="10" height="10" margin='10'/>
                        <p>Вся Беларусь</p>
                    <div>

                        {citys.map(citys => <Sity_all citys={citys} key={citys.id}/>)}
                    </div>
                </div>
            </div>
            <div className='lin'>
                <div className='row'>
                    <div className='filter'>
                        {<Select cars={cars} key = {cars.id} hiden='Марка'/>}
                        {<Select cars={cars} key = {cars.id} hiden='Модель'/>}
                        {<Select cars={cars} key = {cars.id} hiden='Поколение'/>}

                        <input type='text' placeholder='Цена от'/> <input type='text' placeholder='Цена до'/>
                        <button>USD</button>
                        <button>BYN</button>
                        {<Select cars={cars} key = {cars.id} hiden='Объем от'/>}
                            {<Select cars={cars} key = {cars.id} hiden='до'/>}
                        {<Select cars={cars} key = {cars.id} hiden='Год от'/>}
                        {<Select cars={cars} key = {cars.id} hiden='до '/>}
                        {<Select cars={cars} key = {cars.id} hiden='Кузов'/>}
                        {<Select cars={cars} key = {cars.id} hiden='Привод'/>}
                        {<Select cars={cars} key = {cars.id} hiden='Двигатель'/>}
                        {<Select cars={cars} key = {cars.id} hiden='Трансмиссия'/>}
                        <p>Найдено {count} предложений</p>
                    </div>
                    <div>
                        <CarList/>
                    </div>
                </div>
                <div className='mark_sq'>
                <div>
            {Mark('https://autobuy.by/images/mark_logo/lada.svg', 'ВАЗ (Лада)')}
                {Mark('https://autobuy.by/images/mark_logo/audi.svg', 'Audi' )}
                {Mark('https://autobuy.by/images/mark_logo/bmw.svg', 'BMW')}
                {Mark("https://autobuy.by/images/mark_logo/ford.svg", 'Ford')}
                </div>
                <div>
                {Mark("https://autobuy.by/images/mark_logo/hyundai.svg", 'Hyundai')}
                {Mark("https://autobuy.by/images/mark_logo/kia.svg", 'Kia')}
                {Mark("https://autobuy.by/images/mark_logo/mercedes-benz.svg", 'Mercedes')}
                {Mark("https://autobuy.by/images/mark_logo/mitsubishi-motors.svg", 'Mitsubishi')}
                </div>
            </div>
            </div>

        </div>
    )
}
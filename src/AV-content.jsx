import './App.css';

import Sity_all from "./City";
import Select from "./select";
import Mark from "./Mark";
import React, {useState} from "react";
import axios from "axios";


const API_URL = 'http://127.0.0.1:8000/api/region/'

export default function AVContent(props) {
    const [citys, setCitys] = useState([])
    async function getcity() {
        const response = await axios.get(API_URL)
        setCitys(response.data)
    }

    return(
        <div className='Av-content-body'>
            <div className='Av-content-head'>
                <h1>Объявления о продаже автомобилей в Беларуси</h1>
                <p>Автобай - бесплатно продать или купить авто с пробегом</p>
            </div>
            <div className='city'>
                Легковые автомобили

                <div id='city_region'>
                <button className='city_but' onClick={getcity}>Вся Беларусь</button>
                    <div>

                    {citys.map(citys => <Sity_all citys={citys} key={citys.id}/>) }
                    </div>
                </div>
            </div>
            <div className='filter'>
                {Select('Марка')} {Select('Модель')} {Select('Поколение')}

                <input type='text' value='Цена от'/> <input type='text' value='Цена до'/>
                <button>USD</button> <button>BYN</button>
                {Select('Объем от')} {Select('до')}
                {Select('Год от')} {Select('до')}
                {Select('Кузов')}
                {Select('Привод')}
                {Select('Двигатель')}
                {Select('Трансмиссия')}
                </div>
            <div>
            {Mark('https://autobuy.by/images/mark_logo/lada.svg', 'ВАЗ (Лада)')}
                {Mark('https://autobuy.by/images/mark_logo/audi.svg', 'Audi' )}
                {Mark('https://autobuy.by/images/mark_logo/bmw.svg', 'BMW')}
                {Mark("https://autobuy.by/images/mark_logo/ford.svg", 'Ford')}
                {Mark("https://autobuy.by/images/mark_logo/hyundai.svg", 'Hyundai')}
                {Mark("https://autobuy.by/images/mark_logo/kia.svg", 'Kia')}
                {Mark("https://autobuy.by/images/mark_logo/mercedes-benz.svg", 'Mercedes')}
                {Mark("https://autobuy.by/images/mark_logo/mitsubishi-motors.svg", 'Mitsubishi')}
            </div>
        </div>
    )
}
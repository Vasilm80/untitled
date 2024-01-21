import './App.css';

import Sity_all from "./City";
import Select from "./select";
import Mark from "./Mark";


export default function AVContent(props) {


    return(
        <div className='Av-content-body'>
            <div className='Av-content-head'>
                <h1>Объявления о продаже автомобилей в Беларуси</h1>
                <p>Автобай - бесплатно продать или купить авто с пробегом</p>
            </div>
            <div className='city'>
                Легковые автомобили


                <button className='city_but' onClick={Sity_all}>Вся Беларусь</button>
            </div>
            <div className='filter'>
                {Select('Марка')} {Select('Модель')} {Select('Поколение')}

                <input value='Цена от'/> <input value='Цена до'/>
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
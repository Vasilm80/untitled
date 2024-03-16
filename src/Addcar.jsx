import React, {useState} from "react";
import axios from "axios";

const API_URL ='http://127.0.0.1:8000/api/car/'

export default function Addcar() {

    return (
        <div>
            <p>
                <input placeholder='Марка'/></p>
            <p><input placeholder='Модель'/></p>
            <p><input placeholder='Поколение'/></p>
            <p><select>
                <option hidden>Привод</option>
                <option>Передний</option>
                <option>Задний</option>
                <option>Полный</option>
            </select></p>
            <p>
                <select>
                    <option hidden>Трансмиссия</option>
                    <option>Автомат</option>
                    <option>Вариатор</option>
                    <option>Механика</option>
                    <option>Робот</option>
                </select>
            </p>
            <p>
                <select>
                    <option hidden>Мотор</option>
                    <option>Бензиновый</option>
                    <option>Дизельный</option>
                    <option>Электрический</option>
                    <option>Гибрид</option>
                </select>
            </p>
            <p><input placeholder='Цена'/></p>
            <p><input placeholder='Пробег'/></p>
            <p><input placeholder='Объем двигателя'/></p>
            <p><input placeholder='Год выпуска'/></p>
            <textarea placeholder='Описание'></textarea>
            <p></p>
            <textarea placeholder='Фото'></textarea>
        </div>
    )
}

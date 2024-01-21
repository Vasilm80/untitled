import './App.css';

function Tyt() {
    return (<div>
            <header className="Av-header">
                <a href=''>
                <img className='Av-logo' src='https://autobuy.by/favicon.svg'/></a>
                <img className='Av-name' src='https://autobuy.by/autobuy_logo.svg'/>
                <img className='Av-bell' src='https://autobuy.by/images/notice/color/header_not.svg'/>
                <p>Уведомления</p>
                <div>
                    <button className='Av-but-reg'>Войти</button>
                    <button className='Av-but-buy'>Продать</button>
                </div>


            </header>
            <div>
                <hr className='line'/>
            </div>
        </div>

    );
}


export default Tyt;


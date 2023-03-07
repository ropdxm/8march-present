import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Girls = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar title="8 March is the best Mereke" />
      <section className='girls-container'>
        
      <div className='girl-card'>
      <img src={require('../media/nazmina.png')}/>
      <h1 className='name mob__name'>Nazmina</h1>
      <p className='description mob__des'>Утро ясное на дворе, великий праздник встречают боги,
Но...</p>
      <div className='btn gbtn'>
        <button className='btn-a mob__b' onClick={() => navigate('/nazmina')}>Прочитать</button>
      </div>
    </div>

    <div className='girl-card'>
      <img src={require('../media/kamilla.jpeg')}/>
      <h1 className='name'>Kamilla</h1>
      <p className='description'>Я помню чудное мгновение 
Когда мелькнул  усталый глаз...</p>
      <div className='btn gbtn'>
        <button className='btn-a' onClick={() => navigate('/kamilla')}>Прочитать</button>
      </div>
    </div>
    
    <div className='girl-card'>
      <img src={require('../media/rukiya.jpeg')}/>
      <h1 className='name'>Rukiya</h1>
      <p className='description'>Дорогая Рукия,
Сегодня, в Международный женский день...</p>
      <div className='btn gbtn'>
      <button className='btn-a' onClick={() => navigate('/rukiya')}>Прочитать</button>
      </div>
    </div>
    
    <div className='girl-card'>
      <img src={require('../media/yasmin.jpg')}/>
      <h1 className='name'>Yasmin</h1>
      <p className='description'>Ясмин, счастливого 8 Марта! Я хочу поздравить тебя с этим особенным...</p>
      <div className='btn gbtn'>
      <button className='btn-a' onClick={() => navigate('/yasmin')}>Прочитать</button>
        
      </div>
    </div>

    <div className='girl-card'>
      <img src={require('../media/aruzhan.jpeg')}/>
      <h1 className='name'>Aruzhan</h1>
      <p className='description'>Аружан, Арука или просто красотка. Я хочу поздравить тебя с...</p>
      <div className='btn gbtn'>
      <button className='btn-a' onClick={() => navigate('/aruzhan')}>Прочитать</button>
</div>
    </div>
    
    <div className='girl-card'>
      <img src={require('../media/alua.jpg')}/>
      <h1 className='name'>Alua</h1>
      <p className='description'>Дорогая Алуа! Сегодня ты – главная героиня этого дня...</p>
      <div className='btn gbtn'>
      <button className='btn-a' onClick={() => navigate('/alua')}>Прочитать</button>
      </div>
    </div>
    
    <div className='girl-card'>
      <img src={require('../media/tomiris.jpeg')}/>
      <h1 className='name'>Tomiris</h1>
      <p className='description'>Ты одна из самых талантливых и умных девушек...</p>
      <div className='btn gbtn'>
      <button className='btn-a' onClick={() => navigate('/tomiris')}>Прочитать</button>
      </div>
    </div>
    
    <div className='girl-card'>
      <img src={require('../media/asylai.jpg')}/>
      <h1 className='name'>Asylai</h1>
      <p className='description'>Пусть улыбкой озарятся Лиц прекрасные черты. Теплоты, любви...</p>
      <div className='btn gbtn'>
      <button className='btn-a' onClick={() => navigate('/asylai')}>Прочитать</button>
      </div>
    </div>
    
    </section>
      <Footer />
    </main>
  )
}

export default Girls;
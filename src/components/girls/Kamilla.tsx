import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Kamilla = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar title="8 March is the best Mereke" />
      <section className='card-f-center'>
        <div className='nazmina-card'>
          <div className='fcol'>
            <div className='frow'>
              <img src={require('../../media/kamilla.jpeg')} />
              <div className='frowtext'>
                <h1>Kamilla B.</h1>
                <p>Я помню чудное мгновение 
Когда мелькнул  усталый глаз
И сильно уж твое проявление 
Повлияло на целый класс 
Хочу поздравить саму Камиллу
С этим праздником весны
И пожелать ей не спешить в могилу 
Не успев почувствовать вкуса любви</p>
<p>PS. Великий Александр Сергеевич ... Упс, чуть имя автора не проговарил (Фотка дерзкая btw)</p>
              </div>
            </div>
            <div className='btn'>
              <button className='btn-a nazm' onClick={() => navigate('/girls')}>Назад к другим кыздарикам</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Kamilla;
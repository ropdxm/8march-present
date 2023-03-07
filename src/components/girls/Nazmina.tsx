import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Nazmina = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar title="8 March is the best Mereke" />
      <section className='card-f-center'>
        <div className='nazmina-card'>
          <div className='fcol'>
            <div className='frow'>
              <img src={require('../../media/nazmina.png')} />
              <div className='frowtext'>
                <h1>Nazmina R.</h1>
                <p>Утро ясное на дворе, великий праздник встречают боги,
Но лишь одна, что на заре, дает всем повод бить тревоги. 
Пусть в мире очень много мужчин покорных,
Но ей не сыщешь отрубей достойных,
Ведь велика краса, да не подвластна никому,
Что уж говорить о персоне... нужно дивиться самому: 
Ни описать словами, ни передать в картине, 
Лучшее на свете божество, и пишу это я - Назмине!</p>
<p>PS. Ууу Назмина, поклонники появились у тебя?</p>
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

export default Nazmina;
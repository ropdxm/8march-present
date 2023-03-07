import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Tomiris = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar title="8 March is the best Mereke" />
      <section className='card-f-center'>
        <div className='nazmina-card'>
          <div className='fcol'>
            <div className='frow'>
              <img src={require('../../media/tomiris.jpeg')} />
              <div className='frowtext'>
                <h1>Tomiris B.</h1>
                <p>Хочу поздравить тебя с Международным женским днем! Ты одна из самых талантливых и умных девушек, которых я знаю, и у меня нет сомнений в том, что ты достигнешь всего, что задумаешь. Желаю тебе оставаться такой же сильной и независимой, какой ты есть сейчас, и продолжать преодолевать любые трудности на своем пути. Пусть этот день станет началом новых достижений, радости, любви и дружбы. Счастливого 8 Марта, моя дорогая однокласница!</p>
<p>PS. Верно говорит, с праздником жанымка!!!</p>
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

export default Tomiris;
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Rukiya = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar title="8 March is the best Mereke" />
      <section className='card-f-center'>
        <div className='nazmina-card'>
          <div className='fcol'>
            <div className='frow'>
              <img src={require('../../media/rukiya.jpeg')} />
              <div className='frowtext'>
                <h1>Rukiya A.</h1>
                <p>Дорогая Рукия,
Сегодня, в Международный женский день, хотим поздравить тебя и пожелать тебе огромного счастья и успеха в жизни. Ты - настоящая принцесса, которая может преодолеть любые трудности и достигнуть любых целей.
Пусть твои мечты сбываются, а твои планы осуществляются. Пусть твои дни будут наполнены радостью, любовью и смехом, а твое сердце будет наполнено теплом и добротой.
Сегодня хотим напомнить тебе, что ты невероятно важна для мира и для тех, кто тебя окружает. Ты являешься примером для других девочек, и я уверен, что ты сможешь достичь большого успеха в жизни.
С наилучшими пожеланиями в этот особенный день!</p>
<p>PS. Звучит как Тост. Так выпьем за это!!</p>
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

export default Rukiya;
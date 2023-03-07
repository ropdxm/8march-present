import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Aruzhan = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar title="8 March is the best Mereke" />
      <section className='card-f-center'>
        <div className='nazmina-card'>
          <div className='fcol'>
            <div className='frow'>
              <img src={require('../../media/aruzhan.jpeg')} />
              <div className='frowtext'>
                <h1>Aruzhan B.</h1>
                <p>Аружан, Арука или просто красотка. Я хочу поздравить тебя с этим праздником и выразить свое восхищение твоей красотой и интеллектом. Ты одна из самых умных и талантливых женщин, которых я знаю, и твои достижения и успехи вдохновляют всех вокруг. Ты яркая и сильная личность, которая может преодолеть любые трудности и преодолеть любые препятствия. Я желаю тебе множество счастливых моментов и радостных переживаний в этот день и во все остальные дни твоей жизни. Чтобы никогда не проигрывала шахматы Санжару. С праздником, Аружан!</p>
<p>PS. Про шахматы самое важное написал. Аружан - ты пример для подражания!</p>
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

export default Aruzhan;
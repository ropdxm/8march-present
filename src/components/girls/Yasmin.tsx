import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Yasmin = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar title="8 March is the best Mereke" />
      <section className='card-f-center'>
        <div className='nazmina-card'>
          <div className='fcol'>
            <div className='frow'>
              <img src={require('../../media/yasmin.jpg')} />
              <div className='frowtext'>
                <h1>Yasmin K.</h1>
                <p>Ясмин, счастливого 8 Марта! Я хочу поздравить тебя с этим особенным днем и отметить, что ты являешься вдохновением для всех женщин своей красотой, умом и сильным характером. Ты - источник света и тепла для всех вокруг, и я желаю тебе еще больше радости и счастья в этот день и во всех днях, которые следуют за ним. С праздником, Ясмин!</p>
<p>PS. Закройте глаза и представьте самую умную, красивую, добрую и порой невообразимо прелестную даму о которой только можете представить. Даа, Санжар очень удивительный человек. Ясмин тоже прикольная </p>
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

export default Yasmin;
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Asylai = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar title="8 March is the best Mereke" />
      <section className='card-f-center'>
        <div className='nazmina-card'>
          <div className='fcol'>
            <div className='frow'>
              <img src={require('../../media/asylai.jpg')} />
              <div className='frowtext'>
                <h1>Asylai N.</h1>
                <p>Поздравляю Асылай в этот всемирный день 8 марта 
Пожелать тебе хочу 
Пусть исполнятся мечты. Пусть улыбкой озарятся Лиц прекрасные черты. Теплоты, любви, успехов, Ощущения весны,Жизни яркой, полной смеха, Ласки, счастья, доброты. Даже небольшой стишок тебе составил).
В этот праздник все мальчишки жаждут дамам угодить ведь имеются причины вас сильнее полюбить и особенно смешную жизнерадостную даму чей характер не сломить  как всегда при встрече с нею улыбается душа ведь она всегда на позитиве наша добрая и красивая Асылаюшка</p>
<p>PS. Солидное поздравление солидного мужчины</p>
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

export default Asylai;
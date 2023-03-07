import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Alua = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar title="8 March is the best Mereke" />
      <section className='card-f-center'>
        <div className='nazmina-card'>
          <div className='fcol'>
            <div className='frow'>
              <img src={require('../../media/alua.jpg')} />
              <div className='frowtext'>
                <h1>Alua S.</h1>
                <p >Дорогая Алуа! Сегодня ты – главная героиня этого дня, дня, когда весь мир отмечает великолепие женской природы. В этот день я хочу выразить свою бесконечную благодарность тебе за все твои заботы, за твою удивительную красоту и неповторимую женственность. Ты – настоящая королева, чья улыбка может растопить ледяное сердце, а твои глаза – светиться ярче, чем самое яркое солнце.
Сегодня твой день, Алуа, день, когда весь мир тебе радуется и хочет пожелать тебе счастья, здоровья и любви. Счастливого 8 Марта, моя прекрасная Алуа!</p>
<p>PS. Не деймиз енди. АУФ, так оно есть брат</p>
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

export default Alua;
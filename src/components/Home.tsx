import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import './style.css'

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className='wrapper'>
        <Navbar title="Welcome"/>
        <section className='home'>
          <div className='home__card'>
            <img src={require('../media/class.JPG')} />
            <p>В общем, мы все таки решили поздравить наших замечательных girls с этим не менее замечательным праздником! </p>
            <div className='btn'>
              <button className='btn-a' onClick={() => navigate('/girls')}>Начать веселье!</button>
            </div>
            <div className='btn btn-invariant'>
              <button className='btn-a' onClick={() => alert('Not cool, bro')}>Свалить без подарка</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default Home
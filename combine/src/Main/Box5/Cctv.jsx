import React from 'react'
import './Cctv.css'
import Cctvmap from './Cctvmap'
import {  Route, Routes, useNavigate, Link } from 'react-router-dom'
import CctvBig from './CctvBig'

const Cctv = () => {

    const navigate = useNavigate()
    const goTo = () => {
        navigate('./big')
    }
   



  return (
    <div className='Cctv-mainbox'>
      <div>
        <div className='Cctv-box1'>
          <p className='Cctv-p1'>버스전용차로</p>
          <ul className='Cctv-p1-text'>
            <p style={{ fontSize: '35px' }}>대전광역시 <strong>버스전용차로 CCTV</strong></p>
            <p style={{ fontSize: '22px' }}>대중교통수단인 버스의 원활한 통행을 위해<br></br>
              교통법규를 지키는 모범시민!
            </p>
          </ul>
         
            <table className='Cctv-box2'>
              <td className='Cctv-box2-top'>
                <li>승용차</li>
                <li>과태료 5만원</li>
                <li>벌점 10점</li>
              </td>
              <td className='Cctv-box2-bottom'>
                <li>승합차</li>
                <li>과태료 6만원</li>
                <li>벌점 10점</li>
              </td>
            </table>
          <Link to='/CctvBig'>
            <button className='Cctv-box2-button'>자세히 보기</button>
          </Link>  
        </div>
      </div>

      <div className='cctv-map-box'>
        <Link to='/CctvBig'>
          <div className='cctv-map-box-zoonin'>
            <p>지도 확대하기</p>
            <img style={{width:18}} src='/icon/enlargement-icon.png'></img>
          </div>
        </Link>
        <Cctvmap></Cctvmap>

      </div>
    </div>
  )
}

export default Cctv
import React from 'react'
import './Cctv.css'
import Cctvmap from './Cctvmap'
import {  Route, Routes, useNavigate } from 'react-router-dom'
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
             <p style={{fontSize : '30px'}}>대전광역시 <strong>버스전용차로 CCTV</strong></p>
             <p style={{fontSize : '19px'}}>대중교통수단인 버스의 원활한 통행을 위해<br></br>
                교통법규를 지키는 모범시민!
             </p>
             <div className='Cctv-box2'>
                <div className='Cctv-box3'>
                    
                        <span>승용차</span>
                        <span style={{color : '#004e8e'}}>과태료 5만원</span>
                        <span style={{color : '#d82a2a'}}>벌점10점</span>
                    
                </div>
                <div className='Cctv-box4'>
                    
                        <span>승합차</span>
                        <span style={{color : '#004e8e'}}>과태료 6만원</span>
                        <span style={{color : '#d82a2a'}}>벌점10점</span>
                                    
                </div>      
                       
             </div>
             <button style={{marginTop : '20px' , backgroundColor : '#fff' , cursor : 'pointer'}} onClick={goTo}>자세히 보기</button> 
           </div>
        </div>
        <div style={{width : '600px'}}>
           <div>
            <p style={{textAlign : 'end' , cursor : 'pointer'}} onClick={goTo}>지도 확대하기 <img style={{width : '14px'}} src="./icon/enlargement-icon.png" alt="big" /></p>
            </div>  
           <Cctvmap></Cctvmap>
          
          
          <Routes>
            <Route path='/big' element={<CctvBig></CctvBig>}></Route>
          </Routes>
           
       
           
        </div>
    </div>
  )
}

export default Cctv
import React from 'react'
import './Gesifan.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import GesifanJunche from './GesifanJunche';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Gesifan = () => {

  const navigate1 = useNavigate();
  const goGesifan = () => {
    navigate1("./goGesifanJunche");


  };
  return (
    <div style={{display : 'flex' , justifyContent : 'center' }}>
      <div className='gesifan-box1'>
        <div>
            <p style={{fontSize : '50px'}}>소통공간, <strong> 대전과 함께!</strong></p>
            <p className='gesifan-box1-subtext' style={{fontSize : '30px'}}>   시민들의 목소리를 <strong>경청하는 대전</strong>!</p>
        </div>
        <div style={{display :'flex'}}>
            <div className='notice-human'>
              <img style={{width : '200px'}} src={'/img/notice-human.png'} alt="human" />  
            </div>
            <div className='gesifan-box2'>
                 <ul className='gesifan-box2-list'>
                   <p><span>칭찬합니다</span> <span>다양한질문</span></p>
                   <p><span>문의합니다</span> <span>해주세요</span></p>
                 </ul>
                 <button onClick={goGesifan}>게시글 작성하러 가기</button>
            </div>
        </div>      
      </div> 


      <div className='gesifan-box3'>
        <div style={{display : 'flex', justifyContent:'space-between' , marginTop : '20px'}}>
            <div className='gesifan-box5'>
                <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
                    <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='./icon/moresee-arrow.png' alt="arrow" /></span>
                    <p>칭찬합니다</p>
                    <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
            </div>
            <div style={{marginLeft : '10px'}} className='gesifan-box5'>
            <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                    <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute',top : '7px',right : '10px' }} src='./icon/moresee-arrow.png' alt="arrow" /></span>
                    <p>칭찬합니다</p>
                    <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
            </div>
        </div>
        <div style={{display : 'flex', justifyContent:'space-between' , marginTop : '20px'}}>
            <div className='gesifan-box5'>
            <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                    <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='./icon/moresee-arrow.png' alt="arrow" /></span>
                    <p>칭찬합니다</p>
                    <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
            </div>
            <div style={{marginLeft : '10px'}} className='gesifan-box5'>
            <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                    <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px' ,right : '10px' }} src='./icon/moresee-arrow.png' alt="arrow" /></span>
                    <p>칭찬합니다</p>
                    <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
            </div>
        </div>
      </div>  
      <Routes>
        <Route path="/goGesifanJunche" element={<GesifanJunche></GesifanJunche>}></Route>
      </Routes>

    </div>
  )
}

export default Gesifan
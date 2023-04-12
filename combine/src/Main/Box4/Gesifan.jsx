import React from 'react'
import './Gesifan.css'
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import GesifanJunche from './GesifanJunche';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";



const Gesifan = () => {

  const navigate1 = useNavigate();
  const goGesifan = () => {
    navigate1("./goGesifanJunche");


  };
  return (
    <div style={{display : 'flex' , justifyContent : 'center' }}>
      <div className='gesifan-box1'>
        <div>
            <p style={{fontSize : '43px'}}>소통공간, <strong> 대전과 함께!</strong></p>
            <p className='gesifan-box1-subtext' style={{fontSize : '28px'}}>   시민들의 목소리를 <strong>경청하는 대전</strong>!</p>
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
                <Link to ="/GesifanJunche">
                  <button>게시글 작성하러 가기</button>
                </Link >  
            </div>
        </div>      
      </div> 


      <div className='gesifan-box3'>
        <div style={{display : 'flex', justifyContent:'space-between' , marginTop : '20px'}}>
            <div className='gesifan-box5'>
                <div style={{position : 'relative',marginLeft : '20px', marginTop : '30px'}}>
                    <p className='gesifan-category'>조회수 높은 글</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='faArrowUpRightFromSquare'/>
                    <ul className="gasifan-text">
                      <li>칭찬합니다</li>
                      <li>급행1번 버스기사님</li>
                    </ul>
                </div>
            </div>
            <div style={{marginLeft : '10px'}} className='gesifan-box5'>
            <div style={{position : 'relative',marginLeft : '20px' , marginTop : '30px'}}>
                    <p className='gesifan-category'>조회수 높은 글</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='faArrowUpRightFromSquare' />
                    <ul className="gasifan-text">
                      <li>문의합니다</li>
                      <li>트램 언제 생기나요?</li>
                    </ul>
                </div>
            </div>
        </div>
        <div style={{display : 'flex', justifyContent:'space-between' , marginTop : '20px'}}>
            <div className='gesifan-box5'>
            <div style={{position : 'relative',marginLeft : '20px' , marginTop : '30px'}}>
                    <p className='gesifan-category'>조회수 높은 글</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='faArrowUpRightFromSquare' />
                    <ul className="gasifan-text">
                      <li>제안합니다</li>
                      <li>오늘 점심은 떡볶이 어떠신가요?</li>
                    </ul>
                </div>
            </div>
            <div style={{marginLeft : '10px'}} className='gesifan-box5'>
            <div style={{position : 'relative',marginLeft : '20px' , marginTop : '30px'}}>
                    <p className='gesifan-category'>조회수 높은 글</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='faArrowUpRightFromSquare' />
                    <ul className='gasifan-text'>
                      <li>신고합니다</li>
                      <li>여상현 자꾸 담배펴요</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Gesifan
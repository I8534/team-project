import React from 'react'
import { useEffect , useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './GesifanJunche.css'
import videoTim from './당신이 마주할 대전, 당신에게 대전이란.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import GesifanSlide from './GesifanSlide';
import Mainpage from '../Mainpage';


const GesifanJunche = () => {
  // localStorage.clear()
  // -------------------------------------------
  // const [isGesifanBoxOn, setIsGesifanBoxOn] = useState(false);
  // const [isGesifangongjiOn, setIsGesifangongjiOn] = useState(false);
  // const [isGesifanpageOn, setIsGesifanpageOn] = useState(false);
  // const [isGeshfanModalOn, setIsGeshfanModalOn] = useState(false);

  // const handleButtonClick = () => {
  //   setIsGesifanBoxOn(true);
  //   setIsGesifangongjiOn(false);
  //   setIsGesifanpageOn(true);
  //   setIsGeshfanModalOn(false);
  // }
  // --------------------------------------------

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage] = useState(10); // 페이지당 보여줄 게시물 수
  const [totalPosts, setTotalPosts] = useState(100); // 총 게시물 수 (예시로 100개 설정)

  // 총 페이지 수 계산
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // --------------------------------------------
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const navigate4 = useNavigate()

  const gohome = () => {
    navigate4('/gohome')
  }

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date();

    const post = {
      title: title,
      content: content,
      date: date.toLocaleString(),
      comments: []
    };

    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      savedPosts.push(post);
      localStorage.setItem('posts', JSON.stringify(savedPosts));
      setPosts(savedPosts);
    } else {
      localStorage.setItem('posts', JSON.stringify([post]));
      setPosts([post]);
     
    }

    setTitle('');
    setContent('');
  }


 
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // 오늘 날짜
  const GesifanToday = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });



  return (
    
    <div style={{position :'absolute',top:'0', left:'0', width : '100vw' , height : '100vh' , backgroundColor : '#fff', zIndex :'100' , textAlign :'center'}}>
      <div>
        <video width="100%" height="900" controls autoPlay>
        <source src={videoTim} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div>
            <img onClick={gohome} className='GesifanJunche-logo'  src="./icon/게시판 아이콘-07.png" alt="logo" />
            <div className='GesifanJunche-text'>
              <h2>소통으로 미래를 선도하는 대전</h2>
              <h2>시민들의 자유를 존중하는 대전</h2>
              <p>사이버 문화, 열린공간</p>
            </div>
        </div>
      </div>  
      <div className='bin'></div>
      <div style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center' , alignItems : 'center'}}>
         <div>
             <h3>자유게시판</h3>
         </div>
         <p style={{textAlign :'center'}}>자유게시판은 자유롭게 의견을 게시 할 수 있는 <strong>열린공간</strong> 열린공간이며,<br></br>
            자율과 책임이 공존하는 사이버문화 정착을 위하여 <strong>실명</strong> 으로 운영되고 있습니다.<br></br>
            게시된 의견에 대하여는  <strong>원칙적으로 답변하지 않습니다.</strong>원칙적으로 답변하지 않습니다.<br></br>
            시정관련 건의사항 또는 <strong>답변을 원하시는 사항은 국민신문고 코너를 이용</strong>하시기 바랍니다</p>

           <div><button className='sinmungo-btn' >국민신문고 코너 바로가기</button></div> 
      </div>
      <div className='bin'></div>
      <div style={{display : 'flex' , justifyContent : 'center' , textAlign :'center' }}>
         <div style={{position :'relative', width:'1000px' }}>
         <h3>인기게시글</h3>
         <p>시민들이 주목한 게시글을 확인해보세요</p>
         <button style={{position : 'absolute' , top: '20px',right :'0' , height :'40px' ,color : 'gray' ,border :'2px solid #f4f4f4', backgroundColor:'#fff',cursor:'pointer' }} onClick={()=>{
            
        
             document.querySelector('.gesifan-box').classList.add('on')
             document.querySelector('.Gesifangongji').classList.remove('on')
             document.querySelector('.Gesifanpage').classList.add('on')
             document.querySelector('.Geshfan-modal').classList.remove('on')

            //  return (
            //   <div>
            //     {/* ... */}
            //     <button onClick={handleButtonClick}>Click me</button>
            //     {/* ... */}
            //     <div className={isGesifanBoxOn ? 'gesifan-box on' : 'gesifan-box'}>...</div>
            //     <div className={isGesifangongjiOn ? 'Gesifangongji' : 'Gesifangongji on'}>...</div>
            //     <div className={isGesifanpageOn ? 'Gesifanpage on' : 'Gesifanpage'}>...</div>
            //     <div className={isGeshfanModalOn ? 'Geshfan-modal' : 'Geshfan-modal on'}>...</div>
            //     {/* ... */}
            //   </div>
            // );
                 
         

         }}> 전체글 보러가기 &nbsp; &nbsp;   <FontAwesomeIcon icon={faChevronRight} /></button>
         </div>
      </div>
      <div style={{width:'700px'}}>
        <strong style={{textAlign :'left' , marginLeft:'480px'}}><span>Today</span> <span>{GesifanToday}</span></strong>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div style={{display :'flex' , justifyContent :'center'}}>
      <div className='gesifan-box11'>
        <div style={{display : 'flex' , marginTop : '20px'}}>
            <div style={{display :'flex' , alignItems :'center'}}>
              <img style={{width :'30px', cursor :'pointer'}} src="게시판 아이콘-03.png" alt="allow" />
            </div>
            <GesifanSlide></GesifanSlide>
            <div style={{display :'flex' , alignItems :'center'}}>
              <img style={{width :'30px' , cursor :'pointer'}} src="게시판 아이콘-04.png" alt="allow" />
            </div>
         
        </div>
       
      </div>  
      </div>
         
        {/*-----------------------------------------------------------------  */}
      <div className='bin'></div>
      <div style={{display : 'flex' , justifyContent : 'center' }}>
        <button className='menu-three' onClick={()=>{

          document.querySelector('.gesifan-box').classList.add('on')
          document.querySelector('.Gesifangongji').classList.add('on')
          document.querySelector('.Gesifanpage').classList.remove('on')
          document.querySelector('.Geshfan-modal').classList.remove('on')
         
        }}>공지사항</button>
        <button className='menu-three' onClick={()=>{
           document.querySelector('.gesifan-box').classList.remove('on')
           document.querySelector('.Gesifangongji').classList.remove('on')
           document.querySelector('.Gesifanpage').classList.remove('on')
           document.querySelector('.Geshfan-modal').classList.remove('on')
        }}>게시글 작성하기</button>
        <button className='menu-three' onClick={()=>{
                document.querySelector('.gesifan-box').classList.add('on')
                document.querySelector('.Gesifangongji').classList.remove('on')
                document.querySelector('.Gesifanpage').classList.add('on')
                document.querySelector('.Geshfan-modal').classList.remove('on')
        }}>전체게시글</button>
      </div>
      <div className='bin'></div> 
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <div className='gesifan-box' >
          <h3 style={{textAlign :'left' , marginLeft:'480px'}}><strong>양식에 따라 게시글을 작성해주세요!</strong></h3>
          
          <form onSubmit={handleSubmit}>
            <div style={{display : 'flex' , justifyContent : 'center'}}>
                <div style={{width : '900px',borderTop : '1px solid gray'}}>
                    <table style={{borderCollapse: 'collapse'}}>
                        <tbody>
                          <tr style={{borderBottom : '1px solid gray' , height:'50px'}}>
                              <td> <span>게시글 선택</span></td>
                              <td style={{textAlign :'left' }}>
                                <div>
                          
                                   <select id="mySelect" onChange={handleSelectChange}>
                                     <option value="칭찬합니다">칭찬합니다</option>
                                     <option value="제안합니다">제안합니다</option>
                                     <option value="알립니다">알립니다</option>
                                     <option value="신고합니다">신고합니다</option>
                                     <option value="개선해주세요">개선해주세요</option>
                                   </select>
                               </div>
                              </td>
                          </tr>
                          
                          <tr style={{borderBottom : '1px solid gray' , height:'50px'}}>
                              <td><label htmlFor="title">제목</label></td>
                              <td style={{textAlign :'left'}}>
                                <input type="text" id="title" value={title} onChange={handleTitleChange} required />
                              </td>
                          </tr>
                          <tr style={{borderBottom : '1px solid gray'}}>
                              <td> <label htmlFor="content">내용</label></td>
                              <td> <textarea id="content" value={content} onChange={handleContentChange} required style={{width :'800px' , height :'400px'}}></textarea></td>
                          </tr>
                        </tbody>
                    </table>
                
                </div>
            </div>
            <div>
              <h3 style={{textAlign :'left' , marginLeft:'480px'}}>제출 전 꼭 읽고 체크해주세요</h3>
              <div style={{display :'flex' , justifyContent : 'center'}}>
                <pre style={{textAlign : 'left' ,border : '1px solid gray', padding:'15px'}}>
                    상업성 광고 , 저속한 표현, 특정인에 대한 비방, 정치적 목적이나 성향, 동일인이라고 인정 되는 자가 동일 또는 <br></br>
                    유사 내용을 반복한 게시글 등은 관리자에 의해 통보없이 삭제될 수 있습니다.<br></br>
                    또한 , 홈페이지를 통하여 불법유해 정보를 게시하거나 배포하면 정보통신망 이용촉진 및 정보보호 등에 관한<br></br>
                    법률 제 74조 에 의거 <strong>1년이하의 징역 똑는 1천만원 이하의 벌금</strong>에 처해질수 있습니다.<br></br>
                    본문에 개인정보 &#40; 주민등록번호 , 핸드폰 등  &#41; 가 포함되진 않도록 주의바랍니다
                </pre>              
                

              </div>
            <div><input style={{marginLeft :'700px'}} type="checkBox" /><span>동의합니다</span></div>
            </div>

            <button className='cancle-btn' type="button" onClick={gohome}>취소하기</button>
            <button className='uplode-btn' type="submit">글올리기</button>
          </form>
         
          
      </div>
      {/* 여기 ------------------------------------------------------------------------------------------------------------------------------- */}
      <div className='Gesifanpage'  style={{width :'100vw', height :'700px'  ,zIndex :'500'}}>
          <ul>
                <div style={{display : 'flex' , justifyContent : 'center'}}>
                  <tr className='Gesifan-sort1'>
                    <td>번호</td>                    
                    <td>유형</td>
                    <td>제목</td>
                    {/* <td>내용</td> */}                   
                    <td>등록일</td>
                    <td>조회수</td>
                  </tr>
                </div>
            {posts.map((post, index) => (
              <li key={index}>
                
                  <div style={{display : 'flex' , justifyContent : 'center'}}>
                    
                        <tr className='Gesifan-sort2'>
                          <td>{index+1}</td>
                          <td>{selectedOption}</td>
                          <td style={{cursor:'pointer'}} onClick={()=>{
                      
                               document.querySelector('.gesifan-box').classList.add('on')
                               document.querySelector('.Gesifangongji').classList.remove('on')
                               document.querySelector('.Gesifanpage').classList.remove('on')
                               document.querySelector('.Geshfan-modal').classList.add('on')
                          }}>{post.title}</td>
                          {/* <td>{post.content}</td> */}
                          <td>{post.date}</td>
                          <td>{index+20}</td>
                        </tr>
                     
                  </div>                
            
              </li>
              
            ))}
          </ul>




                     {/* --------------- */}
                  <div>
                  <div>
     
      <div style={{display : 'flex' , justifyContent : 'center' , marginTop : '100px'}} >
        <div style={{display : 'flex'}}>
                <div>
                     <button
                        style={{border:'none' ,backgroundColor : 'none'}}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                       <FontAwesomeIcon icon={faAngleLeft} />
                     </button>
                </div>
          {/* <span>{`현재 페이지: ${currentPage} / 총 페이지: ${totalPages}`}</span> */}
        
                <div style={{display : 'flex' , width : '430px'}} >
                      {Array.from({ length: postsPerPage }).map((_, index) => (
                     <div
                       key={index}    style={{
                           flex: '0 0 40px', // 가로 크기 설정
                            // border: '1px solid #000', // 테두리 설정
                            marginRight: '3px', // 오른쪽 간격 설정
                            cursor : 'pointer'
                            }}
                       >
                              {` ${index + 1 + (currentPage - 1) * postsPerPage}`}
                      </div>
                        ))}
                </div>
        
        
        
        
                <div>
                     <button
                        style={{border:'none' ,backgroundColor : 'none'}}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                      <FontAwesomeIcon icon={faChevronRight} />
                     </button>
               </div>
        </div>
      </div>
    </div>
    </div>
                  {/* ----------------- */}





                 <div style={{display : 'flex' , justifyContent :'center'}}>
                    <div style={{width :'700px' , height :'160px' , backgroundColor : '#f7f7f7' , marginTop : '100px' ,display:'flex' , justifyContent:'center',alignItems :'center' }}>
                       <div style={{position:'relative'}}>
                         <input style={{width :'200px' , height:'30px'}} type="text" placeholder=' 제목 + 내용'  />
                         {
                          <FontAwesomeIcon style={{position :'absolute' ,top:'10px' ,left : '180px'}} icon={faMagnifyingGlass} />
                         }
                         <select style={{marginLeft : '30px' , width : '100px' , height :'35px'}} name="" id="">
                           <option value="">전체</option>
                           <option value="">내용</option>
                           <option value="">제목</option>
                         </select>
                        
                       </div>
                    </div>
                  </div>
      </div>


      {/* {여기} */}
      <div className='bin'></div>
      <div className='Gesifangongji' style={{width :'100vw', height :'700px'  ,zIndex :'500'}}>
                  <div style={{display : 'flex',flexDirection :'column' , alignItems : 'center'}}>
                    <table>
                      <tbody>
                        <tr className='Gesifan-sort1'>
                          <td>번호</td>
                          <td>제목</td>
                          <td>작성자</td>
                          <td>등록일</td>
                          <td>조회수</td>
                        </tr>
                        <tr className='Gesifan-sort2'>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* --------------- */}
                
                  {/* ----------------- */}
                        
                  <div style={{display : 'flex' , justifyContent :'center'}}>
                    <div style={{width :'700px' , height :'160px' , backgroundColor : '#f7f7f7' , marginTop : '100px' ,display:'flex' , justifyContent:'center',alignItems :'center' }}>
                       <div style={{position:'relative'}}>
                         <input style={{width :'200px' , height:'30px'}} type="text" placeholder=' 제목 + 내용'  />
                         {
                          <FontAwesomeIcon style={{position :'absolute' ,top:'10px' ,left : '180px'}} icon={faMagnifyingGlass} />
                         }
                         <select style={{marginLeft : '30px' , width : '100px' , height :'35px'}} name="" id="">
                           <option value="">전체</option>
                           <option value="">내용</option>
                           <option value="">제목</option>
                         </select>
                        
                       </div>
                    </div>
                  </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------ */}
      <div className='Geshfan-modal' style={{ width :'100vw' , height : '700px'  }}> 
          <div>
             <button style={{width : '150px',height : '40px' , marginBottom : '20px' , marginLeft :'830px' , backgroundColor :'#fff' , cursor :'pointer'}} 
                onClick={()=>{
                document.querySelector('.gesifan-box').classList.add('on')
                document.querySelector('.Gesifangongji').classList.remove('on')
                document.querySelector('.Gesifanpage').classList.add('on')
                document.querySelector('.Geshfan-modal').classList.remove('on')
               }
                }>목록으로 돌아가기</button>
          </div>
                  <div style={{display : 'flex',flexDirection :'column' , alignItems : 'center'}}>
                    <table>
                      <tbody>
                        <tr className='Gesifan-sort3'>
                          <td>번호</td>
                          <td>제목</td>
                          <td>작성자</td>
                          <td>등록일</td>
                          <td>조회수</td>
                        </tr>
                        <tr className='Gesifan-sort3'>
                          {/* <td>{posts[0].content}</td>
                          <td>{posts[1].content}</td> */}
                          {/* <td>{posts[0].content? posts[0].content : null}</td>
                          <td>{posts[1].content? posts[1].content : null}</td> */}
                      
                        </tr>
                      </tbody>
                    </table>
                  </div>              
                


                       {/* --------------- */}
                  <div>
                  <div>
     
      <div style={{display : 'flex' , justifyContent : 'center' , marginTop : '100px'}} >
        <div style={{display : 'flex'}}>
                <div>
                     <button
                        style={{border:'none' ,backgroundColor : 'none'}}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                       <FontAwesomeIcon icon={faAngleLeft} />
                     </button>
                </div>
          {/* <span>{`현재 페이지: ${currentPage} / 총 페이지: ${totalPages}`}</span> */}
        
                <div style={{display : 'flex' , width : '430px'}} >
                      {Array.from({ length: postsPerPage }).map((_, index) => (
                     <div
                       key={index}    style={{
                           flex: '0 0 40px', // 가로 크기 설정
                            // border: '1px solid #000', // 테두리 설정
                            marginRight: '3px', // 오른쪽 간격 설정
                            cursor : 'pointer'
                            }}
                       >
                              {` ${index + 1 + (currentPage - 1) * postsPerPage}`}
                      </div>
                        ))}
                </div>
        
        
        
        
                <div>
                     <button
                        style={{border:'none' ,backgroundColor : 'none'}}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                      <FontAwesomeIcon icon={faChevronRight} />
                     </button>
               </div>
        </div>
      </div>
    </div>
    </div>
                  {/* ----------------- */}



                  <div style={{display : 'flex' , justifyContent :'center'}}>
                    <div style={{width :'700px' , height :'160px' , backgroundColor : '#f7f7f7' , marginTop : '100px' ,display:'flex' , justifyContent:'center',alignItems :'center' }}>
                       <div style={{position:'relative'}}>
                         <input style={{width :'200px' , height:'30px'}} type="text" placeholder=' 제목 + 내용'  />
                         {
                          <FontAwesomeIcon style={{position :'absolute' ,top:'10px' ,left : '180px'}} icon={faMagnifyingGlass} />
                         }
                         <select style={{marginLeft : '30px' , width : '100px' , height :'35px'}} name="" id="">
                           <option value="">전체</option>
                           <option value="">내용</option>
                           <option value="">제목</option>
                         </select>
                        
                       </div>
                    </div>
                  </div>
      </div>
      {/* footer */}
      <div style={{width : '100vw' , height : '200px' ,color : 'gray'  }}>

        <ul className='GesifanJunche-footer'>
          <li>이용안내</li>
          <li>개인정보처리방침</li>
          <li>영상정보처리기기 운영 관리방침</li>
          <li>누리집 개선의견</li>
          <li>찾아오시는길</li>
        </ul>

        <p>&#40; 35242 &#41;대전광역시 서구 둔산로 100 &#40; 둔산동 &#41;</p>
        <p>&#40; c &#41;DAEJEON METROPOLITAN CITY.ALL RIGHTS RESERVED.</p>


      </div>
         <Routes>
           <Route path='/gohome' element={<Mainpage/>}></Route>
         </Routes>
    
    </div>
  );
}

export default GesifanJunche
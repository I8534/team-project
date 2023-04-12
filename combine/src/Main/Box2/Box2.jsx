import React from 'react'
import './Box2.css'


const mayorTitle = ["대전시장 이장우", "이장우의 공약사업", "소통하는 이장우"];
const titleList = mayorTitle.map((title, index) => <p key={index}>{title}</p>);



const Box2 = () => {

  return (
      <div>
          <div className='Box2-wrapper'>
              <div className='Box2-bgImg'>
                  <div className='Box2-text-wrapper'>
                      <ul className='Box2-text-list'>
                          <li>About DAEJEON</li>
                          <li><h1>일류경제도시 대전!</h1></li>
                          <li className='daejeon-target'>
                              <span>미래전략 선도</span>
                              <span>도시경제력 제고</span>
                              <span>시민우선 시정</span>
                          </li>
                          <li>
                            <button>자세히 보기</button>
                          </li>
                      </ul>
                      <ul className='Box2-text-list-2'>
                        <p>안녕하십니까?</p>
                        <p>대전시장<span>이장우</span>입니다.</p>
                      </ul>
                  </div>


                  <div className='mayor-img-box'>
                    <img style={{width:500}} src='/mayorBox/이장우2.png' alt="대전시장" />
                  </div>

                  <div className='mayotBox-bigwrapper'>
                      <div className="mayorBox-wrapper">
                          <div className='mayor-box'>
                              <div className="mayor-list">
                                  <p>{mayorTitle[0]}</p>
                                  <div className='mayor-arrow'>
                                      <img style={{ width: 40 }} src='/mayorBox/mayor-arrow.png' alt="arrow" />
                                  </div>
                                  <div className='mayor-titleimg'>
                                      <img style={{ width: 70 }} src='/mayorBox/mayor-1.png' alt="icon" />
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mayorBox-wrapper">
                          <div className='mayor-box'>
                              <div className="mayor-list">
                                  <p>{mayorTitle[1]}</p>
                                  <div className='mayor-arrow'>
                                      <img style={{ width: 40 }} src='/mayorBox/mayor-arrow.png' alt="arrow" />
                                  </div>
                                  <div className='mayor-titleimg'>
                                      <img style={{ width: 70 }} src='/mayorBox/mayor-2.png' alt="icon" />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mayorBox-wrapper">
                          <div className='mayor-box'>
                              <div className="mayor-list">
                                  <p>{mayorTitle[2]}</p>
                                  <div className='mayor-arrow'>
                                      <img style={{ width: 40 }} src='/mayorBox/mayor-arrow.png' alt="arrow" />
                                  </div>
                                  <div className='mayor-titleimg'>
                                      <img style={{ width: 70 }} src='/mayorBox/mayor-3.png' alt="icon" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                   
                  

              </div>
          </div>
      </div>
  )
}

export default Box2



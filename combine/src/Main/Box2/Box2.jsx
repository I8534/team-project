import React from 'react'
import './Box2.css'
import mayorArrow from '../Box2/mayorBox/mayor-arrow.png'
import mayor1 from '../Box2/mayorBox/mayor-1.png'
import mayor2 from '../Box2/mayorBox/mayor-2.png'
import mayor3 from '../Box2/mayorBox/mayor-3.png'


const mayorTitle = ["대전시장 이장우", "이장우의 공약사업", "소통하는 이장우"];
const mayorNext = [mayorArrow, mayorArrow, mayorArrow];
const mayorIcon = [mayor1, mayor2, mayor3];

const titleList = mayorTitle.map((title, index) => <p key={index}>{title}</p>);
const nextList = mayorNext.map((btn, b) => <div key={b}><img src={btn} alt="arrow" /></div>);
const IconList = mayorIcon.map((icon, i) => <div key={i}><img src={icon} alt="icon" /></div>);


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
                    <img style={{width:500}} src="/img/이장우2.png" alt="대전시장" />
                  </div>

                  <div className='mayotBox-bigwrapper'>
                      <div className="mayorBox-wrapper">
                          <div className='mayor-box'>
                              <div className="mayor-list">
                                  <p>{mayorTitle[0]}</p>
                                  <div className='mayor-arrow'>
                                      <img style={{ width: 35 }} src={mayorNext[0]} alt="arrow" />
                                  </div>
                                  <div className='mayor-titleimg'>
                                      <img style={{ width: 50 }} src={mayorIcon[0]} alt="icon" />
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mayorBox-wrapper">
                          <div className='mayor-box'>
                              <div className="mayor-list">
                                  <p>{mayorTitle[1]}</p>
                                  <div className='mayor-arrow'>
                                      <img style={{ width: 35 }} src={mayorNext[1]} alt="arrow" />
                                  </div>
                                  <div className='mayor-titleimg'>
                                      <img style={{ width: 50 }} src={mayorIcon[1]} alt="icon" />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mayorBox-wrapper">
                          <div className='mayor-box'>
                              <div className="mayor-list">
                                  <p>{mayorTitle[2]}</p>
                                  <div className='mayor-arrow'>
                                      <img style={{ width: 35 }} src={mayorNext[2]} alt="arrow" />
                                  </div>
                                  <div className='mayor-titleimg'>
                                      <img style={{ width: 50 }} src={mayorIcon[2]} alt="icon" />
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



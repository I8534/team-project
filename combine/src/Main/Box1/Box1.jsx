import React from 'react'
import Corona from './Corona.jsx'
import './Corona.css'
import './Box1.css'
import 페이스북 from '../Box1/facebook.png'
import 인스타그램 from '../Box1/instagram.png'
import 트위터 from '../Box1/twitter.png'
import 유튜브 from '../Box1/youtube.png'
import 콜센터 from '../Box1/call.png'

const Box1 = () => {

    return (
        <div>
            <div className="box1-wrapper">
                <Corona></Corona>
                
                <div className='sidevar'>
                {/* <div className='daejeonSns'><span>대전광역시 <br></br> SNS</span></div> */}
                    <ul className='sidevar-list'>
                        <li className='facebook-img'><a href="https://www.facebook.com/daejeonstory/?locale=ko_KR"><img style={{ width: 40 }} src={페이스북} alt="facebook" /></a></li>
                        <li className='Box1-text facebook-go'>페이스북 바로가기</li>
                        <li className='instargram-img'><a href="https://www.instagram.com/daejeon_official/"><img style={{ width: 40 }} src={인스타그램} alt="instagram" /></a></li>
                        <li className='Box1-text instargram-go'>인스타그램 바로가기</li>
                        <li className='twitter-img'><a href="https://twitter.com/DreamDaejeon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img style={{ width: 40 }} src={트위터} alt="twitter" /></a></li>
                        <li className='Box1-text twitter-go'>트위터 바로가기</li>
                        <li className='youtube-img'><a href="https://www.youtube.com/channel/UCzIgmDjE0lFDu2IhEF_ewOA"><img style={{ width: 40 }} src={유튜브} alt="youtube" /></a></li>
                        <li className='Box1-text youtube-go'>유튜브 바로가기</li>
                        <li className='call-img'><a href="tel:042-120"><img style={{ width: 40 }} src={콜센터} alt="call" /></a></li>
                        <li className='Box1-text call-go'>콜센터 전화걸기</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Box1

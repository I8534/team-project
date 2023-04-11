import React from 'react'
import Corona from './Corona.jsx'
import './Corona.css'
import './Box1.css'

const Box1 = () => {

    return (
        <div>
            <div className="box1-wrapper">
                <Corona></Corona>
                
                <div className='sidevar'>
                {/* <div className='daejeonSns'><span>대전광역시 <br></br> SNS</span></div> */}
                    <ul className='sidevar-list'>
                        <li className='facebook-img'><a href="https://www.facebook.com/daejeonstory/?locale=ko_KR"><img style={{ width: 40 }} src="/img/facebook.png" alt="facebook" /></a></li>
                        <li className='Box1-text facebook-go'>페이스북 바로가기</li>
                        <li className='instargram-img'><a href="https://www.instagram.com/daejeon_official/"><img style={{ width: 40 }} src="/img/instagram.png" alt="instagram" /></a></li>
                        <li className='Box1-text instargram-go'>인스타그램 바로가기</li>
                        <li className='twitter-img'><a href="https://twitter.com/DreamDaejeon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img style={{ width: 40 }} src="/img/twitter.png" alt="twitter" /></a></li>
                        <li className='Box1-text twitter-go'>트위터 바로가기</li>
                        <li className='youtube-img'><a href="https://www.youtube.com/channel/UCzIgmDjE0lFDu2IhEF_ewOA"><img style={{ width: 40 }} src="/img/youtube.png" alt="youtube" /></a></li>
                        <li className='Box1-text youtube-go'>유튜브 바로가기</li>
                        <li className='call-img'><a href="tel:042-120"><img style={{ width: 40 }} src="/img/call.png" alt="call" /></a></li>
                        <li className='Box1-text call-go'>콜센터 전화걸기</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Box1

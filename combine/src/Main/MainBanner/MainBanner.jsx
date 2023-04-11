import React from 'react'
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring'
import $ from 'jquery';
import './MainBanner.css'



const MainBanner = () => {

  const props = useSpring({ from: { number: 0 }, to: { number: 1446072 }, config: { tension: 100 }, });

  // 미세먼지 10 정하는 스테이트
  const [airQuality, setAirQuality] = useState(null);
  // 미세먼지 25 정하는 스테이트
  const [airQuality2, setAirQuality2] = useState(null);
  // 날씨상태 알려주는 스테이트
  const [weather, setWeather] = useState(null);
  // 온도 정하는 스테이트
  const [temper, setTemper] = useState(null);

  useEffect(() => {
    const fetchAirQuality = async () => {
      const response = await fetch("https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=69MDcrrkbf0Z3ZW4LFyqSZ%2BLToQPK3vjVrDrzz3qtpGyGG2JezYDMin%2FLsyv3NWBK%2BejgMVU4p879wUSlznU1Q%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EB%8C%80%EC%A0%84&ver=1.0");
      const data = await response.json();
      setAirQuality(data.response.body.items[11].pm10Value);
      setAirQuality2(data.response.body.items[11].pm25Value);
    };


    const fetchWeather = async () => {
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=36.3617&lon=127.3868&appid=f97e7ef1034e0c950eb56df741876340&units=metric");
      const data = await response.json();
      setWeather(data.weather[0].main);
      setTemper(data.main.temp);
    };

    fetchAirQuality();
    fetchWeather();

    const interval = setInterval(() => {
      fetchAirQuality();
      fetchWeather();
    }, 600000); // 10분마다 API 호출
    return () => clearInterval(interval);
  }, []);

  if (!airQuality || !weather) {
    return <div>Loading...</div>;
  }

  const pm10 = airQuality;
  const pm25 = airQuality2;
  const temp = temper;
  const weath = weather;


  let image_dust;
  let txt_dust;
  if (pm10 > 150) {
    image_dust = "/weather/finedust-red.png";
    txt_dust = "매우 나쁨"
  } else if (pm10 > 80) {
    image_dust = "/weather/finedust-orange.png";
    txt_dust = "나쁨"
  } else if (pm10 > 30) {
    image_dust = "/weather/finedust-green.png";
    txt_dust = "보통"
  } else {
    image_dust = "/weather/finedust-blue.png";
    txt_dust = "좋음"
  }

  let image_dust2;
  let txt_dust2;
  if (pm25 > 75) {
    image_dust2 = "/weather/finedust-red.png";
    txt_dust2 = "매우 나쁨"
  } else if (pm25 > 35) {
    image_dust2 = "/weather/finedust-orange.png";
    txt_dust2 = "나쁨"
  } else if (pm25 > 15) {
    image_dust2 = "/weather/finedust-green.png";
    txt_dust2 = "보통"
  } else {
    image_dust2 = "/weather/finedust-blue.png";
    txt_dust2 = "좋음"
  }


  let image_weath;
  if (weath == 'Clear') {
    image_weath = "/weather/날씨 아이콘-맑음.png";
  } else if (weath == 'Clouds') {
    image_weath = "/weather/날씨 아이콘-구름.png";
  } else if (weath == 'Snow') {
    image_weath = "/weather/날씨 아이콘-눈.png";
  } else if (weath == 'Rain') {
    image_weath = "/weather/날씨 아이콘-비.png";
  } else if (weath == 'Thunderstorm') {
    image_weath = "/weather/날씨 아이콘-번개.png";
  } else if (weath == 'Drizzle') {
    image_weath = "/weather/날씨 아이콘-이슬비.png";
  } else {
    image_weath = "/weather/날씨 아이콘-맑음.png";
  }

  let weath_condition;
  if (weath == 'Clear') {
    weath_condition = "맑음";
  } else if (weath == 'Clouds') {
    weath_condition = "구름";
  } else if (weath == 'Snow') {
    weath_condition = "눈";
  } else if (weath == 'Rain') {
    weath_condition = "비";
  } else if (weath == 'Thunderstorm') {
    weath_condition = "번개";
  } else if (weath == 'Drizzle') {
    weath_condition = "이슬비";
  } else {
    weath_condition = "맑음";
  }


  const mainItems = document.querySelectorAll('.gnb-main-item');

  mainItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
      $(item).find('.sub').stop().slideDown(500);
      $(item).children('a').addClass('active');
    });

    item.addEventListener('mouseout', () => {
      $(item).find('.sub').stop().slideUp(500);
      $(item).children('a').removeClass('active');
    });
  });


  return (
    <div>
      <header className='global-header'>
        <div className='gnb'>

          <div className='logo'>
            <a href="/">
              <img style={{ width: 70 }} className='logoImg' src="/assets/logo.png" alt="대전로고" />
            </a>
          </div>

          <nav>
            <ul className="gnb-main-list">
              <li className="gnb-main-item">
                <a href="">정보공개</a>
                <ul className="sub">
                  <li><a href="">정보공개 및 제도안내</a></li>
                  <li><a href="">사전정보공표</a></li>
                  <li><a href="">공공데이터개발 이용안내</a></li>
                  <li><a href="">원문정보 정보목록공개</a></li>
                  <li><a href="">위원회 운영정보</a></li>
                  <li><a href="">제정정보공개</a></li>
                  <li><a href="">계약정보공개</a></li>
                  <li><a href="">대전시 조직정보 공개</a></li>
                  <li><a href="">정책설명계</a></li>
                  <li><a href="">감사결과안내</a></li>
                </ul>
              </li>

              <li className="gnb-main-item">
                <a href="">참여마당</a>
                <ul className="sub">
                  <li><a href="">시정참여</a></li>
                  <li><a href="">일반참여/자유게시판</a></li>
                  <li><a href="">시민단체</a></li>
                  <li><a href="">기부문화</a></li>
                  <li><a href="">문자안내</a></li>
                </ul>
              </li>

              <li className="gnb-main-item">
                <a href="">전자민원</a>
                <ul className="sub">
                  <li><a href="">대전시에 바란다</a></li>
                  <li><a href="">나의 민원</a></li>
                  <li><a href="">버스전용차로 민원</a></li>
                  <li><a href="">여권안내/교부/보관/반납</a></li>
                  <li><a href="">원스톱 민원 안내</a></li>
                  <li><a href="">민원신고센터</a></li>
                  <li><a href="">환경신문고</a></li>
                  <li><a href="">안전신문고</a></li>
                  <li><a href="">비리 신고</a></li>
                  <li><a href="">부패공익신고</a></li>
                  <li><a href="">적극행정/알림소식</a></li>
                </ul>
              </li>

              <li className="gnb-main-item">
                <a href="">행정정보</a>
                <ul className="sub">
                  <li><a href="">Story 대전</a></li>
                  <li><a href="">시정뉴스/자료실</a></li>
                  <li><a href="">법무행정정보</a></li>
                  <li><a href="">예산/재정</a></li>
                  <li><a href="">도시주택정보</a></li>
                  <li><a href="">자치경찰위원회</a></li>
                </ul>
              </li>

              <li className="gnb-main-item">
                <a href="">열린경제</a>
                <ul className="sub">
                  <li><a href="">과학산업/대덕연구</a></li>
                  <li><a href="">기업지원</a></li>
                  <li><a href="">지역인재 의무채용</a></li>
                  <li><a href="">공개채용정보</a></li>
                  <li><a href="">대전일자리지원센터</a></li>
                  <li><a href="">청년정책</a></li>
                  <li><a href="">관련기관안내</a></li>
                  <li><a href="">부동산정보</a></li>
                  <li><a href="">소비자정보</a></li>
                  <li><a href="">물가정보</a></li>
                  <li><a href="">경제지표</a></li>
                  <li><a href="">협동조합이란?</a></li>
                </ul>
              </li>

              <li className="gnb-main-item">
                <a href="">생활정보</a>
                <ul className="sub">
                  <li><a href="">복지</a></li>
                  <li><a href="">교육상담</a></li>
                  <li><a href="">성인지정책</a></li>
                  <li><a href="">건강과 의료</a></li>
                  <li><a href="">3대 하천 정보</a></li>
                  <li><a href="">환경정보</a></li>
                  <li><a href="">재난/안전</a></li>
                  <li><a href="">대전시설이용/반려견</a></li>
                  <li><a href="">바로가기</a></li>
                </ul>
              </li>

              <li className="gnb-main-item">
                <a href="">대전소개</a>
                <ul className="sub">
                  <li><a href="">대전의 상징들</a></li>
                  <li><a href="">대전의 현황</a></li>
                  <li><a href="">대전의 통계</a></li>
                  <li><a href="">시청안내</a></li>
                  <li><a href="">사이버 역사관</a></li>
                  <li><a href="">국제협력</a></li>
                  <li><a href="">원도심 이야기</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          <ul className="btn-box">
            <li className='login' type='button'>로그인</li>
            <li className='join' type='button'>회원가입</li>
          </ul>
        </div>

        <div className="frontBox">
          <div className="frontText">
            <h1 className='koreaCenter'>대한민국의 중심축!</h1>
            <h1 className='deajeon'>대전광역시
              <span className='count__number'>
                {console.log(props.number)}
                <animated.span>
                  {props.number.interpolate(number => number.toFixed())}
                </animated.span>
              </span>명!</h1>
          </div>


          <div className='searchWrapper'>
            <div className="searchBox">
              <form action="https://www.google.com/search" method="GET">
                <input name="q" type="text" />
              </form>
            </div>
            <img className='searchImg' src='./icon/search-icon.png' alt='검색'></img>

            <div className="tagWrapper">
              <div className='tagBox'>
                <span>추천검색어</span>
                <span>#전자민원</span>
              </div>
              <div className='tagBox'>
                <span>추천검색어</span>
                <span>#자유게시판</span>
              </div>
              <div className='tagBox'>
                <span>추천검색어</span>
                <span>#설정하기</span>
              </div>
              <div className='tagBox'>
                <span>추천검색어</span>
                <span>#버스전용차로</span>
              </div>
              <div className='tagBox'>
                <span>추천검색어</span>
                <span>#회원가입</span>
              </div>
              <div className='tagBox'>
                <span>추천검색어</span>
                <span>#시장소개</span>
              </div>
            </div>
          </div>
        </div>

        <div className='scrollAction'>
          <p className='scrollText'>Scroll</p>
          <div className='scrollBox'>
            <div className='scrollBall'></div>
          </div>
        </div>

        <div className='daejeon-weatherBox'>
          <div className='weatherBox'>
            <img className='weather-Img' src={image_weath} alt="weather condition" />
            <p className='temp'>{temp}</p>
            <p className='weath-condition'>{weath_condition}</p>
            <p className='minimum-temperature' style={{ color: '#227cff' }}>{(temp - 20).toFixed(2)}°</p>
            <p style={{ color: '#a5a5a5' }}>/</p>
            <p className='highest-temperature' style={{ color: '#ff1515' }}>{temp + 3}°</p>
            <p className='daejeon-Dust-text' style={{ color: '#000' }}>대전광역시</p>
          </div>

          <div className='daejeon-dustBox'>
            <p>미세</p>
            <img className="dust-Img" src={image_dust} alt="Air Pollution" />
            <p style={txt_dust == "매우 나쁨" ? { color: '#f21919' } : (txt_dust == "나쁨" ? { color: '#ff5d05' } : (txt_dust == "보통" ? { color: '#26c405' } : (txt_dust == "좋음" ? { color: '#3d70fc' } : { color: '#3d70fc' })))}>{txt_dust}</p>
            <p className='ultraDustText'>초미세</p>
            <img className="ultraDust-Img" src={image_dust2} alt="Air Pollution2" />
            <p style={txt_dust2 == "매우 나쁨" ? { color: '#f21919' } : (txt_dust2 == "나쁨" ? { color: '#ff5d05' } : (txt_dust2 == "보통" ? { color: '#26c405' } : (txt_dust2 == "좋음" ? { color: '#3d70fc' } : { color: '#3d70fc' })))}>{txt_dust2}</p>
            <p className='daejeon-UltraDust-text' style={{ color: '#000' }}>대전광역시</p>
          </div>
        </div>
      </header>
    </div>
  )
}
export default MainBanner;

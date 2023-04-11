import React from 'react'
import { useEffect } from 'react';

const CctvBig = () => {
 
  //스크립트 파일 읽어오기
  const new_script = src => { 
    return new Promise((resolve, reject) => { 
      const script = document.createElement('script'); 
      script.src = src; 
      script.addEventListener('load', () => { 
        resolve(); 
      }); 
      script.addEventListener('error', e => { 
        reject(e); 
      }); 
      document.head.appendChild(script); 
    }); 
  };
  
  useEffect(() => { 
    //카카오맵 스크립트 읽어오기
    const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=4b7cf0853d80e9d44cd4cd9f644bb001');
    
    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => { 
      console.log('script loaded!!!');  
      const kakao = window['kakao']; 
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map1');
        const options = { 
          center: new kakao.maps.LatLng(36.350479150108896, 127.38379849860448), //좌표설정
          level: 3 
        }; 
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(36.350479150108896, 127.38379849860448); 
        const marker = new kakao.maps.Marker({ 
          position: markerPosition
        }); 
        marker.setMap(map); 

        // ----------------------------------

        const marker1 = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(36.32664353227586, 127.40680749003046),
          map: map
        });
        
        const marker2 = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(36.33325781499058, 127.38932751564604),
          map: map
        });
        const marker3 = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(36.33447212377424, 127.3914052417494),
          map: map
        });
        const marker4 = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(36.3519386982495, 127.37107198301487),
          map: map
        });
        const marker5 = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(36.32400966062212, 127.3787518554901),
          map: map
        });
        const marker6 = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(36.36255813154704, 127.34428107944092),
          map: map
        });
        const marker7 = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(36.33488035099315, 127.34830821087506),
          map: map
        });

      });   
    }); 
  }, []);

  return (
    <div className="App">
      <div id="map1" style={{ position : 'absolute',top:'0',left:'0',width : '100vw' , height : '100vh' , zIndex : '100'}}/>
    </div>
  );
}

export default CctvBig
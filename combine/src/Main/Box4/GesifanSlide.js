// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
           {/*  */}

           
<div style={{display :'flex' , justifyContent :'center', marginLeft : '80px'}}>
<div className='gesifan-box11'>
  <div style={{display : 'flex' , marginTop : '20px'}}>
    

  <SwiperSlide>
      <div className='gesifan-box12'>
          <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
              <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
              <p>칭찬합니다</p>
              <p>제목 : DW503 이예진 선생님 최고!</p>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='gesifan-box12'>
          <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
              <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
              <p>제안합니다</p>
              <p>제목 : DW503 이예진 선생님 최고!</p>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='gesifan-box12'>
          <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
              <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
              <p>신고합니다</p>
              <p>제목 : DW503 이예진 선생님 최고!</p>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='gesifan-box12'>
          <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
              <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
              <p>칭찬합니다</p>
              <p>제목 : DW503 이예진 선생님 최고!</p>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='gesifan-box12'>
          <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
              <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
              <p>칭찬합니다</p>
              <p>제목 : DW503 이예진 선생님 최고!</p>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='gesifan-box12'>
          <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
              <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
              <p>칭찬합니다</p>
              <p>제목 : DW503 이예진 선생님 최고!</p>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='gesifan-box12'>
          <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
              <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
              <p>칭찬합니다</p>
              <p>제목 : DW503 이예진 선생님 최고!</p>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='gesifan-box12'>
          <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
              <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
              <p>칭찬합니다</p>
              <p>제목 : DW503 이예진 선생님 최고!</p>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='gesifan-box12'>
          <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
              <p className='gesifan-span'>조회수 높은 글</p><span><img style={{width : '20px' , position : 'absolute' ,top : '7px',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
              <p>칭찬합니다</p>
              <p>제목 : DW503 이예진 선생님 최고!</p>
          </div>
      </div>
      </SwiperSlide>



  </div>
 
</div>  
</div>



           {/*  */}




      ...
    </Swiper>
  );
};





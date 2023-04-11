import React from 'react'
import MainBanner from './MainBanner/MainBanner'
import Box1 from './Box1/Box1'
import Box2 from './Box2/Box2'
// import Box3 from './Box3/Box3'
import Gesifan from './Box4/Gesifan'
import Cctv from './Box5/Cctv'
import MainFooter from './Footer/MainFooter'
import $ from 'jquery';
import { animated } from '@react-spring/web'


const Mainpage = () => {
  return (
    <div>
      <MainBanner/>
      <Box1/>
      <Box2/>
      {/* <Box3/> */}
      <Gesifan/>
      <Cctv/>
      <MainFooter/>
    </div>
  )
}

export default Mainpage
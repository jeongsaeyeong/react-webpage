import React from 'react'
import './assets/css/reset.css'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Image from './components/Image'
import ImgText from './components/ImgText'
import Card from './components/Card'
import Banner from './components/Banner'
import Text from './components/Text'

const App = () => {
    return (
        <>
            <Header elements="nexon"/>
            <Main>
                <Slider elements="nexon"/>
                <Image elements="nexon section" title="포트폴리오가 실력이다."/>
                <ImgText elements="section nexon gray" title="이미지 텍스트 유형"/>
                <Card elements="nexon section" title="웹스토리보이 강의"/>
                <Banner elements="nexon section" title="배너 영역"/>
                <Text elements=" nexon section" title="스크립트를 익히는 방법"/>
            </Main>
            <Footer elements="next section gray"/>
        </>
    )
}

export default App
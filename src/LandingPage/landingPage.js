import React from 'react'
import './landingPage.css'
import SideBar from './Components/Side Bar/SideBar'
import Carousel from './Components/Carousel/Carousel'
import Row from './Components/Rows/Row'

const LandingPage = () => {

    return (
        <div className="container landingPage">
            <div className="row">
                <SideBar />
                <div className="col-lg-9">
                    <Carousel />
                    <div className="row">
                        <Row />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
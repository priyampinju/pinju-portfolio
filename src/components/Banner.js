import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer", "Graphic Designer"]
    const [text, setText] = useState('')

    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const [index, setIndex] = useState(1);

    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setIndex(1);
            setDelta(500)
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <>
            <section className="banner" id='home'>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome To My Profile</span>
                                <h1>Hi I'm Pinju, <br />
                                <span className="wrap">{text}</span>
                            </h1>
                            <p>Greetings, I'm Pinju Priyam Gogoi, a seasoned professional excelling in Front-End Development, UI/UX Design and Graphic Design. My commitment to excellence is evident in the seamless fusion of cutting-edge technologies and design aesthetics. Explore my portfolio to witness the successful marriage of code and creativity, where each project showcases my expertise in delivering functional, user-centric solutions. Join me on a journey where professionalism meets innovation and discover the impact of strategic design thinking in the ever-evolving digital landscape</p>
                            <button onClick={() => window.location.href = "#connect"}>Get In Touch<ArrowRightCircle size={25} /></button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="header" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner

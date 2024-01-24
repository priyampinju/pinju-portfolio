import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer", "Graphic Designer"]
    const [text, setText] = useState('')

    const [delta, setDelta] = useState(300-Math.random()*100);

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
        let fullText = toRotate [i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1)
            setDelta(500)
        }
    }


    return (
        <>
            <section className="banner" id='home'>
                <Container>
                    <Row className="align-items-center">
                        <Col xs= {12} md={6} xl={7}>
                            <span className="tagline">Welcome To My Profile</span>
                            <h1>Hi I'm Pinju <br />
                            <span className="wrap">{text}</span>
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum optio dolorem, minima blanditiis aliquam similique in provident, quibusdam repellat vel soluta corrupti? Impedit reiciendis assumenda consectetur! Iste quasi saepe voluptatibus ducimus eius nam corrupti molestias. Dolorum velit blanditiis, nostrum natus esse adipisci? Sapiente excepturi aliquam in deleniti, totam maxime temporibus quo quod consequuntur quas provident iure enim animi obcaecati!</p>
                            <button onClick={() => console.log('Fukkk')}>Fvck Ew<ArrowRightCircle size={25}/></button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="header"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner

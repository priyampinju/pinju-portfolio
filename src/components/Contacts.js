// import React, { useState } from 'react'
// import contactImg from '../assets/img/contact-img.svg'
// import { Container, Row, Col } from 'react-bootstrap'
// // import 'animate.css';
// // import TrackVisibility from 'react-on-screen';

// const Contacts = () => {
//     const formInitialDetails = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//     }

//     const [formDetails, setFormDetails] = useState(formInitialDetails)
//     const [buttonText, setButtonText] = useState('send')
//     const [status, setStatus] = useState({})

//     const onFormUpdate = (category, value) => {
//         setFormDetails({
//             ...formDetails,
//             [category]: value
//         })
//     }

//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };

//   return (
//     <>
//         <section className="contact" id="connect">
//             <Container>
//                 <Row className="align-items-center">
//                     <Col md={6}>
//                         <img src={contactImg} alt="" srcset="" />
//                     </Col>
//                     <Col md={6}>
//                         <h2>Get in touch</h2>
//                         <form action="">
//                             <Row>

//                                 <Col sm={6} className='px-1'>
//                                     <input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e) =>  onFormUpdate('first', e.target.value)}/>
//                                 </Col>
//                                 <Col sm={6} className='px-1'>
//                                     <input type="text" value={formDetails.lastName} placeholder='Last Name' onChange={(e) =>  onFormUpdate('last', e.target.value)}/>
//                                 </Col>
//                                 <Col sm={6} className='px-1'>
//                                     <input type="email" value={formDetails.email} placeholder='Email' onChange={(e) =>  onFormUpdate('email', e.target.value)}/>
//                                 </Col>
//                                 <Col sm={6} className='px-1'>
//                                     <input type="tel" value={formDetails.phone} placeholder='Phone Number' onChange={(e) =>  onFormUpdate('phone', e.target.value)}/>
//                                 </Col>
//                                 <Col>
//                                     <textarea rows="8" value={formDetails.message} placeholder='write your message here' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                                     <button type='submit'> <span>{buttonText}</span></button>
//                                 </Col>
//                                 {
//                                     status.message &&
//                                     <Col>
//                                     <p className={status.success === false? "danger" : "success"}> {status.message} </p>
//                                     </Col>
//                                 }
//                             </Row>
//                         </form>
//                     </Col>
//                 </Row>
//             </Container>
//             </section> 
//     </>
//   )
// }

// export default Contacts





import React, { useRef, useState } from 'react'
import contactImg from '../assets/img/contact-img.svg'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({})

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // Change button text to 'Sending...'
        setButtonText('Sending...');
        emailjs.sendForm('service_sg0dok8', 'template_58icbzb', form.current, 'pVeGkWhea1hZ_FDNi')
            .then((result) => {
                console.log(result.text);
                // clear form fields
                form.current.reset();
                // update button text
                setButtonText('send');
                // update status message
                setStatus({ success: true, message: "Message sent successfully! You'll be contacted soon." });
            }, (error) => {
                console.log(error.text);
                // Update status message
                setStatus({ success: false, message: 'Failed to send message. Please try again.' });
            });
    };



    return (
        <>
            <section className="contact" id="connect">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img src={contactImg} />
                        </Col>
                        <Col md={6}>
                            <h2>Get in touch</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <Row>

                                    <Col sm={6} className='px-1'>
                                        <input type="text"
                                            name='firstName' placeholder='First Name' />
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type="text" placeholder='Last Name' name='lastName' />
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type="email" placeholder='Email' name='email' />
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type="tel" placeholder='Phone Number' name='phone' />
                                    </Col>
                                    <Col>
                                        <textarea rows="8" placeholder='write your message here' name='message'>
                                        </textarea>
                                        {
                                        status.message &&
                                        <Col sm={12}>
                                            <p className={status.success === false ? "danger" : "success"}> {status.message} </p>
                                        </Col>
                                    }
                                        <button type='submit' value='send'> <span>{buttonText}</span></button>
                                    </Col>
                                    

                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contacts

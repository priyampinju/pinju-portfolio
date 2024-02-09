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





import React, { useState } from 'react'
import contactImg from '../assets/img/contact-img.svg'
import { Container, Row, Col } from 'react-bootstrap'

const Contacts = () => {
    const [buttonText, setButtonText] = useState('send');

    var Email = {
        send: function (a) {
            return new Promise(function (n, e) {
                a.nocache = Math.floor(1e6 * Math.random() + 1), 
                a.Action = "Send";
                var t = JSON.stringify(a);
                Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) })
            })
        }, ajaxPost: function (e, n, t) {
            var a = Email.createCORSRequest("POST", e);
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
                var e = a.responseText;
                null != t && t(e)
            }, a.send(n)
        }, ajax: function (e, n) {
            var t = Email.createCORSRequest("GET", e);
            t.onload = function () {
                var e = t.responseText;
                null != n && n(e)
            }, t.send()
        }, createCORSRequest: function (e, n) {
            var t = new XMLHttpRequest;
            return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
        }
    };

    function sendEmail() {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "username",
            Password: "password",
            To: 'them@website.com',
            From: "you@isp.com",
            Subject: "This is the subject",
            Body: "And this is the body"
        }).then(
            message => alert(message)
        );
    }

    return (
        <>
            <section className="contact" id="connect">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img src={contactImg} alt="" srcset="" />
                        </Col>
                        <Col md={6}>
                            <h2>Get in touch</h2>
                            <form action="" onSubmit={sendEmail()}>
                                <Row>

                                    <Col sm={6} className='px-1'>
                                        <input type="text" value="" placeholder='First Name' onChange='' />
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type="text" value='' placeholder='Last Name' onChange='' />
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type="email" value='' placeholder='Email' onChange='' />
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type="tel" value='' placeholder='Phone Number' onChange='' />
                                    </Col>
                                    <Col>
                                        <textarea rows="8" value='' placeholder='write your message here' onChange=''></textarea>                                     <button type='submit'> <span>{buttonText}</span></button>
                                    </Col>
                                    {/* <Col>
                                            <p className=''>  </p>
                                        </Col> */}

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

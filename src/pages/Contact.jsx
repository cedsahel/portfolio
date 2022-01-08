import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

   const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nq8igcb', 'service_nq8igcb', form.current, 'user_QE7b7Z8d74O9VDvlCrZsR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <h1>Contactez moi</h1>
    <form style={{marginLeft:"300px",display:"flex",flexDirection:"column",paddingRight:"200px",alignContent:"center"}} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input style={{height:"30px"}} type="text" name="user_name" />
      <label>Email</label>
      <input style={{height:"30px"}} type="email" name="user_email" />
      <label>Message</label>
      <textarea style={{height:"200px"}} name="message" />
      <input style={{marginTop:"10px"}}  type="submit" value="Send" />
    </form>
    </>
  );
};


export default Contact
import "./FormStyles.css";
import  { useRef ,useState } from 'react';
import emailjs from '@emailjs/browser';


import React from 'react';

const Form = () => {
  const [text, settext] = useState(""); 
  const [Email, setEmail] = useState(""); 
  const [Message, setMessage] = useState(""); 
  const form = useRef();
  const sendEmail = (e) => {
    alert('You want to submit');
   e.preventDefault();
   

    emailjs.sendForm(
      'service_1qf5pji', 
      'template_z924h2a', 
      form.current,
       'Kg33GDJ72GxI_od0Q')
      .then((result) => {
          console.log(result.text);
          console.log('mesage sent')
      }, (error) => {
          console.log(error.text);
        
      });
      settext('');
      setEmail('');
      setMessage('');
    };
    

 
  return (
    <div className="form1">
    <form ref={form} onSubmit={sendEmail}>
    <label>Your Name--</label>
    <input type="text" 
    name="from_name" 
    onChange={event => settext(event.target.value)}
    value={text}>
    </input>
    <label>Email--</label>
    <input type="Email" name="email"
    onChange={event => setEmail(event.target.value)}
    value={Email}></input>
    <label>Message--</label>
    <input type="Message" rows ="6"  name="message"
    onChange={event => setMessage(event.target.value)}
    value={Message}></input>
    <button className="btn1">Submit</button>
    </form>
    </div>
  );
};


export default Form;
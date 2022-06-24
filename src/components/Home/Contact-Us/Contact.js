import { send } from 'emailjs-com';
import React, { useState } from 'react';
import './Contact.css'

function Contacts() {
    const [sender_name, set_name] = useState('');
    const [sender_email, set_email] = useState('');
    const [sender_message, set_message] = useState('');
    const handleName = (e) =>{
        set_name(e.target.value);
    }
    const handleEmail = (e) =>{
        set_email(e.target.value)
    }
    const handleMessage = (e) =>{
        set_message(e.target.value)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        send(
            'service_wa8i6gs',
            'template_azreite',
            {sender_name,sender_email,sender_message},
            '7-iJou_mtFeypOg1K',
        )
        .then((response)=>{
            alert('Message sent successfully')
        }).catch((err)=>{
            alert(err)
        })
      };
  return (
      <section className='Contact'>
          <div className='ContactUs'>
            <h1 className='headin'>Contact Us</h1>
            <form onSubmit={sendEmail}>
                <input type="text" name="sender-name" value={sender_name} required placeholder="Your Name" onChange={handleName}></input>
                <input type="email" name="sender-email" value={sender_email} required placeholder="Your Email" onChange={handleEmail}></input>
                <textarea className='messages' rows="4" cols="65" type="message" name="sender-message" value={sender_message} required placeholder="Your Message" onChange={handleMessage}></textarea>
                <button className="subButton" type='submit'>Submit</button>
            </form>
          </div>
      </section>
  );
}

export default Contacts;
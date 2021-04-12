import React from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {

    

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_s5o1uj8', 'template_9xfm3ko', e.target, 'user_0z3ZdFi9YxvJbxAxY1U7L')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
      <>
       <div className="page">
        <div className="container">
         <div className="row form">
            <form className="contact-form" onSubmit={sendEmail}>
                
                 <input type="hidden" name="contact_number" />
                 <label>Name</label>
                 <input type="text" name="user_name" />
                 <label>Email</label>
                 <input type="email" name="user_email" />
                 <label>Message</label>
                 <textarea name="message" />
                 <input type="submit" value="Send Message!" className="btn btn-slide-down" />
              
            </form>
        </div>
        </div>
        </div>
        
    </>
  );
}
export default Contact
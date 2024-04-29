import React from "react"
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import locattion_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1f3a413c-6686-4e7c-b039-c540bbc1ac6d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
    return(     
     <div className="contact">
        <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>We're here to help with any questions, concerns, or inquiries you may have. Please feel free to reach out to us using the contact information provided below. Whether you're a prospective student, current student, alumni, or just interested in learning more about our institution, we'd love to hear from you.</p>
        <ul>
            <li><img src={mail_icon} alt="" />blurbmusic12@gmail.com</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={locattion_icon} alt="" />77 Massachusetts Ave, Cambridge <br/> MA 02139, United States</li>
        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" required />
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter Your Mobile No." />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
                <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  );
};

export default Contact;

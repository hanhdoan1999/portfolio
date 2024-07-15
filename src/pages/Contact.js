import emailjs from 'emailjs-com';
import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button/Button";
import "../styles/pages/AddProject.scss";

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // const serviceID = 'YOUR_SERVICE_ID';
    // const templateID = 'YOUR_TEMPLATE_ID';
    // const userID = 'YOUR_USER_ID';

    const serviceID = 'service_76kx2kl';
    const templateID = 'template_uwj507t';
    const userID = 'j485Y45oPH0rDJtxB';


    try {
      // const contactsRef = ref(database, 'contacts');
      // await push(contactsRef, formData);
      await emailjs.send(serviceID, templateID, formData, userID);
      toast.success("Message sent!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Error sending message, please try again later.");
      console.error('Error sending message: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-custom">
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required="True" 
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required="True" 
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required="True" 
            />
          </label>
        </div>
        <Button type="submit" title={isLoading ? 'Submitting...' : 'Submit'} disabled={isLoading} />
      </form>
    </>
  );
}

export default Contact;

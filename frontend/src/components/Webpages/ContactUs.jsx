import React, { useState } from 'react';

const ContactUs = () => {
  let [statestore, statestoreupdater] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleFunc = (e) => {
    let { name, value } = e.target;
    statestoreupdater((oldstate) => ({ ...oldstate, [name]: value }));
    console.log(statestore);
  };

  fetch('http://127.0.0.1:3000/api')
    .then((res) => res.json())
    .then((data) => console.log('data from api', data));

  return (
    <div className="contactus">
      <div>Contact Us</div>
      <form action="">
        <label htmlFor="Name">Name</label>
        <input type="text" name="Name" onChange={handleFunc} required />
        <br />
        <br />
        <label htmlFor="Email">Email</label>
        <input type="email" name="Email" onChange={handleFunc} />
        <br />
        <br />
        <label htmlFor="Phone">Phone</label>
        <input type="phone" name="Phone" onChange={handleFunc} /> <br />
        <br />
        <label htmlFor="Subject">Subject</label>
        <input type="text" name="Subject" onChange={handleFunc} /> <br />
        <br />
        <label htmlFor="Message">Message</label>
        <input type="text" name="Message" onChange={handleFunc} required />{' '}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;

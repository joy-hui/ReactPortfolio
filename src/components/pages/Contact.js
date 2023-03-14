import React from "react";
import "../../style.css";
import { useState } from "react";

const Contact = () => {
  // Setting the component's initial state
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    message:""
  });

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    console.log(e.target);
    const { name, value,message } = e.target;

    // Updating the input's state
    // It's important to make a copy of the existing form state using the spread operator (...) so you don't lose the data from previous input fields!
    setFormInput({ ...formInput, [name]: value });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, then set `firstName` and `lastName` to empty strings using our state-setter function from useState, which clears the inputs
    alert(`Thank you for you message, I will contact you soon.`);
    setFormInput({
      firstName: "",
      lastName: "",
      message:""
    });
  };
  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <h1 className="title">Contact</h1>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <form className="form">
            <p>You can contact me via the ways below.</p>
            <div className="content">
              <ul>
                <li>
                  <strong>
                    Email: <br></br>tongwandou432@gamil.com
                  </strong>
                </li>
                <br></br>
                <li>
                  <strong>
                    GitHub: https://github.com/joy-hui <br></br>
                  </strong>
                  <a href="https://github.com/joy-hui">
                    https://github.com/joy-hui
                  </a>
                </li>
                <br></br>
                <li>
                  <strong>
                    link: https://www.linkedin.com/feed/<br></br>{" "}
                  </strong>
                  <a href="https://www.linkedin.com/feed/">
                    https://www.linkedin.com/feed/
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <form className="form">
            <label htmlFor="name">Your name</label>
            <input
              value={formInput.firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
            <label htmlFor="email">Your email</label>
            <input
              value={formInput.lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="email"
            />
            <label htmlFor="message">Your message</label>
            <textarea value={formInput.message} name="message" 
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            rows="5" required/>
            <button onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

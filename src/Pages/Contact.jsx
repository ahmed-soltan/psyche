import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-black display-1 my-5">Contact us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27484.135871578797!2d30.988065393232954!3d30.562948028638008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d6eb70a91047%3A0xc353387ed2f37809!2sMenoufia%20University!5e0!3m2!1sen!2seg!4v1701509061690!5m2!1sen!2seg"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    <div className=" bg-body-tertiary p-3">
    <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          type="text"
          class="form-control py-3"
          placeholder="Enter Your Name..."
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control py-3"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Your Message
        </label>
        <textarea
          class="form-control py-3"
          id="exampleFormControlTextarea1"
          placeholder="Your Message..."
          rows="3"
        ></textarea>
      </div>
    <button className="btn btn-primary fs-5 px-3">
        Submit
    </button>
    </div>
    </div>
  );
};

export default Contact;

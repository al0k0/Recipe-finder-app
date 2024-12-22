import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData); // Debugging

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          number: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Try again.');
      }
    } catch (error) {
      console.error('Error during form submission:', error); // Debugging
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
    <h1 className="py-5 bg-yellow-400 shadow-2xl w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-900 text-center">
      Contact Us
    </h1>
    <div className="flex justify-center px-6 py-10">
      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-2xl w-full space-y-5 flex flex-col justify-center items-center mb-5"
      >
        <input
        required
          type="text"
          value={formData.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
          className="p-3 mt-4 text-sm lg:text-lg w-full rounded-md shadow-lg focus:outline-none focus:ring-yellow-500 border border-gray-400"
        />
        <input
        required
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          className="p-3 mt-4 text-sm lg:text-lg w-full rounded-md shadow-lg focus:outline-none focus:ring-yellow-500 border border-gray-400"
        />
        <input
        required
          type="text"
          value={formData.number}
          onChange={handleChange}
          name="number"
          placeholder="Mobile Number"
          className="p-3 mt-4 text-sm lg:text-lg w-full rounded-md shadow-lg focus:outline-none focus:ring-yellow-500 border border-gray-400"
        />
        <input
        required
          type="text"
          value={formData.subject}
          onChange={handleChange}
          name="subject"
          placeholder="Subject"
          className="p-3 mt-4 text-sm lg:text-lg w-full rounded-md shadow-lg focus:outline-none focus:ring-yellow-500 border border-gray-400"
        />
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          placeholder="Write your message here..."
          className="w-full rounded-md h-60 mt-4 p-4 text-lg focus:outline-none border border-gray-400"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-800 py-3 px-8 rounded-lg hover:bg-yellow-700 active:shadow-2xl duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default Contact;

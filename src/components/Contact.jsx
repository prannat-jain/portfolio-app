import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-screen bg-[#0c3014] text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="border-b-4 border-[#4bff4b] pb-2">Contact</span>
        </h2>
        <div className="max-w-[600px] mx-auto">
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Name" className="p-2 bg-[#1a4731] rounded-md" />
            <input type="email" placeholder="Email" className="p-2 bg-[#1a4731] rounded-md" />
            <textarea placeholder="Message" rows="6" className="p-2 bg-[#1a4731] rounded-md"></textarea>
            <button className="bg-[#4bff4b] text-black font-bold py-2 px-4 rounded hover:bg-[#3bcc3b]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
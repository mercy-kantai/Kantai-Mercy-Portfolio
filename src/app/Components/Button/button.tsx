"use client";
import { useState, FormEvent } from 'react';

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      subject: HTMLInputElement;
      message: HTMLTextAreaElement;
    };
    
    const subject = encodeURIComponent(formElements.subject.value);
    const body = encodeURIComponent(formElements.message.value);
    window.location.href = `mailto:kantaiemilymercy@gmail.com?subject=${subject}&body=${body}`;
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 md:py-3 px-4 md:px-6 darker grotesque rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105 mt-4 md:mt-6"
      >
        Contact Me
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Send Email</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter email subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-md transition-colors duration-200"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
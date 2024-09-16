import React from 'react';

export default function Contact() {
  return (
    <main className="px-2 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md" required></textarea>
          </div>
          <button type="submit" className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-accent duration-300">Send Message</button>

          
        </form>
      </div>
    </main>
  );
}
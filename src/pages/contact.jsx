import React, { useState } from 'react';
import { Send } from 'lucide-react';
import {ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Save form data in local storage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);

      // Show success toast
      toast.success('Form submitted successfully! We\'ll get back to you soon.');

    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 bg-gradient-to-r from-purple-700 to-indigo-800 text-white text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-200">Have questions? We're here to help.</p>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Send Us a Message</h2>
              <p className="text-gray-500">Fill out the form below and our team will get back to you.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm">Name</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    rows={5}
                    className="input"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 text-white rounded-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <span>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Visit Our Campus</h2>
              <p className="text-gray-500">We're located in the heart of the tech district.</p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0508883215894!2d-122.41941638468173!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1649181635822!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="LearnSphere Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
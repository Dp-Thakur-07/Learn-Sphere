import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import WeatherWidget from "../Componets/Weather";
import ChatbotWidget from "../componets/Chatboat";
import CEO from "../assets/CEO.jpg";   
import CurriculumHead from "../assets/Member.jpg";
import DataScientist from "../assets/Member2.jpg"; 

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-purple-700 to-indigo-800 text-white text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to LearnSphere</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Empowering the next generation of AI & Data Science professionals
          </p>
          <div className="space-x-4">
            <Link to="/products">
              <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">Explore Programs</button>
            </Link>
            <Link to="/contact">
              <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-purple-700 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <span className="text-purple-700 font-semibold text-sm">About Us</span>
          <h2 className="text-4xl font-bold my-4">Transforming Education Through Technology</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            LearnSphere is a premier EdTech platform specializing in AI & Data Science education. We combine cutting-edge
            curriculum with industry expertise to prepare students for the future of work.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="p-6 border rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To democratize access to quality education in AI and Data Science, empowering individuals to thrive in the digital economy.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in technology education, creating a world where everyone has the skills to participate in the AI-driven future.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Team section */}

<section className="w-full py-20 bg-gray-50 text-center">
  <div className="container mx-auto px-4">
    <span className="text-purple-700 font-semibold text-sm">Who We Are</span>
    <h2 className="text-4xl font-bold my-4">Meet Our Team</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
      We're a team of educators, technologists, and industry experts passionate about preparing students for careers in AI and Data Science.
    </p>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { name: "Dr. Sarah Chen", role: "Founder & CEO", image: CEO },
        { name: "Michael Rodriguez", role: "Head of Curriculum",image: CurriculumHead },
        { name: "Aisha Patel", role: "Lead Data Scientist" ,image: DataScientist},
      ].map((person, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <img src={person.image} alt={person.name} className="rounded-full w-32 h-32 mb-4 object-cover shadow-md border-2 border-purple-200" />
          <h3 className="text-xl font-semibold">{person.name}</h3>
          <p className="text-gray-500">{person.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* What is Data Science */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-purple-700 font-semibold text-sm">What is Data Science</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">The Science of Extracting Knowledge from Data</h2>
            <p className="text-gray-600 mb-4">
              Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data.
            </p>
            <p className="text-gray-600">
              It encompasses techniques and theories from mathematics, statistics, computer science, domain knowledge, and information science.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Key Components:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Data Collection and Cleaning</li>
              <li>Exploratory Data Analysis</li>
              <li>Statistical Modeling</li>
              <li>Machine Learning</li>
              <li>Data Visualization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Study Data Science */}
      <section className="w-full py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <span className="text-purple-700 font-semibold text-sm">Why Study Data Science</span>
          <h2 className="text-4xl font-bold my-4">Unlock the Future of Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Data Science skills are in high demand across industries, offering exciting career opportunities and the chance to make a real impact.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "High Demand", description: "Data Science professionals are among the most sought-after in the job market." },
              { title: "Competitive Salaries", description: "Data Scientists command some of the highest salaries in the tech industry." },
              { title: "Diverse Applications", description: "From healthcare to finance, data science is transforming every industry." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather and Chatbot */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Current Weather</h2>
            <WeatherWidget />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Have Questions?</h2>
            <p className="text-gray-600 mb-4">
              Our AI assistant is here to help you with any questions about our programs.
            </p>
            <ChatbotWidget />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-purple-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            Join thousands of students who have transformed their careers with LearnSphere.
          </p>
          <Link to="/products">
            <button className="bg-white text-purple-700 px-6 py-2 rounded hover:bg-gray-100 cursor-pointer">
              Explore Our Programs →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

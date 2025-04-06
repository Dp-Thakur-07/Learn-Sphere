import React from "react";
import { ArrowRight, Check, BookOpen, Code, Database, Brain, BarChart, Users } from "lucide-react"
import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">DataSprint</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">Our flagship AI & Data Science Bootcamp</p>
            </div>
            <div className="space-x-4">
              <Link to="/contact">
              <button className="bg-white text-purple-700 hover:bg-gray-100 px-6 py-2 rounded-md font-medium flex items-center cursor-pointer">
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                Program Overview
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transform Your Career in 16 Weeks</h2>
              <p className="text-gray-500 md:text-lg">
                DataSprint is an intensive, hands-on bootcamp designed to take you from beginner to job-ready data
                scientist in just 16 weeks. With a curriculum developed by industry experts and a focus on real-world
                projects, you'll graduate with the skills and portfolio needed to launch your career in AI and Data
                Science.
              </p>
              <p className="text-gray-500 md:text-lg">
                Whether you're looking to switch careers or upskill in your current role, DataSprint provides the
                perfect blend of theory and practical application to help you succeed in the fast-growing field of data
                science.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Program Highlights</h3>
                <ul className="grid gap-3">
                  {[
                    "16-week intensive bootcamp",
                    "Live online instruction from industry experts",
                    "Hands-on projects with real-world datasets",
                    "1:1 mentorship and career coaching",
                    "Job placement assistance",
                    "Flexible payment options",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Makes DataSprint Different
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                Our program is designed with your success in mind, combining cutting-edge curriculum with personalized
                support.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {[
                {
                  title: "Industry-Relevant Curriculum",
                  description: "Curriculum developed and updated regularly with input from leading tech companies.",
                  icon: <BookOpen className="h-10 w-10 text-purple-600" />,
                },
                {
                  title: "Project-Based Learning",
                  description: "Build a portfolio of 5+ projects solving real-world problems with data.",
                  icon: <Code className="h-10 w-10 text-purple-600" />,
                },
                {
                  title: "Cutting-Edge Tools",
                  description: "Learn the latest tools and technologies used in the industry today.",
                  icon: <Database className="h-10 w-10 text-purple-600" />,
                },
                {
                  title: "AI Specialization",
                  description: "Deep dive into machine learning and artificial intelligence applications.",
                  icon: <Brain className="h-10 w-10 text-purple-600" />,
                },
                {
                  title: "Data Visualization Mastery",
                  description: "Learn to create compelling visualizations that tell a story with data.",
                  icon: <BarChart className="h-10 w-10 text-purple-600" />,
                },
                {
                  title: "Career Support",
                  description: "Resume reviews, interview prep, and networking opportunities with hiring partners.",
                  icon: <Users className="h-10 w-10 text-purple-600" />,
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">Curriculum</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Learning Path
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                Our curriculum is structured to build your skills progressively, from fundamentals to advanced topics.
              </p>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="flex space-x-2 mb-8">
              {['Module 1', 'Module 2', 'Module 3', 'Module 4'].map((tab, index) => (
                <button 
                  key={index}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200"
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Module 1: Foundations (Weeks 1-4)</h3>
              <p className="text-gray-600 mb-4">Building the essential skills for data science</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Python Programming</strong>
                    <p className="text-sm text-gray-500">
                      Variables, data types, control flow, functions, and object-oriented programming
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Data Manipulation with Pandas</strong>
                    <p className="text-sm text-gray-500">Loading, cleaning, transforming, and analyzing data</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Data Visualization</strong>
                    <p className="text-sm text-gray-500">Creating visualizations with Matplotlib and Seaborn</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>SQL for Data Science</strong>
                    <p className="text-sm text-gray-500">Querying databases and joining tables</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                Hear from our graduates who have transformed their careers with DataSprint.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                role: "Data Scientist at Google",
                quote:
                  "DataSprint gave me the skills and confidence to transition from marketing to data science. Within 3 months of graduating, I landed my dream job at Google.",
              },
              {
                name: "Maria Garcia",
                role: "ML Engineer at Amazon",
                quote:
                  "The hands-on projects and mentorship at DataSprint were invaluable. I went from knowing basic Python to implementing complex machine learning models.",
              },
              {
                name: "David Kim",
                role: "Data Analyst at Microsoft",
                quote:
                  "As someone with no technical background, I was worried about keeping up. The supportive community and step-by-step curriculum made the transition smooth.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full h-20 w-20 bg-purple-100 flex items-center justify-center text-purple-600">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-600 mb-4">{testimonial.role}</p>
                <p className="text-gray-500">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Launch Your Data Science Career?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-lg">
                Applications for our next cohort are now open. Spaces are limited.
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/contact">
              <button className="bg-white text-purple-700 hover:bg-gray-100 px-6 py-2 rounded-md font-medium flex items-center cursor-pointer">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
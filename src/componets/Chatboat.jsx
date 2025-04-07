import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

export default function ChatbotWidget() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm the LearnSphere assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);
  
  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input.trim().toLowerCase());
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); 
  };

  const faqData = [
    { question: "What is learnsphere", answer: "LearnSphere is an EdTech platform for AI and Data Science." },
    { question: "What programs do you offer", answer: "We offer bootcamps in AI, Machine Learning, and Data Science." },
    { question: "How can I contact you?", answer: "You can use the contact form or email us at contact@learnsphere.com." },
    { question: "What is the duration of the bootcamp?", answer: "Our DataSprint bootcamp is 16 weeks long." },
    { question: "Is the bootcamp online or in-person?", answer: "The bootcamp is fully online, so you can join from anywhere." },
    { question: "Do you provide a certificate?", answer: "Yes, you will receive a certificate upon successful completion of the bootcamp." },
    { question: "What tools or languages will I learn?", answer: "You will learn Python, SQL, machine learning libraries like pandas, scikit-learn, and data visualization tools." },
    { question: "Are there live sessions or recorded?", answer: "The bootcamp includes live interactive sessions as well as recorded materials for flexible learning." }
  ];
  
  const getBotResponse = (userInput) => {
    // Convert to lowercase for matching
    const lowerInput = userInput.toLowerCase();
  
    // Rule-based replies
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return "Hello! How can I help you with your data science journey today?";
    } else if (lowerInput.includes("course") || lowerInput.includes("program") || lowerInput.includes("bootcamp")) {
      return "Our DataSprint bootcamp is a 16-week intensive program designed to take you from beginner to job-ready data scientist. Would you like to know more about the curriculum or pricing?";
    } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("tuition")) {
      return "The DataSprint bootcamp costs $9,995 if paid upfront, or we offer monthly installments and income share agreements. Would you like me to explain our payment options in more detail?";
    } else if (
      lowerInput.includes("prerequisite") ||
      lowerInput.includes("experience") ||
      lowerInput.includes("background")
    ) {
      return "No prior programming experience is required for our bootcamp. We start with the fundamentals and build up to advanced topics. A background in math or statistics can be helpful but is not required.";
    } else if (lowerInput.includes("job") || lowerInput.includes("career") || lowerInput.includes("placement")) {
      return "Our job placement rate is 93% within 6 months of graduation. We have partnerships with top tech companies and provide career coaching, resume reviews, and interview preparation.";
    } else if (lowerInput.includes("apply") || lowerInput.includes("application") || lowerInput.includes("enroll")) {
      return "You can apply for our program by filling out the form on our Contact page. After submitting your application, you'll be invited to a technical assessment and interview with our admissions team.";
    } else if (lowerInput.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    }
  
    // FAQ matching from array
    for (let item of faqData) {
      if (lowerInput.includes(item.question.toLowerCase())) {
        return item.answer;
      }
    }
  
    // Default fallback
    return "I'm not sure I understand. Could you rephrase your question? You can ask about our program, prerequisites, job placement, or application process.";
  };
  

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="h-[400px] flex flex-col border rounded-lg p-4">
      <div className="flex-1 overflow-hidden p-4">
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto pr-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "user" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-100 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-4 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="border p-2 rounded-l-md w-full"
            />
            <button
              onClick={handleSend}
              className="bg-purple-600 text-white p-2 rounded-r-md"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
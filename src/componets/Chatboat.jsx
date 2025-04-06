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

  const getBotResponse = (userInput) => {
    // Simple rule-based responses
    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("hey")) {
      return "Hello! How can I help you with your data science journey today?";
    } else if (userInput.includes("course") || userInput.includes("program") || userInput.includes("bootcamp")) {
      return "Our DataSprint bootcamp is a 16-week intensive program designed to take you from beginner to job-ready data scientist. Would you like to know more about the curriculum or pricing?";
    } else if (userInput.includes("price") || userInput.includes("cost") || userInput.includes("tuition")) {
      return "The DataSprint bootcamp costs $9,995 if paid upfront, or we offer monthly installments and income share agreements. Would you like me to explain our payment options in more detail?";
    } else if (
      userInput.includes("prerequisite") ||
      userInput.includes("experience") ||
      userInput.includes("background")
    ) {
      return "No prior programming experience is required for our bootcamp. We start with the fundamentals and build up to advanced topics. A background in math or statistics can be helpful but is not required.";
    } else if (userInput.includes("job") || userInput.includes("career") || userInput.includes("placement")) {
      return "Our job placement rate is 93% within 6 months of graduation. We have partnerships with top tech companies and provide career coaching, resume reviews, and interview preparation.";
    } else if (userInput.includes("apply") || userInput.includes("application") || userInput.includes("enroll")) {
      return "You can apply for our program by filling out the form on our Contact page. After submitting your application, you'll be invited to a technical assessment and interview with our admissions team.";
    } else if (userInput.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return "I'm not sure I understand. Could you rephrase your question? You can ask about our program, prerequisites, job placement, or application process.";
    }
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
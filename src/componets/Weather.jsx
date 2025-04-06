import React, { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, Wind } from "lucide-react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to weather service
    const fetchWeather = async () => {
      setLoading(true);

      // In a real app, you would fetch from an actual API
      // const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=San+Francisco&appid=YOUR_API_KEY');
      // const data = await response.json();

      // Mock data for demonstration
      setTimeout(() => {
        const mockWeatherData = {
          location: "San Francisco, CA",
          temperature: 68,
          condition: "Partly Cloudy",
          humidity: 72,
          windSpeed: 8,
        };

        setWeather(mockWeatherData);
        setLoading(false);
      }, 1500);
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="h-12 w-12 text-yellow-500" />;
      case "cloudy":
        return <Cloud className="h-12 w-12 text-gray-500" />;
      case "rainy":
        return <CloudRain className="h-12 w-12 text-blue-500" />;
      case "partly cloudy":
        return (
          <div className="relative">
            <Sun className="h-12 w-12 text-yellow-500" />
            <Cloud className="h-8 w-8 text-gray-500 absolute -bottom-1 -right-1" />
          </div>
        );
      default:
        return <Sun className="h-12 w-12 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <div className="border rounded-lg p-4 w-[300px]">
        <h3 className="text-xl font-semibold mb-2">Weather</h3>
        <p>Loading current conditions...</p>
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="border rounded-lg p-4 w-[300px]">
        <h3 className="text-xl font-semibold mb-2">Weather</h3>
        <p>Unable to load weather data</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4 w-[300px]">
      <h3 className="text-xl font-semibold mb-2">Current Weather</h3>
      <p className="text-sm text-gray-500 mb-4">{weather.location}</p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {getWeatherIcon(weather.condition)}
          <div>
            <p className="text-3xl font-bold">{weather.temperature}°F</p>
            <p className="text-gray-500">{weather.condition}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1 rounded">
              <Cloud className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-sm">Humidity: {weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1 rounded">
              <Wind className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-sm">Wind: {weather.windSpeed} mph</span>
          </div>
        </div>
      </div>
    </div>
  );
}
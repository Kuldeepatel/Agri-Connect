import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/news');
        setNews(response.data.news); // Adjusted to reflect the correct data structure
        console.log(response.data.news); // Updated to log the correct data
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.News_Picture} alt={item.News_Title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.News_Title}</h2>
              <p className="text-gray-700 mb-4">{item.News_Details}</p>
              <p className="text-gray-500 text-sm">{new Date(item.News_Date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default News;

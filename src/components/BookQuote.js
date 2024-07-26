import React, { useState, useEffect } from "react";
import quotes from "../data/quotes.json"; // Path to your JSON file

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const BookQuote = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    // Set a new random quote on component mount
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="book-quote">
      <h2>Quote of the Day</h2>
      <blockquote>
        <p>"{quote.quote}"</p>
        <footer>
          <cite>
            {quote.author}, <i>{quote.book}</i>
          </cite>
        </footer>
      </blockquote>
    </div>
  );
};

export default BookQuote;

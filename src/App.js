import React, { useState } from "react";

const App = () => {
  const questions = [
    {
      id: 1,
      question: "One How to Give Components Menoury",
      answer: "ONe Some quick example text to build on the card title",
    },
    {
      id: 2,
      question: "Two How to Give Components Menoury",
      answer: "Two Some quick example text to build on the card title",
    },
    {
      id: 3,
      question: "Three How to Give Components Menoury",
      answer: "Three Some quick example text to build on the card title",
    },
    {
      id: 4,
      question: "Four How to Give Components Menoury",
      answer: "Four Some quick example text to build on the card title",
    },
    {
      id: 5,
      question: "Five How to Give Components Menoury",
      answer: "Five Some quick example text to build on the card title",
    },
    {
      id: 6,
      question: "Six How to Give Components Menoury",
      answer: "Six Some quick example text to build on the card title",
    },
    {
      id: 7,
      question: "Seven How to Give Components Menoury",
      answer: "Seven Some quick example text to build on the card title",
    },
    {
      id: 8,
      question: "Eight How to Give Components Menoury",
      answer: "Eight Some quick example text to build on the card title",
    },
  ];
  const [selectedId, setSelectedId] = useState(null);
  const clickHandler = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        {questions.map((card) => (
          <div
            className="col-md-3"
            onClick={() => clickHandler(card.id)}
            key={card.id}
          >
            <div
              className={`card text-white ${
                card.id === selectedId ? "bg-danger" : "bg-info"
              } bg-info mb-3`}
            >
              <div className="card-body">
                <h5 className="card-title">
                  {card.id === selectedId ? card.answer : card.question}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

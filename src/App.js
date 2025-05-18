import React, { useState } from 'react';
import MaskedImage from './components/MaskedImage';
import './App.css';

const imageList = [
  { filename: 'image1.jpg', rows: 4, cols: 4 },
  { filename: 'image2.jpg', rows: 9, cols: 9 },
  { filename: 'image3.jpg', rows: 4, cols: 4 },
  { filename: 'image4.jpg', rows: 8, cols: 8 },
  { filename: 'image5.jpg', rows: 5, cols: 5 },
  { filename: 'image6.jpg', rows: 3, cols: 3 },
  { filename: 'image7.jpg', rows: 4, cols: 4 },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = imageList[currentIndex];

  const isSpecialQuestion = currentIndex === 5;

  const nextImage = () => {
    if (currentIndex < imageList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="App">
      <h1>{isSpecialQuestion ? ' ンクリドル' : 'インクリドル'}</h1>

      <MaskedImage
        filename={current.filename}
        rows={current.rows}
        cols={current.cols}
        questionIndex={currentIndex}
      />

      <div style={{ marginTop: '10px' }}>
        <button onClick={prevImage} disabled={currentIndex === 0}>前へ</button>
        <button onClick={nextImage} disabled={currentIndex === imageList.length - 1}>次へ</button>
      </div>

      <div className="fixed-text">
        {isSpecialQuestion ? ' した場所がかくれる' : 'おした場所がかくれる'}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const pages = 30;
const images = new Array(pages).fill('').map((_, index) => `Assets/book/katalog${index % 2 === 0 ? 'l' : 'r'}.png`);

const Flipbook = () => (
  <div style={{ width: '60vw', height: '60vh', maxWidth: '800px', maxHeight: '800px', margin: 'auto' }}>
    <HTMLFlipBook width={500} height={700} size="stretch" minWidth={315} maxWidth={1000} minHeight={400} maxHeight={1533} maxShadowOpacity={0.5} showCover={false} >
      {images.map((img, index) => (
        <div className="page" key={index}>
          <img src={img} alt={`page-${index + 1}`} />
          {index === 2 && <a href="/">BYłosdaso dodkqo djqiwic psabyl</a>}
        </div>
      ))}
    </HTMLFlipBook>
  </div>
);

export default Flipbook;

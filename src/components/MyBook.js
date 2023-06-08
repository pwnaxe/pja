import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="demoPage"
      ref={ref}
    >
      <img
        src={props.image}
        alt={`Page ${props.number}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
});

const Cover = React.forwardRef((props, ref) => {
  return (
    <div
      className="cover"
      ref={ref}
    >
      <img
        src={props.image}
        alt={props.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
});

function MyBook(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md')); // 'md' and above is considered as large screen

  return (
    <HTMLFlipBook
      width='500'
      height='700'
      size={matches ? "fixed" : "stretch"}
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="demo-book">
      <Cover title="My Awesome Book" image={process.env.PUBLIC_URL + "/assets/images/cover.png"} />
      <Page number="1" image={process.env.PUBLIC_URL + "/assets/images/orange 1.png"} />
      <Page number="2" image={process.env.PUBLIC_URL + "/assets/images/orange 2.png"} />
      <Page number="3" image={process.env.PUBLIC_URL + "/assets/images/orange 1.png"} />
      <Page number="4" image={process.env.PUBLIC_URL + "/assets/images/orange 2.png"} />
      <Cover title="My Awesome Book" image={process.env.PUBLIC_URL + "/assets/images/coverback.png"} />
    </HTMLFlipBook >
  );
}

export default MyBook;

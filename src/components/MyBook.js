import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="demoPage"
      ref={ref}
      style={props.number === 1 ? { backgroundColor: '#f9f9f9', width: '100%', height: '100%' } : {}}
    >
      {props.image && <img
        src={props.image}
        alt={`Page ${props.number}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />}
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
      <Cover title="Front Cover" image={process.env.PUBLIC_URL + "/assets/book/front.png"} />
      <Page number={2} image={process.env.PUBLIC_URL + "/assets/book/white.png"} />
      <Page number={3} image={process.env.PUBLIC_URL + "/assets/book/2.png"} />
      <Page number={4} image={process.env.PUBLIC_URL + "/assets/book/3.png"} />
      <Page number={5} image={process.env.PUBLIC_URL + "/assets/book/4.png"} />
      <Page number={6} image={process.env.PUBLIC_URL + "/assets/book/5.png"} />
      <Page number={7} image={process.env.PUBLIC_URL + "/assets/book/6.png"} />
      <Page number={8} image={process.env.PUBLIC_URL + "/assets/book/7.png"} />
      <Page number={9} image={process.env.PUBLIC_URL + "/assets/book/8.png"} />
      <Page number={10} image={process.env.PUBLIC_URL + "/assets/book/9.png"} />
      <Page number={11} image={process.env.PUBLIC_URL + "/assets/book/10.png"} />
      <Page number={12} image={process.env.PUBLIC_URL + "/assets/book/11.png"} />
      <Page number={13} image={process.env.PUBLIC_URL + "/assets/book/12.png"} />
      <Page number={14} image={process.env.PUBLIC_URL + "/assets/book/13.png"} />
      <Page number={15} image={process.env.PUBLIC_URL + "/assets/book/14.png"} />
      <Page number={16} image={process.env.PUBLIC_URL + "/assets/book/15.png"} />
      <Page number={17} image={process.env.PUBLIC_URL + "/assets/book/16.png"} />
      <Page number={18} image={process.env.PUBLIC_URL + "/assets/book/17.png"} />
      <Page number={19} image={process.env.PUBLIC_URL + "/assets/book/18.png"} />
      <Page number={20} image={process.env.PUBLIC_URL + "/assets/book/19.png"} />
      <Page number={21} image={process.env.PUBLIC_URL + "/assets/book/20.png"} />
      <Cover title="Back Cover" image={process.env.PUBLIC_URL + "/assets/book/back.png"} />
    </HTMLFlipBook >
  );
}

export default MyBook;

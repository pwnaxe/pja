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
      <Cover title="Front Cover" image={process.env.PUBLIC_URL + "/assets/book/cover.png"} />
      <Page number={1} />
      <Page number={2} image={process.env.PUBLIC_URL + "/assets/book/bec5.png"} />
      <Page number={3} image={process.env.PUBLIC_URL + "/assets/book/bec6.png"} />
      <Page number={4} image={process.env.PUBLIC_URL + "/assets/book/bec7.png"} />
      <Page number={5} image={process.env.PUBLIC_URL + "/assets/book/asse13.png"} />
      <Page number={6} image={process.env.PUBLIC_URL + "/assets/book/asse14.png"} />
      <Page number={7} image={process.env.PUBLIC_URL + "/assets/book/epam3.png"} />
      <Page number={8} image={process.env.PUBLIC_URL + "/assets/book/epam4.png"} />
      <Page number={9} image={process.env.PUBLIC_URL + "/assets/book/ex15.png"} />
      <Page number={10} image={process.env.PUBLIC_URL + "/assets/book/ex16.png"} />
      <Page number={11} image={process.env.PUBLIC_URL + "/assets/book/hays10.png"} />
      <Page number={12} image={process.env.PUBLIC_URL + "/assets/book/hays11.png"} />
      <Page number={13} image={process.env.PUBLIC_URL + "/assets/book/hays12.png"} />
      <Page number={14} image={process.env.PUBLIC_URL + "/assets/book/net17.png"} />
      <Page number={15} image={process.env.PUBLIC_URL + "/assets/book/net18.png"} />
      <Page number={16} image={process.env.PUBLIC_URL + "/assets/book/orange1.png"} />
      <Page number={17} image={process.env.PUBLIC_URL + "/assets/book/orange2.png"} />
      <Page number={18} image={process.env.PUBLIC_URL + "/assets/book/P_G8.png"} />
      <Page number={19} image={process.env.PUBLIC_URL + "/assets/book/P_G9.png"} />
      <Cover title="Back Cover" image={process.env.PUBLIC_URL + "/assets/book/coverback.png"} />
    </HTMLFlipBook >
  );
}

export default MyBook;

import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';
import { Magnifier } from 'solguruz-react-image-magnifier';
import { useTranslation } from 'react-i18next';

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="demoPage"
      ref={ref}
      style={props.number === 1 ? { backgroundColor: '#f9f9f9', width: '100%', height: '100%' } : {}}
    >
      {props.image && <Magnifier
        image={props.image}
        zoom={2}
        width="100%"
        magnifierWidth={150}
        magnifierHeight={150}
        borderWidth={2}
        borderColor="white"
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
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md')); // 'md' and above is considered as large screen

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" fontWeight={"bold"} align="center" sx={{ mt: 6, mb: 8 }}>
        {t('book')}
      </Typography>
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
        <Page number={1} image={process.env.PUBLIC_URL + "/assets/book/1.png"} />
        <Page number={2} image={process.env.PUBLIC_URL + "/assets/book/2.png"} />
        <Page number={3} image={process.env.PUBLIC_URL + "/assets/book/3.png"} />
        <Page number={4} image={process.env.PUBLIC_URL + "/assets/book/4.png"} />
        <Page number={5} image={process.env.PUBLIC_URL + "/assets/book/5.png"} />
        <Page number={6} image={process.env.PUBLIC_URL + "/assets/book/6.png"} />
        <Page number={7} image={process.env.PUBLIC_URL + "/assets/book/7.png"} />
        <Page number={8} image={process.env.PUBLIC_URL + "/assets/book/8.png"} />
        <Page number={9} image={process.env.PUBLIC_URL + "/assets/book/9.png"} />
        <Page number={10} image={process.env.PUBLIC_URL + "/assets/book/10.png"} />
        <Page number={11} image={process.env.PUBLIC_URL + "/assets/book/11.png"} />
        <Page number={12} image={process.env.PUBLIC_URL + "/assets/book/12.png"} />
        <Page number={13} image={process.env.PUBLIC_URL + "/assets/book/13.png"} />
        <Page number={14} image={process.env.PUBLIC_URL + "/assets/book/14.png"} />
        <Page number={15} image={process.env.PUBLIC_URL + "/assets/book/15.png"} />
        <Page number={16} image={process.env.PUBLIC_URL + "/assets/book/16.png"} />
        <Page number={17} image={process.env.PUBLIC_URL + "/assets/book/17.png"} />
        <Page number={18} image={process.env.PUBLIC_URL + "/assets/book/18.png"} />
        <Page number={19} image={process.env.PUBLIC_URL + "/assets/book/19.png"} />
        <Page number={20} image={process.env.PUBLIC_URL + "/assets/book/white.png"} />
        <Cover title="Back Cover" image={process.env.PUBLIC_URL + "/assets/book/back.png"} />
      </HTMLFlipBook >
    </div>
  );
}

export default MyBook;

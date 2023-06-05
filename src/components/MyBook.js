import React, { useState, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import coverImage from '../assets/images/cover.png';
import backCoverImage from '../assets/images/coverback.png';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

const Cover = React.forwardRef((props, ref) => {
  return (
    <div
      className="cover"
      ref={ref}
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
});

function MyBook(props) {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.only('sm'));

  const [singlePage, setSinglePage] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 500, height: 700 });

  useEffect(() => {
    if (matchesXS) {
      setSinglePage(true);
      setDimensions({ width: 300, height: 400 });
    } else if (matchesSM) {
      setSinglePage(true);
      setDimensions({ width: 400, height: 500 });
    } else {
      setSinglePage(false);
      setDimensions({ width: 500, height: 700 });
    }
  }, [matchesXS, matchesSM]);

  return (
    <HTMLFlipBook
      width={dimensions.width}
      height={dimensions.height}
      size="fixed"
      maxShadowOpacity={0.5}
      showCover={singlePage ? false : true}
      usePortrait={singlePage}
      mobileScrollSupport={true}
      className="demo-book">
      <Cover title="My Awesome Book" image={coverImage}></Cover>
      <Page number="1">Page text</Page>
      <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
      <Cover title="My Awesome Book" image={backCoverImage}></Cover>
    </HTMLFlipBook >
  );
}

export default MyBook;

import { animateScroll as scroll } from "react-scroll";

const scrollTo = (id) => {
  scroll.scrollTo(id, {
    duration: 500,
    delay: 100,
    smooth: true,
    offset: -100,
  });
};

export default scrollTo;

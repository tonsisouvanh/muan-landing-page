// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// const LoadingDots = ({ interval = 500 }) => {
//   const [dotCount, setDotCount] = useState(0); // Tracks the number of dots (0, 1, 2, or 3)

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Increment dotCount or reset to 0 after 3 dots
//       setDotCount((prevCount) => (prevCount + 1) % 4); // Loop through 0, 1, 2, 3
//     }, interval);

//     return () => clearInterval(intervalId); // Clean up interval on unmount
//   }, [interval]);

//   // Render the dots based on the current count
//   return <span className="">{".".repeat(dotCount)}</span>;
// };
// LoadingDots.propTypes = {
//   interval: PropTypes.number,
// };

// export default LoadingDots;

import PropTypes from "prop-types";

const LoadingDots = () => {
  return <span className="loading-dots"></span>;
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
};
export default LoadingDots;

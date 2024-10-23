import PropTypes from "prop-types";

const LoadingDots = () => {
  return <span className="loading-dots"></span>;
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
};
export default LoadingDots;

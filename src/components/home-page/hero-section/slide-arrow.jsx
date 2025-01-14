// components/ArrowButton.js
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

const SlideArrow = ({ direction, disabled, onClick }) => {
  if (disabled) return null;

  return (
    <div
      className={`absolute ${direction === "left" ? "left-4" : "right-4"} top-1/2 transform -translate-y-1/2 z-50 cursor-pointer`}
      onClick={onClick}
    >
      {direction === "left" ? (
        <ArrowBackIosOutlinedIcon fontSize="large" className="text-white hover:scale-110 transition-transform duration-200 hover:text-primary" />
      ) : (
        <ArrowForwardIosOutlinedIcon fontSize="large" className="text-white hover:scale-110 transition-transform duration-200 hover:text-primary" />
      )}
    </div>
  );
};

export default SlideArrow;

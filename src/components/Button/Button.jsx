const Button = ({ background, animate, onClick, size, children, icon }) => {
  const bg = background ? `bg-${background}` : "bg-main";
  const btnAnimate = animate ? `btn-animate` : "";
  const btnSize = size ? `btn-${size}` : "";
  const btnOnClick = onClick ? onClick : null;

  return (
    <button className={`btn ${bg} ${btnAnimate} ${btnSize}`} onClick={btnOnClick}>
      <span className="btn__text ">{children}</span>
      {icon ? <span className="btn__icon">{icon}</span> : null}
    </button>
  );
};

export default Button;

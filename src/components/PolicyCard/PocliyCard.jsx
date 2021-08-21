
const PocliyCard = ({ ...props }) => {
  const { icon, title, text } = props;
  return (
    <div className="policy-card">
      <div className="policy-card__icon">{icon}</div>
      <div className="policy-card__content">
        <div className="policy-card__content__title">
          <p>{title}</p>
        </div>
        <div className="policy-card__content__text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PocliyCard;

import ContentLoader from "react-content-loader";

const Placeholder = (props) => {
  return (
    <ContentLoader className='placeholder'
    speed={.5}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="432" cy="451" r="15" /> 
    <rect x="8" y="276" rx="2" ry="2" width="250" height="6" /> 
    <rect x="8" y="7" rx="2" ry="2" width="350" height="250" /> 
    <rect x="8" y="296" rx="2" ry="2" width="250" height="6" /> 
    <rect x="8" y="350" rx="2" ry="2" width="230" height="45" /> 
    <rect x="8" y="315" rx="2" ry="2" width="230" height="6" />
  </ContentLoader>
  );
};

export default Placeholder;

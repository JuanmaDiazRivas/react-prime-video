interface Props {
  title?: string;
  imagesUrl?: string[];
}

const ImageResponsive: React.FC<Props> = (props) => {
  const imagesUrl = props.imagesUrl ? props.imagesUrl : [];
  return (
    <img
      alt={props.title}
      src={imagesUrl[0]}
      srcSet={`${imagesUrl[0]} 320w, ${imagesUrl[0]} 768w, ${imagesUrl[0]} 1280w, ${imagesUrl[1]} 3200w`}
    />
  );
};

export default ImageResponsive;

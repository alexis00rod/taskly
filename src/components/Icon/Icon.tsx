interface IconProps {
  type?: string;
  name: string;
}

const Icon: React.FC<IconProps> = ({ type, name }) => {
  return <i className={`icon fa-${type ? type : "solid"} fa-${name}`}></i>;
};

export default Icon;

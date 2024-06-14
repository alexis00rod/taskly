interface LoaderProps {
  size?: string;
  color?: string;
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ size, color, fullScreen = false }) => {
  return (
    <div
      className={`loader ${size ? `loader-${size}` : "loader-small"} ${
        color ? `loader-${color}` : "loader-primary"
      } ${fullScreen ? "h-screen" : "h-full"}`}
    >
      <div className="loader-spinner">
        <div
          className="text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </div>
    </div>
  );
};

export default Loader;

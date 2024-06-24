import { ReactNode, useRef, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import createEffect from "./buttonEffect";
import { Loader } from "@components";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: string;
  color?: string;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  margin?: string;
  loader?: boolean;
  disabled?: boolean;
  justify?: string;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variant,
  color,
  href,
  onClick,
  margin,
  fullWidth,
  loader,
  disabled,
  justify,
  title,
}) => {
  const [ripples, setRipples] = useState<
    { x: number; y: number; size: number }[]
  >([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const buttonStyle = () =>
    `btn btn-${justify ? justify : "center"} ${
      variant ? `btn-${variant}` : "btn-contained"
    } ${color ? `btn-${color}` : "btn-primary"} ${margin ? margin : ""} ${
      fullWidth ? "w-full" : ""
    }`;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    createEffect(event, buttonRef, setRipples);

    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <Link to={href} title={title} className={buttonStyle()}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type ? type : "button"}
      ref={buttonRef}
      title={title}
      onClick={handleClick}
      className={buttonStyle()}
      disabled={disabled}
    >
      {loader ? (
        <Loader color="white" />
      ) : (
        <>
          {variant !== "link" && (
            <div className="ripple-container">
              {ripples.map((ripple, index) => (
                <span
                  key={index}
                  className="ripple"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: ripple.size,
                    height: ripple.size,
                  }}
                />
              ))}
            </div>
          )}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;

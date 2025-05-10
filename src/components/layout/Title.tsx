import { Link } from "react-router-dom";

interface TitleProps {
  title: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

const Title: React.FC<TitleProps> = ({
  title,
  showButton = false,
  buttonText = "Добавить",
  buttonLink = "#",
  onButtonClick,
}) => {
  return (
    <div className="mt-2 flex justify-between items-center">
      <div className="text-2xl font-semibold text-white">{title}</div>
      <div className="px-4">
        {showButton && (
            onButtonClick ? (
              <button
                onClick={onButtonClick}
                className="flex rounded-lg  bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:brightness-75"
              >
                <span className="text-white text-base px-4 mr-4 py-2">{buttonText}</span>
              </button>
            ) : (
              <Link
                to={buttonLink}
                className="flex rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:brightness-75 hover:no-underline"
              >
                <span className="text-white text-base px-4 py-2">{buttonText}</span>
              </Link>
            )
          )}
      </div>
    </div>
  );
};

export default Title;

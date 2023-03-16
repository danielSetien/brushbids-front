interface ButtonProps {
  icon: JSX.Element;
  disabled: boolean;
  ariaLabel: string;
  className: string;
  action: () => void;
}

const Button = ({
  icon,
  disabled,
  ariaLabel,
  className,
  action,
}: ButtonProps): JSX.Element => {
  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      className={className}
      onClick={() => action()}
    >
      {icon}
    </button>
  );
};

export default Button;

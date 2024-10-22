const Button = ({
  onClick,
  className = "",
  title = "button",
  children,
}: {
  onClick: () => void;
  className?: string;
  title?: string;
  children: React.ReactNode;
}) => (
  <button type="button" title={title} onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;

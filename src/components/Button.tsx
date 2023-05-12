interface Props {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}
const Button = ({ children, color, onClick }: Props) => {
  return (
    <>
      <button className={" alert alert-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;

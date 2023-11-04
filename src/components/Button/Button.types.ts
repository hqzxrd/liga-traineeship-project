export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
  buttonClassName?: string;
}

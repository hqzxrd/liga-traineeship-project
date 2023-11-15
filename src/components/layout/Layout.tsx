import { FC } from 'react';
import { ILayoutProps } from './Layout.types';
import 'assets/styles/global.css';

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

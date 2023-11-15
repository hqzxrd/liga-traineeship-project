import { createRoot } from 'react-dom/client';
import RootProvider from 'providers/RootProvider';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(<RootProvider />);

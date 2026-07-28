import type { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client'
import './App.css';
import './index.css'
import PlayerBoard from './components/PlayerBoard';

function renderComponent(ComponentFunction: FunctionComponent<any>, props: any) {
    const root = createRoot(document.getElementById('sandbox')!);
    root.render(
        <ComponentFunction {...props} />
    );
}

renderComponent(PlayerBoard, mockBoardProps);

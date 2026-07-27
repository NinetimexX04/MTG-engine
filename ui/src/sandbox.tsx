import type { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client'
import './App.css';
import './index.css'
import PlayerBoard from './components/PlayerBoard';
import type { BoardProps } from './components/type';

const mockBoardProps: BoardProps = {
    battlefieldCards: [
        { url: '/mtg-back.jpg', name: 'battlefield card 1' },
        { url: '/mtg-back.jpg', name: 'battlefield card 2' },
    ],
    handCards: [
        { url: '/mtg-back.jpg', name: 'hand card 1' },
        { url: '/mtg-back.jpg', name: 'hand card 2' },
        { url: '/mtg-back.jpg', name: 'hand card 3' },
        { url: '/mtg-back.jpg', name: 'hand card 2' },
        { url: '/mtg-back.jpg', name: 'hand card 3' },
    ],
    libraryCards: [
        { url: '/mtg-back.jpg', name: 'library card 1' },
        { url: '/mtg-back.jpg', name: 'library card 2' },
    ],
    graveyardCards: [
        { url: '/mtg-back.jpg', name: 'graveyard card 1' },
    ],
    commanderCard: { url: '/mtg-back.jpg', name: 'commander card' },
};

function renderComponent(ComponentFunction: FunctionComponent<any>, props: any) {
    const root = createRoot(document.getElementById('sandbox')!);
    root.render(
        <ComponentFunction {...props} />
    );
}

renderComponent(PlayerBoard, mockBoardProps);

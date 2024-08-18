import { useState } from 'react';
import { AppLayout } from './appLayout';

export const App = () => {
	const fieldArray = ['', '', '', '', '', '', '', '', ''];

	const [currentPlayer, setCurrentPlayer] = useState('X'); // 'X' || '0'
	const [isGameEnded, setisGameEnded] = useState(false);
	const [isDraw, setisDraw] = useState(false);
	const [field, setField] = useState(fieldArray);

	const props = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setisGameEnded,
		isDraw,
		setisDraw,
		field,
		setField,
		fieldArray,
	};

	return <AppLayout {...props} />;
};

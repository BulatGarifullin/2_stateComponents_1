import { useState } from 'react';
import { AppLayout } from './appLayout';
import { PropTypes } from 'prop-types';

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

App.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setisGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setisDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	fieldArray: PropTypes.array,
};

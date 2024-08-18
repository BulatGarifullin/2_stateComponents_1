import { FieldLayout } from './fieldLayout';
import PropTypes from 'prop-types';

export const FieldContainer = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setisGameEnded,
	isDraw,
	setisDraw,
	field,
	setField,
	fieldArray,
}) => {
	const WIN_PATTERNS = [
		[0, 1, 2], // Варианты побед по горизонтали
		[3, 4, 5], // Варианты побед по горизонтали
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6], // Варианты побед по вертикали
		[1, 4, 7], // Варианты побед по вертикали
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8], // Варианты побед по диагонали
		[2, 4, 6], // Варианты побед по диагонали
	];

	const checkWinner = (newField) => {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (
				newField[a] &&
				newField[a] === newField[b] &&
				newField[a] === newField[c]
			) {
				return newField[a];
			}
		}
		return null;
	};

	const playersMove = (index) => {
		if (isGameEnded || field[index]) {
			return;
		} else {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);

			const winner = checkWinner(newField);
			if (winner) {
				setisGameEnded(true);
				return;
			}

			if (!newField.includes('')) {
				setisDraw(true);
				setisGameEnded(true);
				return;
			}

			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const startOver = () => {
		setCurrentPlayer('X');
		setisDraw(false);
		setisGameEnded(false);
		setField(fieldArray);
	};

	return (
		<FieldLayout
			field={field}
			playersMove={playersMove}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			startOver={startOver}
		/>
	);
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	playersMove: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	startOver: PropTypes.func,
};

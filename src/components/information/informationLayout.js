import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<>
			<div className={styles.information}>
				{isDraw
					? 'Ничья'
					: isGameEnded
						? `Победил: ${currentPlayer}`
						: `Сейчас ходит: ${currentPlayer}`}
			</div>
		</>
	);
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

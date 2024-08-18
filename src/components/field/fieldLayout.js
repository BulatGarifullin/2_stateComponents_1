import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, playersMove, isDraw, isGameEnded, startOver }) => {
	return (
		<div className={styles.app}>
			{(isGameEnded || isDraw) && (
				<button onClick={startOver} className={styles.resetBtn}>
					Начать заново
				</button>
			)}
			<div className={styles.board}>
				{field.map((elem, index) => (
					<button
						key={index}
						className={styles.button}
						onClick={() => playersMove(index)}
					>
						{elem}
					</button>
				))}
			</div>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	playersMove: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	startOver: PropTypes.func,
};

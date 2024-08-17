import styles from './information.module.css';

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

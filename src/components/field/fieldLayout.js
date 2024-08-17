import styles from './field.module.css';

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

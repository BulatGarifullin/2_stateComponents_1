import styles from './app.module.css';
import { FieldContainer, InformationContainer } from './components';
import PropTypes from 'prop-types';

export const AppLayout = ({ ...props }) => {
	return (
		<>
			<h1 className={styles.h1}>Крестики-нолики</h1>
			<FieldContainer {...props} />
			<InformationContainer
				isDraw={props.isDraw}
				isGameEnded={props.isGameEnded}
				currentPlayer={props.currentPlayer}
			/>
		</>
	);
};

AppLayout.propTypes = {
	props: PropTypes.object,
};

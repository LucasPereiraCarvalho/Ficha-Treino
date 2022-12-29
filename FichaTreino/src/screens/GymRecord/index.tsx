import react from 'react';
import {Button, FlatList} from 'react-native';

import {Container, ContainerButtons} from './styles';
import Exercise from '../../components/Exercise';
import GymRecordData from '../../mocks/GymRecord.json';

const GymRecord = () => (
	<Container>
		<ContainerButtons>
			<Button title="Ficha 1" />
			<Button title="Ficha 2" />
		</ContainerButtons>
		<FlatList
			data={GymRecordData || []}
			renderItem={({item}) => <Exercise item={item} />}
		/>
	</Container>
);

export default GymRecord;

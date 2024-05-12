/* eslint-disable react/react-in-jsx-scope */
import {Button, Text, View} from 'native-base';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {setIncrement} from '../../features/reducers/increment';

function HomeScreen(): React.JSX.Element {
  const increment = useAppSelector(state => state.increment.increment);
  const dispatch = useAppDispatch();

  return (
    <View bg="brand.900" flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={30}>{increment}</Text>
      <Button
        bg="brand.600"
        onPress={() => dispatch(setIncrement(increment + 1))}>
        Increment
      </Button>
    </View>
  );
}

export default HomeScreen;

import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    inputContainer: {
        // width: WINDOW_WIDTH / 10 * 9,
        width: '100%',
        height: 52,
        backgroundColor: '#435464',
        marginBottom: 10,
    },
    subInputContainer: {
        zIndex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    inputIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
        alignSelf: 'center',
        marginBottom: 5,
        marginRight: 10
    }
})

export default styles;
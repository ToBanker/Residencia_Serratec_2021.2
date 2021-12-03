import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    titulo: { 
        fontSize: 40, 
        fontWeight: '600', 
        color: 'blue',
        marginHorizontal: 35,
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: 'red'
    },
});

export default styles;
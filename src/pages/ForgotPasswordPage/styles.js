import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#034f84',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '400px',
        height: '400px',
        marginBottom: '0px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: 'grey',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '1px black',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    btn: {
        backgroundColor: 'black',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: '#80ced6'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    }
});

export default styles;
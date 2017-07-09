import { StyleSheet } from "react-native";

const styles = {
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    map:{
        justifyContent: 'flex-end',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject
    }
}
export default styles;
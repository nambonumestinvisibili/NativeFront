import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import colors from "../../constants/colors";

const Error = () => {
  return (
    <View style={{paddingLeft: 5}}>
      <AntDesign
        name="exclamationcircle"
        color={colors.BASIC.ERROR} 
        size={15}
      />
    </View>
  )
}

export default Error
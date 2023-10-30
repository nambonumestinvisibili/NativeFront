import { Text, TouchableOpacity, View } from "react-native"
import colors from "../../constants/colors"
import { borderRadius } from "../../constants/style"
import CloseButton from "./CloseButton"

const Menu = ({ menuOptions, closeMenu }) => {

  return (
      <View style={{position: 'absolute', bottom: 50, left: 20, right: 20}}>
        <CloseButton onPress={closeMenu} right={-10} top={0} />
        <View style={{ 
          backgroundColor: colors.BASIC.PRIMARY,
          borderRadius: borderRadius.basic,
          }}>
           {menuOptions?.map((option, index) => (
            <MenuOption 
              text={option.text} 
              onPress={option.onPress} 
              isFirst={index === 0}
            />
           ))}
        </View>
      </View>
  )
}

const MenuOption = ({ text, onPress, isFirst }) => {
  return (
    <TouchableOpacity style={{ 
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 5,
      paddingRight: 5,
      }}
      onPress={onPress}
      >
      <Text style={{ 
        textAlign: 'center',
        color: colors.BASIC.WHITE 
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Menu
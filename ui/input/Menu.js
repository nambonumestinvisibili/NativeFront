import { Text, TouchableOpacity, View } from "react-native"
import colors from "../../constants/colors"
import { borderRadius } from "../../constants/style"
import CloseIcon from "../icons/CloseIcon"

const Menu = ({ menuOptions, closeMenu }) => {

  return (
      <View style={{position: 'absolute', bottom: 50, left: 20, right: 20}}>
        <View style={{position: 'absolute', zIndex: 30, right: 0, top: -10 }}>
          <CloseIcon onPress={closeMenu} />
        </View>
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
      // borderTopWidth: !isFirst && 1,
      // borderColor: !isFirst && colors.ACCENTS.WHITE,
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
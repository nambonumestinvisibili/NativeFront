import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import colors from "../constants/colors"
import { hideError, selectIsError } from "../store/reducers/appBehaviourSlice"
import CloseButton from "../ui/input/CloseButton"

const ErrorScreen = () => {

  const isError = useSelector(selectIsError)

  const dispatch = useDispatch()

  const closeScreen = () => {
    dispatch(hideError())
  }

  return (
    <View style={{ 
      zIndex: 9999998,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      position: 'absolute', 
      width: '100%', 
      height: '100%',
      display: isError ? 'flex' : 'none', 
      justifyContent: 'center',
      alignItems: 'center' 
      }}>
        <View style={{ 
          borderColor: colors.BASIC.ERROR,
          borderWidth: 2,
          alignItems: 'center',
          display: 'flex',
          borderRadius: '15',
          width: '60%',
          height: '10%' 
          }}>
            <CloseButton right={-10} top={-10} onPress={closeScreen} />
            <View style={{
              top: 2,
              borderRadius: 15,   
              width: '98%',
              color: colors.BASIC.ERROR,
              padding: 5,           
              backgroundColor: colors.BASIC.WHITE
            }}>
              <Text style={{ color: colors.BASIC.ERROR }}>Oops! We are sorry</Text>
            </View>
            <View style={{
              padding: 5,           

            }}>
              <Text>Seems like we're having an issue. Please try again later.</Text>
            </View>
        </View>
    </View>
  )
}

export default ErrorScreen
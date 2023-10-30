import { ActivityIndicator, View } from "react-native"
import { useSelector } from "react-redux"
import { selectIsLoading } from "../store/reducers/appBehaviourSlice"

const LoadingScreen = () => {

  const isLoading = useSelector(selectIsLoading)
  return (
    <View style={{ 
      zIndex: 9999999,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      position: 'absolute', 
      width: '100%', 
      height: '100%',
      display: isLoading ? 'flex' : 'none', 
      justifyContent: 'center',
      alignItems: 'center' 
      }}>
        <ActivityIndicator size={'large'} />
    </View>
  )
}

export default LoadingScreen
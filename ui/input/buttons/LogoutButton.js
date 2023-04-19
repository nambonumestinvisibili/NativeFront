import { useDispatch } from "react-redux"
import { removeJWT } from "../../../store/reducers/authSlice"
import Button from "../Button"

const LogoutButton = () => {
  
  const dispatch = useDispatch()

  return (
    <Button text={"log out"} onPress={
        () => dispatch(removeJWT())
      }
    />
  )
}

export default LogoutButton
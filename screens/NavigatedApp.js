import { useSelector } from "react-redux";
import { selectJWT } from "../store/reducers/authSlice";
import RegisteredStack from "./AppStack";
import UnregisteredStack from "./not-registered-screens/UnregisteredStack";

const NavigatedApp = () => {

  const token = useSelector(selectJWT)

  return (
    <>
      { token
        ? <RegisteredStack />
        : <UnregisteredStack /> 
      }
    </>
  )
}

export default NavigatedApp
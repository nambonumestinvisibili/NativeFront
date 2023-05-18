import { FormProvider, useForm } from "react-hook-form"
import SubmitButton from "../input/SubmitButton"

const Form = ({ children, onSubmit, submitButtonText }) => {
  const {...methods} = useForm()

  const onSubmitWrapper = data => {
    //collect all the fields?
    // console.log(data)
    // onSubmit()
  }

  const onError = () => {
    
  }
  
  return (
    <FormProvider {...methods}>
      {children}
      <SubmitButton 
        onPress={methods.handleSubmit(onSubmitWrapper, onError)} />
    </FormProvider>
  )
}

export default Form
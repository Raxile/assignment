import React from 'react'
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../shared/util/validators';

const FormData = (props) => {

    const [formState,inputHandler]=  useForm(
        {
          name:{
            value:'',
            isValid:false
          },
          Email:{
            value:'',
            isValid:false
          },
          address:{
            value:'',
            isValid:false
          },
          country:{
            value:'',
            isValid:false
          },
          dob:{
            value:'',
            isValid:false
          }
        },
        false
       );

    const infoSubmitHandler = async event => {
        event.preventDefault();  
        console.log(formState.inputs)
        try {
            const response = await fetch(`http://localhost:5000/api/addinformation`, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'     
                },
                body: JSON.stringify({ name:formState.inputs.name.value,dob:formState.inputs.dob.value,address:formState.inputs.address.value,email:formState.inputs.Email.value , country:formState.inputs.country.value })
              });

              const info = await response.json();
              console.log(info);
              props.setInitialData(prevInfo=>prevInfo.concat(info.Information));

        } catch (err) {
            console.log(err);
        }     
        };
     
  return (
    <form onSubmit={infoSubmitHandler}>
     <Input
      id="name"
      element="input"
      type="text"
      label="Name"
      validators={[VALIDATOR_REQUIRE()]}
      errorText="please enter a valid Name"
      onInput={inputHandler}
      /> 
     <Input
      id="Email"
      element="input"
      type="email"
      label="Email"
      validators={[VALIDATOR_EMAIL()]}
      errorText="please enter a valid E-mail and E-mail always be unique"
      onInput={inputHandler}
      />
     <p> <span className='text-yellow-700'>warning</span> E-mail always be unique</p>
      <Input
      id="dob"
      element="input"
      type="date"
      label="DoB"
      validators={[VALIDATOR_REQUIRE()]}
      errorText="please enter a valid address"
      onInput={inputHandler}
      />
     <Input
      id="address"
      element="input"
      label="Address"
      validators={[VALIDATOR_REQUIRE()]}
      errorText="please enter a valid address"
      onInput={inputHandler}
      />
        <Input
      id="country"
      element="input"
      label="Country"
      validators={[VALIDATOR_REQUIRE()]}
      errorText="please enter a valid Country"
      onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD Information
        </Button> 
    </form>
  )
}

export default FormData

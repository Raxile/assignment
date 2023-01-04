import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

const UpdateInfo = () => {
    const infoId = useParams().infoId;
    const [loadedInfo,setLoadedInfo] = useState();
    const navigate = useNavigate();

    const [formState,inputHandler,setFormData]=  useForm(
        {
          name:{
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

       useEffect(()=>{
        const fetchInfo = async ()=>{
         try {
           const response = await fetch(`http://localhost:5000/api/${infoId}`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'     
              },
           })
           const responseData = await response.json();
           setLoadedInfo(responseData);
           console.log(loadedInfo)
        
           setFormData({
             name:{
               value:responseData.singleinformation.name,
               isValid:true
             },
             dob:{
               value:responseData.singleinformation.dob,
               isValid:true
             },
             address:{
                value:responseData.singleinformation.address,
                isValid:true
             },
             country:{
                value:responseData.singleinformation.country,
                isValid:true
             }
           })
           
         } catch (error) { }
        }
        fetchInfo();
        },[fetch,infoId,setFormData]);

        const infoSubmitHandler =async (event) =>{
            event.preventDefault();
            try {
                const response = await fetch(`http://localhost:5000/api/updateinformation/${infoId}`, {
                    method: 'PATCH', 
                    headers: {
                      'Content-Type': 'application/json'     
                    },
                    body: JSON.stringify({ name:formState.inputs.name.value,dob:formState.inputs.dob.value,address:formState.inputs.address.value,email:formState.inputs.Email.value , country:formState.inputs.country.value })
                  });
                  navigate('/');
            } catch (err) {console.log(err)
            
            }
            
          }
       
        
       
  return (
    <div className='mt-[10vh]'>
      
      <form className='place-form' onSubmit={infoSubmitHandler}>

      <Input
      id="name"
      element="input"
      type="text"
      label="Name"
      validators={[VALIDATOR_REQUIRE()]}
      errorText="please enter a valid Name"
      onInput={inputHandler}
      initialValue={formState.inputs.name.value}
      initialValid={true}
      /> 
    
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
        update Information
        </Button> 
      </form>
         
    </div>
  )
}

export default UpdateInfo

import React, { useState } from 'react'
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Modal from '../../shared/components/UIElement/Modal';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import TableData from './TableData'

const TableHeader = () => {
  const initialData = [
    { 
        id:"1",
        name:"piyush",
        address:"HAL colony",
        dob:"04-01-2023",
        email:"test@test.com",
        country:"india"

    },
    { 
        id:"2",
        name:"Sidhu",
        address:"HAL colony",
        dob:"04-01-2023",
        email:"test@test.com",
        country:"india"

    },  {
        id:"3",
        name:"piyush",
        address:"HAL colony",
        dob:"04-01-2023",
        email:"test@test.com",
        country:"india"

    }, 
    
];
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
 )

const [showConfirmModal,setShowConfirmModal]=useState(false);

const showAddInfoHandler = ()=>{
  setShowConfirmModal(true);
};

const cancelAddInfoHandler = ()=>{
  setShowConfirmModal(false);
};

const placeSubmitHandler = async event => {
  event.preventDefault();  
  };

  return (
  <React.Fragment>
  
           <form onSubmit={placeSubmitHandler}>
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
      errorText="please enter a valid E-mail"
      onInput={inputHandler}
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
        ADD PLACE
        </Button> 
    </form>
  
        
    <div>
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <div className='flex my-4'>


                <div className="flex space-x-2 justify-center">
                  <div>
                    <button type="button" className="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                        className="w-3 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                 <div className='mx-2'>
                  
                <Button inverse  onClick={showAddInfoHandler}>Add Information</Button>
                 </div>
              
            <div className="flex justify-end">
  <div className="mb-3 xl:w-96">
    <div className="input-group relative flex  items-stretch w-full mb-4">
      <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
      <button className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
    </div>
  </div>
</div>
            </div>

        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Name
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                email
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Date of Birth
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Address
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Contry
              </th> 
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Button
              </th>
            </tr>
          </thead >
          <tbody>
           <TableData initialData={initialData} />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
    </React.Fragment>
  )
}

export default TableHeader

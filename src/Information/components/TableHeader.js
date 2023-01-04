import React, { useEffect, useState } from 'react'

import TableData from './TableData'
import FormData from './FormData';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';

const TableHeader = () => {
  let [initialData,setInitialData] =useState([]);


    const [isLoading,setIsLoading] = useState(false); 
  
      useEffect( ()=>{
  
        const fetchInformation = async ()=>{
            try {
              const response = await fetch(`http://localhost:5000/api/`,{
                method:'GET',
                headers:{
                  'Content-Type':'application/json'
              }
              });
               const responseData =await response.json();
               if(!response.ok){
                throw new Error(responseData.message)
             }
             setIsLoading(false);
              setInitialData( responseData.allinformation);
              console.log(responseData.allinformation);
            } catch (err) {
              setIsLoading(false);
           console.log(err)
            }
          }
          fetchInformation();
        },[]);

        const placeDeleteHandler =  (deletedInfoId)=>{
          setInitialData(prevInfo=>prevInfo.filter(p => p._id !== deletedInfoId ))
         }
        

  return (
  <React.Fragment>
          <FormData setInitialData={setInitialData} />
          {isLoading && <div className='center'><LoadingSpinner/></div>}
    <div>
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        
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
                E-mail
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
           <TableData initialData={initialData}  setInitialData={setInitialData} onDelete={placeDeleteHandler}/>
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

import React, { useState } from 'react'
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElement/Modal';

const TableData = (props) => {
  const [showConfirmModal,setShowConfirmModal]=useState(false);
      

    const showDeleteWarningHandler = ()=>{
      setShowConfirmModal(true);
    };
  

    const cancelDeleteHandler = ()=>{
      setShowConfirmModal(false);
    };
  
    const confirmDeleteHandler =async ()=>{
      setShowConfirmModal(false);
    }
  return (
    <React.Fragment>
       <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
         header="Are You Sure?"
         footerclassName="place-item__modal-actions" 
         footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
          </React.Fragment>
        }> 
           <p>Do you want to proceed and  delete this place ? Please note this it can't be undone thereafter </p>
        </Modal>
      {props.initialData.map((info,index)=>(
        <tr className="bg-white border-b" key={info.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >{index+1}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {info.id}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               {info.name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {info.email}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {info.dob}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {info.address}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {info.country}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex">
              <i className="fa fa-pencil-square-o hover:text-cyan-400 text-xl px-2"/>
              <i className="fa fa-times hover:text-cyan-400 text-xl px-2" onClick={showDeleteWarningHandler} />
              </td>
            </tr>

      ))}
       
            
    </React.Fragment>
  )
}

export default TableData

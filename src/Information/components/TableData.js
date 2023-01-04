import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElement/Modal';

const TableData = (props) => {
  const [showConfirmModal,setShowConfirmModal]=useState(false);
      const [deletedId,setDeletedId] = useState();
      const {setInitialData} = props
      const navigate = useNavigate();

    const showDeleteWarningHandler = async (id)=>{
      setDeletedId(id);
      setShowConfirmModal(true);
      console.log(id)
      console.log(deletedId);
    };
  

    const cancelDeleteHandler = ()=>{
      setShowConfirmModal(false);
    };
  
    const confirmDeleteHandler =async (id)=>{
     
      console.log(deletedId)
      try {
         const response = await fetch(`http://localhost:5000/api/deleteinformation/${deletedId}`,{
          method:'DELETE',
        });
       props.onDelete(deletedId)
        
      } catch (err) {
        console.log(err);
      } 
      setShowConfirmModal(false);
    }

    const updateHandler = (id)=>{
      navigate(`/updateinfo/${id}`)
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
        <tr className="bg-white border-b" key={info._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >{index+1}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {info._id}
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
              <i className="fa fa-pencil-square-o hover:text-cyan-400 text-xl px-2" onClick={()=>updateHandler(info._id)}/>
              <i className="fa fa-times hover:text-cyan-400 text-xl px-2" onClick={()=>showDeleteWarningHandler(info._id)} />
              </td>
            </tr>

      ))}
       
            
    </React.Fragment>
  )
}

export default TableData

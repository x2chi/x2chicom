import React from "react";


// @ts-ignore
function Modal ({datas:datas, setModalToggle:setModalToggle, modalToggle:modalToggle} ) {

  return (
    <>
      <div className='darkBG' onClick={() => setModalToggle(null)} />
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h5 className='heading'>
              [{datas[modalToggle].idx}] {datas[modalToggle].product}
            </h5>
          </div>
          <button className='closeBtn' onClick={() => setModalToggle(null)}>X</button>
          <div className='modalContent'>
            <div>{datas[modalToggle].price}</div>
            <div><img src={datas[modalToggle].image} alt={datas[modalToggle].product} /></div>
            <div>{datas[modalToggle].comment}</div>
          </div>
          <div className='modalActions'>
            <div className='actionsContainer'>
              <button className='modalBuyBtn' onClick={() => setModalToggle(null)}>BUY NOW</button>
              <button className='cancelBtn' onClick={() => setModalToggle(null)}>CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
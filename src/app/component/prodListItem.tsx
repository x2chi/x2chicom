import React from 'react';

// @ts-ignore
function prodListItem({items:{idx, product, comment, price, image}, setModalToggle:setModalToggle, index:index }) {

    comment = comment.replaceAll("\n", "<br />");

  return (
    <div className='prodListItemBox' id={'item'+idx}>
        <div className='itemInfoBox'>
            <div className='itemProd'>{product}</div>
            <div className='itemComm' dangerouslySetInnerHTML={{__html:comment}}></div>
            <div className='itemPrice'>{price}</div>
            <div className='itemBuynow' onClick={() => setModalToggle(index)}>BUY NOW</div>
        </div>
        <div className='itemImage'><img src={image} alt={product} /></div>
    </div>
  );
}

export default prodListItem;
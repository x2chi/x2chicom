import React, {useEffect, useState} from 'react';
import ProdList from "./prodListItem";
import Modal from "./Modal";

function Contents() {

    const [itemsArr, setitemsArr] = useState([]);

    useEffect(() => {
    	fetch('http://localhost:3000/datas.json', {
     		method: 'GET',
    	})
      	.then(res => res.json())
      	.then(data => {
        	setitemsArr(data);
      	});
	}, []);

    const [modalToggle, setModalToggle] = useState(null);

  return (
    <div id='Contents'>
        <div className='topProdBox'>
            <div className='topProdInfo'>
                <div className='topProdBoxTxt1'>Portable Wireless Speaker</div>
                <div className='topProdBoxTxt2'>Beats Pill+</div>
                <div className='topProdBoxTxt3'>Available Colors</div>
                <div className='topProdBoxTxt4'>Find your Color</div>
                <div><img className='topProdBoxcolors' src="/images/topProdColor.png" alt=""/></div>
                <div className='topProdBoxPrice'>$299.95</div>
                <div className='topProdBoxBuyBtn'>BUY NOW</div>
                <div className='topProdBoxTxt5'>$60 Apple Music gift card with purchase of select Beats products.*</div>
            </div>
            <img src="/images/beatspill.png" alt="Portable Wireless Speaker Beats Pill+" className='topProdImg' />
        </div>
        <div className='prodListBox'>
            <div className='prodList'>
                {itemsArr.map((item, index)=> {
                    // @ts-ignore
                    return <ProdList items={item} setModalToggle={setModalToggle} index={index} />;
                })}
            </div>
        </div>
        <div className='contentsBottom'>
            <div className='contentsBottomEmailBox'>
                <div className='contentsBottomEmailTxt1'>Hear it first</div>
                <div className='contentsBottomEmailTxt2'>Get updates on product drops, collaborations and all things Beats.</div>
                <div><input type="text" placeholder='Enter your email' name='email'  className='contentsBottomEmailInput' /></div>
                <div className='contentsBottomEmailBtn'>Sign up</div>
            </div>
        </div>
        {modalToggle!=null && <Modal datas={itemsArr} setModalToggle={setModalToggle} modalToggle={modalToggle} />}
    </div>
  );
}

export default Contents;
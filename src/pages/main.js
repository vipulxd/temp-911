import './index.css'
import {ProductData} from "../Mock/MockData";
import {CartFooter} from "../component/CartFooter";
import {useState} from "react";


export function Main() {
    const [cartItem, setcartItem] = useState([]);
    function  handleAddition(item){
     setcartItem([...cartItem,item])
    }

    console.log(cartItem)
    return (
        <>
            <div className={'container-wrapper'}>
                {ProductData && ProductData.map((item) => (
                    <div className={'container'} key={item.id}>
                        <div className={'shell image-container'}>
                            <img src={'/index.jpg'} alt={'prduct-image'}/>
                        </div>
                        <div className={'shell data-container'}>
                            <div className={' cnt-item title'}>{item.name}</div>
                            <div className={' cnt-item description'}>{item.name}</div>
                            <div className={' cnt-item price'}>
                                <span className={'finalPrice'}>$1</span>
                                <s> $ {item.price}</s></div>
                        </div>
                        <div className={'shell buy-container'}>
                            <div className={'buy-btn cpt'}>
                                <button onClick={() => {
                                    handleAddition(item)
                                }}>ADD
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CartFooter cartItems={cartItem}/>
        </>
    )

}
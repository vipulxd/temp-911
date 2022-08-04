import {useLocation, useNavigate} from "react-router";
import React from 'react'
import './index.css'
import {useState} from "react";

export function Cart() {
    const [data, setData] = useState([]);
    const [currentTotal,setCurrentTotal] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    React.useEffect(() => {
        setData(location.state)
        let total = 0
        location.state.map((item)=> {
         total += item.price;
        })
        setCurrentTotal(total)
    }, [])
 function handleClick(){
        navigate('/main')
 }
    return (
        <>
            <div className={"cart-wrapper"}>
                <div className={'header'}>
                    <div onClick={()=>handleClick()}> {`<`} </div>
                    <div>Checkout</div>
                </div>
                <div style={{margin: '30px 0px'}}>
                    <div style={{fontSize: 'small'}}>Pickup</div>
                    <div>Bajaj Street Noida Sector 12 , Uttar pradesh</div>
                </div>
                <div>

                    <div style={{fontSize: 'small'}}>Cart Details</div>
                    <div style={{display: 'flex', justifyContent: 'space-between',padding:'20px'}}>
                        <div style={{fontWeight:'800'}}>Item</div>
                        <div style={{fontWeight:'800'}}>Price</div>
                    </div>

                        {data.map(item => (
                            <>
                            <div className={'custom-wra'} style={{display: 'flex', justifyContent: 'space-between',padding:'10px'}}>
                                <div style={{width:'300px'}}>{item.name}</div>
                                <div>{item.price}</div>
                            </div>
                            </>
                        ))}
                    <div style={{display: 'flex', justifyContent: 'space-between',padding:'20px'}}>
                        <div style={{fontWeight:'800'}}>Total</div>
                        <div style={{fontWeight:'800'}}>{currentTotal}</div>
                    </div>
                </div>

            </div>
            <div className={'cart-footer'}>
                <div className={'pay-wrapper'} onClick={()=> navigate('/checkout')}>
                    Pay  ${currentTotal} ->
                </div>
            </div>
        </>
    )

}
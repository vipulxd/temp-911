import './index.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

export function CartFooter({cartItems}) {
    const [currentPrice, setCurrentPrice] = useState(0);
    const [showPreview, setshowPreview] = useState(false);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const navigate  = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('logged') != null) {
            setisLoggedIn(true)
        }
        let total = 0;
        cartItems.map((item) => {
                total += item.price
            }
        )
        setCurrentPrice(total);
    }, [cartItems])

    function checkForAuth() {
        if (!isLoggedIn) {
            setshowPreview(false)
            setShowLogin(true)
        }
    }
    function handleClick(){
        navigate('/cart',{state:cartItems});
    }
    return (
        <>

            <div className={'footer-container'}>
                {showPreview &&
                    <CartPreview cartItem={cartItems} setShowPreview={setshowPreview} currentPrice={currentPrice}/>
                }
                {
                    showLogin && <LoginWindow setShowLogin={setShowLogin} handleClick={handleClick}/>
                }
                <div className={'ft-wrapper'}>
                    <div className={'item-info'}>

                        <div className={'itemsinfo'}>
                            <div className={'qty'}>{cartItems.length} item(s)</div>
                            <div className={'qty'}>Total Rs. {currentPrice}</div>
                        </div>
                        <div className={'arow cpt'} onClick={() => setshowPreview(!showPreview)}>
                            >
                        </div>
                    </div>
                    <div className={'login-cnt'}>
                        <div className={'text-login cpt'} onClick={() => checkForAuth()}>
                            {isLoggedIn ? 'Continue' : 'Login to checkout'}
                        </div>
                        <div className={'text-login'}>
                            ->
                        </div>
                    </div>

                </div>
            </div>
        </>

    )

}

function CartPreview({cartItem, setShowPreview, currentPrice}) {

    return (
        <div className={'c-p-wrapper'}>
            <div className={'head'}>
                <div style={{flex: 2}}>Cart Details</div>
                <div className={'cpt'} onClick={() => {
                    setShowPreview(false)
                }}>X
                </div>
            </div>
            {
                cartItem.length > 0 ? <>
                        <div className={'wrapper'}>
                            <div className={'listheader'}>
                                <div>Items</div>
                                <div>Qty</div>
                                <div>Amount</div>

                            </div>

                            {
                                cartItem && cartItem.map(item => (
                                    <>
                                        <div style={{borderBottom: '0.5px solid rgba(128, 128, 128, 0.37)'}}
                                             className={'listheader'}>
                                            <div>{item.name}</div>
                                            <div>1</div>
                                            <div>{item.price}</div>
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                        <div className={'t-wrapper'}>
                            <div>Total</div>
                            <div>{currentPrice}</div>
                        </div>

                    </> :
                    <>
                        <div style={{textAlign: 'center'}}>
                            <h4>No Item yet</h4>
                        </div>
                    </>
            }
        </div>
    )

}

function LoginWindow({setShowLogin ,handleClick }) {



    return (

        <div className={'c-p-wrapper'}>
            <div style={{textAlign: 'center'}} className={'head'}>

                <div> Login</div>
                <div className={'cpt'} onClick={() => setShowLogin(false)}> X</div>
            </div>
            <div style={{padding: '20px', textAlign: 'center'}}>
                <input style={{
                    height: "30px",
                    borderRadius: '4px',
                    fontSize: 'large'
                }} type={'tel'} placeholder={'phone no.'}/>
                <span className={'btn-login cpt'}><button onClick={handleClick} >Login</button></span>
            </div>

        </div>
    )

}
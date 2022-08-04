import './index.css'
import {useNavigate} from "react-router";

export function Checkout(){
const navigate = useNavigate()

    return (
        <>
        <div style={{padding:10,textAlign:'center',width:'100vw'}}>Thank you for you order</div>
        <div style={{padding:10,textAlign:'center',width:'100vw'}}>
            <button onClick={()=>navigate('/main')} className={'btn-login'}> Go back to listing</button>
        </div>
        </>
    )

}
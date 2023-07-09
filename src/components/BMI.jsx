import React,{useState} from 'react'
import { UserCard,FlippingCard,FlippingCardBack,FlippingCardFront } from 'react-ui-cards';


function BMI() {

    const [heightBool,setheightBool]=useState(false);
    const [weightBool,setweightBool]=useState(false);
    const [measurement,setmeasurement]=useState({
        height:"",weight:"",
        BMI:''
    });
        const calculateBMI=(e,measurement)=>{
            e.preventDefault()
            const {height,weight}= measurement ;
            if(!height){
                setheightBool(true);
                return;
            }
            
            if(!weight){ setweightBool(true);
                return;
            }

            const BMI= weight/(height*height);
            setmeasurement({...measurement,BMI:BMI});;

        }



  return (
    <FlippingCard>
    <FlippingCardBack>
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
            }}>
                <form style={{lineheight:"10px",fontFamily:'roboto'}}>
                    <label htmlFor='weight'>Weight (in kg)</label>
            <input  type="text" onChange={(e)=>{setmeasurement({...measurement,weight:e.target.value})}} id="weight"/>
                    <label htmlFor='height'>Height (in m)</label>
            <input onChange={(e)=>{setmeasurement({...measurement,height:e.target.value})}} type="text" id="height"/>
            <button class="rounded-full bg-[#1da1f2]" onClick={(e)=>calculateBMI(e,measurement)}>Calculate</button>
                   
                    </form>
                    {measurement?.BMI && <p>your BMI is {measurement?.BMI}</p>}
        </div>
    </FlippingCardBack>
    <FlippingCardFront>
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/3sKjY8V.jpg)'
            }}>
        </div>
    </FlippingCardFront>
</FlippingCard>
  )
}

export default BMI
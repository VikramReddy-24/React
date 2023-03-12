import React, { useState } from 'react';

import './smartWatch.css';








const SmartWatch = (props) => {

    const black_url='https://i.imgur.com/iOeUBV7.png'
    const pink_url='https://i.imgur.com/Zygu7I3.png'
    const blue_url= 'https://i.imgur.com/Mplj1YR.png'
    const red_url='https://i.imgur.com/PTgQlim.png'

    let [url , change] =useState(black_url)


    function handler(args) {
        console.log(args);
        let v_url;
        switch (args) {
            case "blackButton":
                v_url='https://i.imgur.com/iOeUBV7.png'
                console.log(v_url);

                break;
            case "pinkButton":
                v_url='https://i.imgur.com/Zygu7I3.png'
                console.log(v_url);
                break;
            case "blueButton":
                v_url='https://i.imgur.com/Mplj1YR.png'
                console.log(v_url);
                break;
            case "redButton":
                v_url='https://i.imgur.com/PTgQlim.png'
                console.log(v_url);
                break;  
        }
        change(url=v_url)
    }

    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    const istTime = now.toLocaleString('en-US', options).split(',')[1];
    // console.log(istTime); // output: current date and time in IST format

    let [time , currentTime] =useState()
    let [isTime , imageData] = useState(true)

    function myFunction() {
       
        currentTime(time=now.toLocaleString('en-US', options).split(',')[1])
        
      }
      
    setInterval(myFunction, 2000); // call myFunction every 1000 milliseconds (1
      
  

    function imageHandler(args) {

        console.log(args)

        console.log(isTime)

        if (args == 'Time'){

            imageData(isTime =true)

        }else if(args =='heartRate') {

            imageData(isTime =false)

        }

        

    }

    const timeBlock =<div><h3 className='time'>{time}</h3></div>
    const heartBeatBlock = <div ><img  className='heartBeat' src={process.env.PUBLIC_URL + '/heart-beating.gif'}  alt='image' /> <h2 className='heartBeatNumber'>92</h2></div>
   
    
    return(<div>
        <div className="header"></div>
        
        <div className='itemContainer'>
            <div className='imageblock'>

                <img className='image' src={url}/>

                {/* <div>
                        <h3 className='time'>{time}</h3>
                </div>

                <div >
                    <img  className='heartBeat' src={process.env.PUBLIC_URL + '/heart-beating.gif'}  alt="image" />
                    <h2 className='heartBeatNumber'>92</h2>
                </div> */}

                { isTime ? timeBlock : heartBeatBlock }

            </div>

            <div className='infoblock'>
                <h1>Smart Bit 64 - The Smartest Watch</h1>

                <p>The Smartest Watch The Smartest Watch The Smartest Watch The Smartest Watch The Smartest Watch</p>
                
                <h3>Select Color</h3>
                <button className='blackButton' onClick={() => handler('blackButton')}></button>
                <button className='pinkButton' onClick={() => handler('pinkButton')}></button>
                <button className='blueButton' onClick={handler.bind(this , 'blueButton')}></button>
                <button className='redButton' onClick={handler.bind(this , 'redButton')}></button>
                <h3>Features</h3>
                <button className='features' onClick={() => imageHandler('Time')}>Time</button>
                <button className='features' onClick={() => imageHandler('heartRate')}>Heart Rate</button>
                <br/>
                <button className='buyButton'>BUY NOW</button>
            </div>
        </div>
           
    </div>)

}



export default SmartWatch;
import React,{useState,useEffect} from 'react'
import './Style.css'
import Widget from './Widget'
function Home() {
  const[MyData,setData]=useState()
  const[myVal,setVal]=useState('Thodupuzha')
  const[Num,setNum]=useState(0)
  const[apiKey,setApi]=useState('5833d253e64d423ae3592e6b72ee7fbb')

  let key=['33c92b0552e0eea71460739025382726','6890862a72fc7aabfe2222f2f2b1d4b0',
           '822fc8446f5adc72ac8c766a871329a8','f01661f5ec7c16ffa55f7a47d3d5f4d9',
           'bc12083e70d2d22298c2df1cec7101d9','d49e1c4968b72e9d494fc85c771d438f',
           '19f6d08f614bce92791be57a20c2b367','c6a93e069c27302790c56e983011e7e0',
           '0af6e8cb76d6cd0e66f800a5f18f7041','39d6adf1ddfcfe785cc37032792f5116',
           'bc4f09e2030bf3e2eb39b7c542f0d3a0','3e93d32f7f1057cd17db163285e9294e',
           '6bc1fab116a32d97680c54695902b8df','a734cb701f5b4abeec50f79bbdad2c64',
          ]
    useEffect(()=>{
        const axios=require('axios')
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+myVal+'&appid='+apiKey+'').then((Response)=>{
           setData(Response.data)
        })
    },[MyData, myVal,apiKey])

   // setTimeout(() => {
     // setApi(key[Math.floor(Math.random() * 14)])
 // }, 0)
//console.log(apiKey)


let MyFun=()=>{
  setVal(  document.querySelector("#in").value.toLowerCase())
  setNum(Num<=key.length-1?Num+1:0)
  setApi(key[Num])
  }

if(!MyData)return ''

    return (
        <div>
          <h1 className='hed'>Weather App</h1>
         <div className='search'>
             <input type="text" placeholder="Enter your location here..." id='in' />
             <button onClick={MyFun} className='off'>Search</button>
         </div>
         <div  className='widget'>
              <Widget MyData={MyData}/>
        </div>
      </div>
    )
}

export default Home
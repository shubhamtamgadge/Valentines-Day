import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(1)
  const [rejected, setrejected] = useState("No")
  const [imgUrl, setImgUrl] = useState("https://i.pinimg.com/originals/d2/f7/90/d2f790978f11b5bb2f1ff38124a9a47a.gif")
  const [hidden, setHidden] = useState(false);
  const [text, setText] = useState("Will you be my Valentine?")


  function saidNo(){

      setCount(count+1)
      console.log(count)


    if(count===1){
      setrejected("please")
      setImgUrl("https://media.tenor.com/2BrMVhEIsgIAAAAM/mocha-bear-kiss-bear-kiss.gif")
    }
    else if(count===2){
      setrejected("Are you sure??")
      setImgUrl("https://media.tenor.com/mrRRhRdxtXAAAAAj/dudu-giving-flowers-cute.gif")
    
    }
    else if(count===3){
      setrejected("What if i gift you diet coke?")
      setImgUrl("https://www.gifcen.com/wp-content/uploads/2025/01/milk-and-mocha-gif-5.gif")  //https://www.gifcen.com/wp-content/uploads/2025/01/milk-and-mocha-gif-5.gif
    }
    else if(count===4){
      setrejected("Pretty please")
    }
    else if(count===5){
      setrejected("With a packet of spicy ramen")
      setImgUrl("https://i.pinimg.com/originals/2b/a5/71/2ba5713f2991cc83132a394beaabacc6.gif")  // eating https://i.pinimg.com/originals/2b/a5/71/2ba5713f2991cc83132a394beaabacc6.gif
    }
    else if(count===6){
      setrejected("What if we go for ghumi ghumi?")
      setImgUrl("https://media.tenor.com/pqjNiL4U4NoAAAAM/bri-robert.gif")
    }
    else if(count===7){
      setrejected("please pookiee")
      setImgUrl("https://i.pinimg.com/originals/f3/5d/33/f35d33a6290e7d94b24347643cd39efa.gif")  // please https://i.pinimg.com/originals/f3/5d/33/f35d33a6290e7d94b24347643cd39efa.gif
    }
    else if(count===8){
      setrejected("But:*(")
    }
    else if(count===9){
      setrejected("I am going to die")
      setImgUrl("https://media.tenor.com/yVORhJ_dYNQAAAAj/bubu-dudu-sseeyall.gif")
    }
    else if(count===10){
      setrejected("I am dead!!!")
      setImgUrl("https://media.tenor.com/QlnrqQgSAm0AAAAj/boo-dudu-cry.gif")
    }
    else if(count===11){
      setrejected("You are breaking my heart")
      setImgUrl("https://64.media.tumblr.com/261ef6b4899029764a77797ee9961783/b9dd63a3352b14fa-4e/s400x600/9ae8543c3745d10f2df0dcf43ca12bbe1a7d99d0.gifv")  //heart breaking //  https://64.media.tumblr.com/261ef6b4899029764a77797ee9961783/b9dd63a3352b14fa-4e/s400x600/9ae8543c3745d10f2df0dcf43ca12bbe1a7d99d0.gifv
    }
    else if(count===12){
      setrejected("I'm very sad") 
      setImgUrl("https://i.pinimg.com/originals/f0/61/c1/f061c18854fe28120ed76c9e03002937.gif")
    }
    else if(count===13){
      setrejected("very very sad")
         /// crying  https://i.pinimg.com/originals/f0/61/c1/f061c18854fe28120ed76c9e03002937.gif
    }
    else if(count===14){
      setrejected("no:(")

    }
    



  }

  function saidYes(){
    setImgUrl("https://gifdb.com/images/high/dudu-shower-kisses-bubu-8a50xh2b6wxatij5.gif")
     setHidden(true); 
     setText("Yehh!!")
  }

  return (
    <div className='w-screen h-screen  flex flex-col justify-center items-center'>

      <div>
        <img className='bg-amber-400 size-auto mb-5'
        src={imgUrl} alt="" />
       
      </div>

        <h1 className='text-sm font-medium text-black mb-6 sm:text-3xl'>{text}</h1>

      {!hidden && (
        <div className='flex flex-wrap justify-between items-center gap-4 w-auto h-auto px-4'>
        <button onClick={saidYes}
        className={`bg-green-600 text-white px-3 py-1 font-semibold `}
         style={{
          padding: `${4 * count}px ${12 * count}px`,
          fontSize: `${16 * count}px`
        }}
        >Yes</button>
        
        <button onClick={saidNo}
        className='bg-red-500 text-white px-3 py-1 font-semibold  max-h-9 '>{rejected}</button>
      </div>
      )}


    
      
      
    </div>
  )
}

export default App

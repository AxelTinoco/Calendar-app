import { Player } from '@lottiefiles/react-lottie-player';


export const PageNotFound = () => {
  return (
      <div className="h-screen flex bg-gray-100 w-full justify-center">
        
        <Player
        style={{ height : '100%' , width: '100%'}}
        autoplay
        loop
        speed='1'
        mode="normal"
        src={'https://assets10.lottiefiles.com/packages/lf20_25qm2qe0.json'}

    >

    </Player>   
        </div>
     
   

  )
}

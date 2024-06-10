import Image from "next/image";
import Button from "./components/Button";
import CountDown from "./components/CountDown/CountDown";

export default function Home() {
  return (
    <main 
      className="flex flex-col items-center justify-center pt-20 relative max-w-screen-2xl mx-auto h-dvh w-full"
    >
      <div 
        className='border-[5px] h-[1150px] w-[1150px] border-black rounded-full absolute top-[-40%] left-2/4 -translate-x-2/4 -translate-y-2/4'
      />
      <CountDown />
      <div
        className="mt-0 flex flex-col items-center"
      >
        {/* <p
          className="font-bethanyElingston text-[14vw] 2xl:text-[220px] leading-[100%] tracking-wide text-main-text font-medium"
        >
          <span className="relative">Sch
            <Image className="absolute top-[25%] left-[46%] -z-10 w-[10vw] max-w-[150px]" height={150} width={150} alt="O" src={'/yellow_square.svg'}/>
            &nbsp;&nbsp;ols
          </span>&nbsp;
          <span>of</span><br />
          <span>
            <span className="relative">
              T
              <Image className="absolute top-[25%] left-[50%] z-10 w-[10vw] max-w-[160px]" height={150} width={150} alt="O" src={'/pink_square.svg'}/>
            </span>
            &nbsp;&nbsp;
            <span className="relative">
              <span className="-z-20">morr</span>
              <Image className="absolute top-[20%] right-[18%] -z-10 w-[10vw] max-w-[160px]" height={150} width={150} alt="O" src={'/blue_circle.svg'}/>
              &nbsp;&nbsp;<span className="z-20">w</span>
            </span>
          </span>
        </p> */}
        <div className="relative">
          <p 
            className="font-bethanyElingston text-[14vw] 2xl:text-[220px] leading-[100%] tracking-wide text-main-text font-medium absolute top-0 left-0 hidden"
          >
            Schools of<br />Tomorrow
          </p>
          <Image 
            src={'/Schools_of_Tomorrow.svg'}
            alt="Schools of Tomorrow"
            className="text-[220px]"
            height={900}
            width={900}
          />
        </div>
        <Button 
          text={'Register Now'} 
          className={'mt-6'}
        />
      </div>
    </main>
  )
}

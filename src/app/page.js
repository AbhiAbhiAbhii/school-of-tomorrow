import Image from "next/image";
import Button from "./components/Button";
import CountDown from "./components/CountDown/CountDown";

export default function Home() {
  return (
    <main 
      className="flex flex-col items-center justify-center pt-20 relative max-w-screen-2xl mx-auto h-dvh w-full"
    >
      <CountDown />
      <div
        className="flex flex-col items-center"
      >
        {/* was here */}
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

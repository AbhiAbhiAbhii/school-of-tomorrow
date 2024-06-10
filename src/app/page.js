import Button from "./components/Button";
import CountDown from "./components/CountDown/CountDown";

export default function Home() {
  return (
    <main 
      className="flex flex-col items-center justify-center pb-8 pt-24 relative max-w-screen-2xl mx-auto h-dvh w-full"
    >
      <div 
        className='border-[5px] border-black rounded-full absolute top-[-50%] left-2/4 -translate-x-2/4 -translate-y-2/4'
      />
      <CountDown />
      <div
        className="mt-6 flex flex-col items-center"
      >
        <p
          className="font-bethanyElingston text-[14vw] 2xl:text-[220px] leading-[100%] tracking-wide text-main-text font-medium"
        >
          Schools of <br /> Tomorrow
          {/* <span>Sch ools</span>
          <span>of</span><br />
          <span>T morrow</span> */}
        </p>
        <Button 
          text={'Register Now'} 
          className={'mt-4'}
          />
      </div>
    </main>
  )
}

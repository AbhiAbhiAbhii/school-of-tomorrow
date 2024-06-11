import Image from "next/image";
import Button from "./components/Button";
import CountDown from "./components/CountDown/CountDown";

export default function Home() {
  return (
    <main 
      className="flex flex-col items-center justify-center pt-40 relative max-w-screen-2xl mx-auto h-dvh w-full overflow-hidden"
    >
      <CountDown />
      <div className="absolute sm:top-[-580px] left-2/4 transform -translate-x-2/4 h-[400px] w-[400px] top-[-210px] sm:h-[800px] sm:w-[800px]">
        <Image 
          height={800}
          width={800}
          src={'/ring_sot.svg'}
          alt="ring"
          className="!h-full !w-full"
        />
      </div>
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
            height={600}
            width={600}
          />
        </div>
        <Button 
          link={'https://thecircleindia.typeform.com/to/yNIWjHDG'}
          text={'Register Now'} 
          className={'mt-8 sm:mt-6'}
        />
      </div>
    </main>
  )
}

export async function generateMetadata() {

  return {
    title: 'Schools of Tomorrow',
    description: 'Coming Soon',
    openGraph: {
      images: ['/opengraph-image.png']
    }
  };
}


import dynamic from 'next/dynamic'
const CountDownDynamic = dynamic(() => import('@/components/CountDown'), {
  ssr: false,
})
export default function Home() {
  return (
    <main className="flex h-screen w-screen justify-center">
      <div className='min-h-screen min-w-screen'>
        <div className='flex flex-col'>
          <div className="basis-1/4">
            <span className="text-7xl">
              El cumple de Matito!
            </span>
          </div>
          <div className="basis-1/4">
            <video className='w-full aspect-[4/3]' src='./hip_hop_dancing_matito.mp4' autoPlay={true}>

            </video>
          </div>
          <div className="basis-1/4">
            <p className="text-6xl">
              Faltan:
            </p>
          </div>
          <div className="basis-1/4 justify-center flex items-center justify-center">
            <CountDownDynamic />
          </div>
        </div>
      </div>
    </main>
  )
}

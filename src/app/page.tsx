import Ballons from '@/components/Balloons/Ballons'
import Video from '@/components/Video'
import dynamic from 'next/dynamic'
const CountDownDynamic = dynamic(() => import('@/components/CountDown'), {
  ssr: false,
})
export default function Home() {
  return (
    <main className="flex h-screen w-screen justify-center">
      <Ballons />
      <div className='min-h-screen min-w-screen'>
        <div className='flex flex-col text-center'>
          <div className="basis-1/4 mt-8">
            <span className="text-8xl  font-blossom">
              ¡El cumple de Matito!
            </span>
          </div>
          <div className="basis-1/4">
            <Video src='./hip_hop_dancing_matito.mp4' />
          </div>
          <div className="basis-1/4  font-blossom">
            <p className="text-6xl">
              Faltan:
            </p>
          </div>
          <div className="basis-1/4 justify-center flex items-center justify-center mt-8">
            <CountDownDynamic />
          </div>
        </div>
      </div>
    </main>
  )
}

import Image from 'next/image'
import Features from './components/Features'
import RobitImg from './components/robit_head.png'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 flex justify-center items-center gap-5">
          <Image src={RobitImg} alt="Robit" width={70} /> Robit
        </h1>
        <p className="text-2xl">
          Programmable buddy for <span className="inline-block">💬</span> Signal
          Messenger
        </p>
      </div>

      <Features />
    </div>
  )
}

import Features from './components/Features'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Robit</h1>
        <p className="text-2xl">
          Programmable buddy for <span className="inline-block">💬</span> Signal
          Messenger
        </p>
      </div>

      <Features />
    </div>
  )
}

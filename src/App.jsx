import './styles/font.css'
import './App.css'
import SocialButtons from './components/SocialButtons'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>
      <div className="text-white">
        <div className='max-w-2xl mx-auto h-screen flex flex-col justify-center text-xl px-4'>
          <p className="text-2xl sm:text-3xl font-extrabold py-5">
            👋 Hi, I'm Midan
          </p>
          <p className='pb-3'>
            I'm a <span className='cta'>Full stack Developer</span> and graduated with a B.Tech. degree from North-Eastern Hill University, Shillong in 2023. I'm pretty handy with <span className='cta'>ReactJS</span>, <span className='cta'>Next.js</span>, <span className='cta'>Node.js</span>, and <span className='cta'>SQL</span>.
          </p>
          <p className='pb-5'>
            In my leisure time, you'll probably catch me tackling a new language &ndash; and no, I don't mean programming languages this time!
          </p>
          <SocialButtons />
        </div>
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App

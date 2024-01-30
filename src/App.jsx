import './styles/font.css'
import './App.css'

function App() {

  return (
    <>
      <div className="h-screen w-full dark:bg-themed-black bg-themed-white dark:bg-dot-themed-grey/[0.2] bg-dot-themed-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-themed-black bg-themed-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className='w-full max-w-2xl relative z-20 dark:text-themed-white text-themed-black text-balance text-lg sm:text-xl mx-8'>
          <p className="text-2xl sm:text-3xl font-extrabold py-5">
            👋 Hi, I'm Midan
          </p>
          <p className='pb-3'>
            I'm a <span className='cta'>Full stack Developer</span> and have completed my B. Tech. in 2023 from North-Eastern Hill University, Shillong. I boast skills like <span className='cta'>ReactJS</span>, <span className='cta'>Next.js</span>, <span className='cta'>Node.js</span> and <span className='cta'>SQL</span>.
          </p>
          <p className='pb-5'>
            In my leisure time, you'll probably catch me tackling a new language &ndash; and no, I don't mean programming languages this time!
          </p>
          <div className='flex flex-wrap gap-4 text-base font-bold'>
            <a href="https://github.com/MidanAhmed" target='_blank'>
              <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-md border dark:hover:shadow-[4px_4px_0px_0px_rgba(248,249,250)] hover:shadow-[4px_4px_0px_0px_rgba(33,37,41)] transition duration-200">
                <svg className='fill-current' width={25} height={25} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                <p>GitHub</p>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/choudharymidanahmed/" target='_blank'>
              <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-md border dark:hover:shadow-[4px_4px_0px_0px_rgba(248,249,250)] hover:shadow-[4px_4px_0px_0px_rgba(33,37,41)] transition duration-200">
                <svg className='fill-[#0A66C2]' width={25} height={25} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                <p>LinkedIn</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

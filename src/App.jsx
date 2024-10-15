
import './App.css'
import Footer from './components/Footer'
import Headers from './components/Headers'
import Home from './components/Home'

function App() {

  return (
    <>
    <div className='bg-violet-900 h-screen flex flex-col ' >
        <Headers />
        <Home />
     <div className='mt-auto mb-5'>   <Footer /></div>
    </div>



    </>
  )
}

export default App

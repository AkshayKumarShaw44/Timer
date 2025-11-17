import { useState } from 'react'
import StopWatch from './components/StopWatch'


function App() {
  const [color, setColor] = useState("bg-amber-600")
  const [fontcolor, setfontcolor] = useState("text-amber-600")
  const [accent, setaccent] = useState("accent-amber-600")

  return (
    
 <div className={`h-screen w-screen flex flex-col flex-wrap justify-center items-center ${color}`}>
  <div className="flex-1 flex justify-center items-center w-full ">
      <StopWatch />
  </div>
  <div >
      <div className="backdrop-blur-md bg-white/40 border border-white/30 mb-15 rounded-3xl flex flex-wrap gap-4 p-3">
        <button className="bg-red-600 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-red-600"); setfontcolor("text-red-600"); setaccent("accent-red-600")}}>Red</button>
        <button className="bg-green-600 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-green-600"); setfontcolor("text-green-600"); setaccent("accent-green-600")}}>Green</button>
        <button className="bg-yellow-500 text-black py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-yellow-500"); setfontcolor("text-yellow-500"); setaccent("accent-yellow-600")}}>Yellow</button>
        <button className="bg-blue-600 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-blue-600"); setfontcolor("text-blue-600"); setaccent("accent-blue-600")}}>Blue</button>
        <button className="bg-purple-600 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-purple-600"); setfontcolor("text-purple-600"); setaccent("accent-purple-600")}}>Purple</button>
        <button className="bg-pink-500 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-pink-500"); setfontcolor("text-pink-500"); setaccent("accent-pink-600")}}>Pink</button>
        <button className="bg-orange-500 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-orange-500"); setfontcolor("text-orange-500"); setaccent("accent-orange-600")}}>Orange</button>
        <button className="bg-teal-500 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-teal-500"); setfontcolor("text-teal-500"); setaccent("accent-teal-600")}}>Teal</button>
        <button className="bg-gray-600 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-gray-600"); setfontcolor("text-gray-600"); setaccent("accent-gray-600")}}>Gray</button>
        <button className="bg-lime-500 text-black py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-lime-500"); setfontcolor("text-lime-500"); setaccent("accent-lime-600")}}>Lime</button>
        <button className="bg-indigo-600 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-indigo-600"); setfontcolor("text-indigo-600"); setaccent("accent-indigo-600")}}>Indigo</button>
        <button className="bg-cyan-500 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-cyan-500"); setfontcolor("text-cyan-500"); setaccent("accent-cyan-600")}}>Cyan</button>
        <button className="bg-amber-600 text-white py-2 px-4 shadow-2xl rounded-2xl" onClick={() => { setColor("bg-amber-600"); setfontcolor("text-amber-600"); setaccent("accent-amber-600")}}>Amber</button>
      </div>
  </div>
    </div>
  )
}

export default App

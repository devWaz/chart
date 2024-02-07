import Balance from "./components/Balance"
import Graph from "./components/Graph"

function App() {
 

  return (

      <div className="h-screen bg-[#f8e9dd] px-4 flex justify-center items-center">
        <div className="w-full">
          <Balance/>
          <Graph/>
        </div>
      </div>
  )
}

export default App

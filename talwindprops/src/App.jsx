import Card from "./components/Card"
function App() {
  return (
    <>
    <h1 className="bg-red-500 text-white text-4xl p-5">
      Tailwind test
    </h1>    
    <Card location={"Latur"} userName={"Kiran Kishanrao Kendre"} buttonText={"Check Me"}/>
    <Card location={"Udgir"} userName={"Aditya Bhagat"} buttonText={"Go to"}/>
    <Card/>
    </>
  )
}

export default App
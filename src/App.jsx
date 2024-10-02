import Header from "./components/Header"


function App() {

  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <main className="relative flex bg-blue-200 border h-screen pt-14">
        {/* left */}
        <div className="fixed top-14 h-full bg-red-200 w-[350px] overflow-auto">
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
        </div>
        {/* center */}
        <div className="w-[680px] mx-auto bg-white mt-3 ">
          <div className="artboard phone-3">414×736</div>
          <div className="artboard phone-3">414×736</div>
          <div className="artboard phone-3">414×736</div>
          <div className="artboard phone-3">414×736</div>
        </div>
        {/* right */}
        <div className="fixed top-14 right-0 h-full bg-red-200 w-[350px] overflow-auto ">
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
        </div>
      </main>
    </div>
  )
}

export default App

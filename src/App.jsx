import Header from "./components/Header"
import SidebarMenu from "./components/SidebarMenu"



function App() {

  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <main className="relative flex bg-gray-100 border pt-14">
        <SidebarMenu />
        {/* center */}
        <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg ">
          Post Area
        </div>
        {/* right */}
        <div className="fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2
        pt-4 px-2 max-xl:hidden">
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

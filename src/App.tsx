import SketchPad from './SketchPad';

function App() {

  return (
    <>
      <div className="flex-col bg-primary h-screen text-center">
        <h1 className="mt-[10px]">Data Creator</h1>
        <div id="sketchpadContainer" className="flex justify-center">
          <SketchPad className="bg-white shadow-lg" width="400" height="400">

          </SketchPad>
        </div>
        <button className="mt-5">
            Undo
          </button>
      </div>
    </>
  )
}

export default App

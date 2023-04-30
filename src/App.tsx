import SketchPad from './SketchPad';

function App() {

  const undo = () => {
    console.log('undo');
  }

  return (
    <>
      <div className="flex-col bg-primary h-screen text-center">
        <h1 className="mt-[10px]">Data Creator</h1>
        <SketchPad className="bg-white shadow-lg ml-auto mr-auto" width="400" height="400">
        </SketchPad>
      </div>
    </>
  )
}

export default App

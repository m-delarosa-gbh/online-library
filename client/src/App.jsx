import { Route, Routes } from "react-router-dom";
import { Home, BookPageDetail } from "./pages";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/book/:id" element={<BookPageDetail />} />
      </Routes>
    </>
  )
}

export default App

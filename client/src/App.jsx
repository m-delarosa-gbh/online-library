import { Route, Routes } from "react-router-dom";
import { Home, BookPageDetail } from "./pages";
import { HeaderNavigation } from "./layouts";

function App() {

  return (
    <>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/book/:id" element={<BookPageDetail />} />
      </Routes>
    </>
  )
}

export default App

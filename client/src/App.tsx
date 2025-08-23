import { Route, Routes } from "react-router-dom";
import { Home, BookPageDetail, BookContentPage } from "./pages";
import { HeaderNavigation } from "./layouts";

function App() {

  return (
    <>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/book/:id" element={<BookPageDetail />} />
        <Route path="/book/:id/page/:numberPage" element={<BookContentPage />} />
      </Routes>
    </>
  )
}

export default App

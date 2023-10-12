import { HomePage } from "./pages/HomePage"
import "./styles/reset.scss"
import "./styles/globalStyles.scss"
import "./styles/typography.scss"
import "react-toastify/dist/ReactToastify.min.css"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <HomePage />

      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </>
  )
}

export default App

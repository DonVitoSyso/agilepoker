import "../style/App.css"
import "../style/style_tailwinds.css"
import "tailwindcss/tailwind.css"
import Header from "../components/Header"

import '../style/global.css'
import '@/style/futer.css'
import Room from "./Rooms"
import About from "./About"
import Instruction from "./Instruction"
import Hands from "./Hands"
import Futer from "./Futer"

function App() {
    return (
        <div className="text-geist">
            <Header />
            <Room />
            <About />
            <Instruction />
            <Hands />
            <Futer />
        </div>
    )
}

export default App;
import "@/style/About.css"
import line1 from "@/files/image/line5.svg"
import screen1 from "@/files/image/screen1.png"
import screen2 from "@/files/image/screen2.png"
import screen3 from "@/files/image/screen3.png"
import hand3 from "@/files/image/hand3.png"
import line_st1_st2 from "@/files/image/линия 6.svg"
import line3 from "@/files/image/линия 7.svg"
import ball1 from "@/files/image/шар 2.svg"
import ball2 from "@/files/image/шар 3.svg"
import { Button } from "./ui/button"

function About() {
    return (
        <div className="about">
            <h2 className="about-h2">Как пользоваться?</h2>
            <img src={line1} alt="" className="line1" />
            <div className="steps">
                <div className="ball1">
                    <img src={ball1} alt="" />
                </div>

                <div className="ball2">
                    <img src={ball2} alt="" />
                </div>

                <div className="div-steps step1">
                    <ul>
                        <li className="li-step">Шаг 1</li>
                        <li>Начинайте новую игру и добавляйте свои задачи</li>
                    </ul>
                    <img src={screen1} alt="" className="screen1"/>
                </div>

                <div className="line_st1_st2">
                    <img src={line_st1_st2} alt="" className="line6" />
                </div>
                
                <div  className="div-step2">
                    <img src={screen2} alt=""/>
                    <ul>
                        <li className="li-step">Шаг 2</li>
                        <li className="li-d-st2">Скопируйте URL код и пригласите своих друзей, коллег</li>
                    </ul>
                </div>

                <div>
                    <img src={line3} alt="" className="line3" />
                </div>

                <div className="div-steps step3">
                    <ul>
                        <li className="li-step">Шаг 3</li>
                        <li>Ставьте баллы и продуктивно решайте задачи!</li>
                    </ul>
                    <img src={screen3} alt="" className="screen1"/>
                </div>

                <div className="hand3">
                    <img src={hand3} alt="" />
                </div>
            </div>
            <div className="div-button">
                <button className="button-my hover:bg-blue-700">
                    НАЧАТЬ ИГРУ
                </button>
            </div>
        </div>
    )
}

export default About;
import "@/style/SimpleFast.css"
import hand1 from "@/files/image/hand1.png"
import hand2 from "@/files/image/hand2.png"

function SimpleFast() {
    return (
        <div className="simple-fast">
            <div className="name-preview">
                ПРОСТО И БЫСТРО
                <h1 className="text-h1-lg">Эджайл Покер Планирование</h1>
                
                <div className="div-btn">
                    <button className="button-my hover:bg-blue-700">
                        НАЧАТЬ ИГРУ
                    </button>
                </div>
                
                Избавьтесь от разногласий в команде и получите уверенность за выполнение задач
            
                <div className="hand1">
                    <img src={hand1} alt="" />
                </div>

                <div className="hand2">
                    <img src={hand2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SimpleFast
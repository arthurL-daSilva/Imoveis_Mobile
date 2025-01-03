import { Boxes } from "./style"
import Det1 from "../../../images/Det_bed.png"
import Det2 from "../../../images/Det_cutlery.png"
import Det3 from "../../../images/Det_house.png"
import Det4 from "../../../images/Det_service_area.png"
import Det5 from "../../../images/Det_toilet.png"

function Home(){
    return(
        <Boxes>
            <div>
                <img src={Det1} alt="quarto" />
                <p>Quarto mobilado</p>
            </div>
            <div>
                <img src={Det5} alt="banheiro" />
                <p>Banheiro equipado</p>
            </div>
            <div>
                <img src={Det2} alt="Talheres" />
                <p>Cozinha Equipada</p>
            </div>
            <div>
                <img src={Det3} alt="Casa" />
                <p>Sala Equipada</p>
            </div>
            <div>
                <img src={Det4} alt="Area de serviço" />
                <p>Área de serviço</p>
            </div>
        </Boxes>
    )
}

export default Home
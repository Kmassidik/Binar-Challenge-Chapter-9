import { useEffect, useState } from 'react'
import { database, authFirebase } from '../config/firebase'
import { ref, set } from 'firebase/database'
import { useNavigate, Link } from 'react-router-dom'
import { 
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'
import '../assets/css/Style.css';
import jwt_decode from "jwt-decode";

export default function FirebaseGameSuit(props){
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState("")
  const [id, setId] = useState(0)
  const [point, setPoint] = useState(0)
  const choices = ['batu', 'kertas', 'gunting']
  const rec = "record"
  const url = 'https://github.com/orgs/Game-Binar-Wave-25/dashboard'
  const [isUser, setUser] = useState('')
  const [isUserId, setUserId] = useState('')
  const navigate = useNavigate()
  const [isBatu, setBatu] = useState(false);
  const [isGunting, setGunting] = useState(false);
  const [isKertas, setKertas] = useState(false);
  const [botBatu, setBotBatu] = useState(false);
  const [botGunting, setBotGunting] = useState(false);
  const [botKertas, setBotKertas] = useState(false);

  function generateComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
  }
  const handleClick = (choice, bot) => {
    setId(id+1)
    Start(choice,bot)
  }
  const seri = (e,a) => {
    if (e === 'batu' && a === 'batu'){
      setBatu(true)
      setGunting(false)
      setKertas(false)
      setBotBatu(true)
      setBotGunting(false)
      setBotKertas(false)
    } else if (e === 'gunting' && a === 'gunting'){
      setBatu(false)
      setGunting(true)
      setKertas(false)
      setBotBatu(false)
      setBotGunting(true)
      setBotKertas(false)
    } else if (e === 'kertas' && a === 'kertas'){
      setBatu(false)
      setGunting(false)
      setKertas(true)
      setBotBatu(false)
      setBotGunting(false)
      setBotKertas(true)
    }
  }
  const authenticate = () => {
    let storage = localStorage.getItem("accesstoken")
    if (storage === "" || storage === null){
      navigate('/login')
    } else {
      let decode = jwt_decode(storage)
      setUser(decode.email)
      setUserId(decode.user_id)
    }
  }
  const Start = (p1,p2) => {
    setUserChoice(p1)
    setComputerChoice(p2)
    if (p1 === "batu" && p2 === "gunting") {
      setResult("YOU WIN!")
      setPoint(point+10)
      setBatu(true)
      setGunting(false)
      setKertas(false)
      setBotBatu(false)
      setBotGunting(true)
      setBotKertas(false)
    } else if (p1 === "batu" && p2 === "kertas") {
      setResult("YOU LOSE!")
      setBatu(true)
      setGunting(false)
      setKertas(false)
      setBotBatu(false)
      setBotGunting(false)
      setBotKertas(true)
    } else if (p1 === "gunting" && p2 === "kertas") {
      setResult("YOU WIN!")
      setPoint(point+10)
      setBatu(false)
      setGunting(true)
      setKertas(false)
      setBotBatu(false)
      setBotGunting(false)
      setBotKertas(true)
    } else if (p1 === "gunting" && p2 === "batu") {
      setResult("YOU LOSE!")
      setBatu(false)
      setGunting(true)
      setKertas(false)
      setBotBatu(true)
      setBotGunting(false)
      setBotKertas(false)
    } else if (p1 === "kertas" && p2 === "batu") {
      setResult("YOU WIN!")
      setBatu(false)
      setGunting(false)
      setKertas(true)
      setBotBatu(true)
      setBotGunting(false)
      setBotKertas(false)
    } else if (p1 === "kertas" && p2 === "gunting") {
      setResult("YOU LOSE!")
      setBatu(false)
      setGunting(false)
      setKertas(true)
      setBotBatu(false)
      setBotGunting(true)
      setBotKertas(false)
    } else {
      seri(p1,p2)
      setResult("DRAW")
      setPoint(point+5)
    }
  }

  useEffect(() => {
    authenticate()
    const inputUser = {
      userId: isUserId,
      email: isUser,
      total_game: id,
      total_point: point,
      game_record: 
        {
          pick_bot: computerChoice,
          pick_player: userChoice,
          pick_winner: result
        }
    }
    console.log(userChoice, computerChoice, result);
    if (userChoice !== null) {
      set(ref(database,`Histories/${rec}/${id}`), inputUser)
    }
  },[userChoice, computerChoice, id, result, point])

  return (
    <>
    <section className="container">
            <div className="row text-center">
            <div className="col">
                <div className="mb-5"><h1>{isUser}</h1></div>
                <div className="my-3 option" style={{backgroundColor: isBatu ? 'salmon' : '', color: isBatu ? 'white' : '',}}>
                    <img alt='batu' src={require("../assets/img/batu.png")} onClick={() => handleClick('batu',generateComputerChoice())}/>
                </div>
                <div className="my-3 option" style={{backgroundColor: isGunting ? 'salmon' : '', color: isGunting ? 'white' : '',}}>
                    <img alt='gunting' src={require("../assets/img/gunting.png")} onClick={() => handleClick('gunting',generateComputerChoice())}/>
                </div>
                <div className="my-3 option" style={{backgroundColor: isKertas ? 'salmon' : '', color: isKertas ? 'white' : '',}}>
                    <img alt='kertas' src={require("../assets/img/kertas.png")} onClick={() => handleClick('kertas',generateComputerChoice())}/>
                </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
                <div id="vs" className="vs">VS</div>
                <div id="win" className="d-flex justify-content-center align-items-center result win">PLAYER 1<br/> WIN</div>
                <div id="lose" className="d-flex justify-content-center align-items-center result win">COM <br/> WIN</div>
                <div id="draw" className="d-flex justify-content-center align-items-center result draw">DRAW</div>
            </div>
            <div className="col">
                <div className="mb-5"><h1>Bot</h1></div>
                <div className="my-3 option" style={{backgroundColor: botBatu ? 'salmon' : '', color: botBatu ? 'white' : '',}}>
                    <img id="comrock" className="bot" src={require("../assets/img/batu.png")} alt="batu"/>
                </div>
                <div className="my-3 option" style={{backgroundColor: botGunting ? 'salmon' : '', color: botGunting ? 'white' : '',}}>
                    <img id="comscissors" className="bot" src={require("../assets/img/gunting.png")} alt="gunting"/>
                </div>
                <div className="my-3 option" style={{backgroundColor: botKertas ? 'salmon' : '', color: botKertas ? 'white' : '',}}>
                    <img id="compaper" className="bot" src={require("../assets/img/kertas.png")}  alt="kertas"/>
                </div>
            </div>
            </div>
            <div className="text-center option">
            <FacebookShareButton url={url} hashtag='#game' className='facebook'>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} hashtag='#game' className='twitter'>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={url} hashtag='#game' className='whatsapp'>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton> - total point : {point} - <Link to='/' className='point'>
                <img src={require("../assets/img/back.png")} alt="" className='home'/>
              </Link>
              <Link to="/gameSuitTable">
              <div className='history'>
                <button type="button" className="btn btn-dark ">History</button>
              </div>
              </Link>
              {result && <h1> RESULT : {result}</h1>}
            </div>
      </section>
    </>
  )
}
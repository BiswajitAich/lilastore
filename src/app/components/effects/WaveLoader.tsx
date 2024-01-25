import { NextPage } from "next"
import style from '../../styles/effects/waveLoader.module.css'

const WaveLoader: NextPage = () => {
  return (
    <div className={style.waveContainer}>
        <div className={style.wave}/>
    </div>
  )
}

export default WaveLoader
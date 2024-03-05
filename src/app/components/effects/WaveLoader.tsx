import { NextPage } from "next"
import style from '../../styles/effects/waveLoader.module.css'
import StopContextMenu from "../simplifiedComponents/StopContextMenu"

const WaveLoader: NextPage = () => {
  return (
    <div className={style.waveContainer} onContextMenu={StopContextMenu}>
        <div className={style.wave}/>
    </div>
  )
}

export default WaveLoader
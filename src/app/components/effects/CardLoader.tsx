import styles from "../../styles/effects/cardLoader.module.css"
const CardLoader = (
    { height, num }: {
        height: number,
        num: number
    }) => {
    return (
        <div className={styles.WaveLoaderWrap}>
            {[...Array(num)].map((_, idx:number) => (
                <div className={styles.WaveLoaderDiv} 
                    key={idx} 
                    style={{
                        height:`${height}px`
                    }}
                />
            ))}
        </div>
    )
}
export default CardLoader
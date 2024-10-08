import styles from "../../styles/effects/cardLoader.module.css"
const CardLoader = (
    { num, head }: {
        num: number,
        head: string
    }) => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionDiv}>
                <h2 className={styles.h}>{head}</h2>
                <div className={styles.WaveLoaderWrap}>
                    {[...Array(num)].map((_, idx: number) => (
                        <div className={styles.WaveLoaderDiv}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default CardLoader
import styles from "../../styles/effects/miniCardLoader.module.css"
const MiniCardLoader = () => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionDiv}>
                <div className={styles.WaveLoaderWrap}>
                    {[...Array(10)].map((_, idx: number) => (
                        <div className={styles.WaveLoaderDiv}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default MiniCardLoader
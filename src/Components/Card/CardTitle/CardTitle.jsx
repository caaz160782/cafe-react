import styles from "./CardTitle.module.scss"

const CardTitle = ({titleCard,price}) => {
    return (
        <div className={styles.contentitle}>
            <div></div>
            <div className={styles.titlecard}> {titleCard}</div>
            <div  className={styles.infoprice}> <span>Precio: $</span> {price}</div>         
            <div></div>
        </div>

    )
}

export default CardTitle

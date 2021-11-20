import styles from "./CardImg.module.scss"

const CardImg = ({imgUrl, title}) => {
    return (
        <div className={styles.cardimage}>
            <img 
                src={imgUrl}
                alt={title}
                width="350px"
                height="259px"
            />
        </div>
    )
}

export default CardImg

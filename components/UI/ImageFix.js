//Components
import Image from "next/image";

//Styles
import styles from "../../styles/modules/ImageFix.module.scss"

export default function ImageFix(props) {
    return (
        <div className={styles.Container}>
            <Image
                src={props.src}
                layout="fill"
                className={styles.Img}
                alt={props.alt}
                sizes="100%"
            />
        </div>
    );
}

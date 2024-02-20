import styles from "./Sideabar.module.css"

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.blockList}>
                <h3>Гуманитарные науки</h3>
                <ul>
                    <li><a href="#">Русский язык</a></li>
                    <li><a href="#">Литература</a></li>
                    <li><a href="#">История</a></li>
                    <li><a href="#">Обществознание</a></li>
                </ul>
            </div>

            <div>
                <h3>Техничесие науки</h3>
                <ul>
                    <li><a href="#">Математика</a></li>
                    <li><a href="#">Информатика</a></li>
                    <li><a href="#">Физика</a></li>
                </ul>
            </div>

        </div>
    )
}
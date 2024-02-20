import styles from "./Header.module.css"

export const Header = () => {

    return (
        <header>
            <nav>
                <h1>Alexandria</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Training</a></li>
                    <li><a href="/">Forum</a></li>
                    <li><a href="/">Contacts</a></li>
                    <li><a href="/">Rating</a></li>
                </ul>

                <div className={styles.profileBox}>
                    <img src="defaulProfile.png" alt="#" />

                    <div className={styles.profileBox_info}>
                        <a href="UserProfile">Ali Mamchuev</a>
                        <p>You id: 1</p>
                    </div>
                </div>
            </nav>

        </header>
    )
}
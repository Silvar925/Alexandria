import { Header } from "../ui/Header/Header"
import { Sidebar } from "../ui/Sidebar/Sideabar"

export const UserProfile = () => {
    return (
        <>
            <Header />

            <div className="UserProfileContainer">
                <Sidebar />

            </div>
        </>
    )
}
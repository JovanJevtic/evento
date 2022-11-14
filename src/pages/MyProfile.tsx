import { IonPage } from "@ionic/react";
import Header from "../components/Header";

interface MyProfileProps {

}

const MyProfile: React.FC<MyProfileProps> = ({}) => {
    return (
        <IonPage>
            <Header />
        </IonPage>
    );
}

export default MyProfile
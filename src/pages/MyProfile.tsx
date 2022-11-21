import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonItemGroup, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react";
import { person } from "ionicons/icons";
import { useState } from "react";
import Header from "../components/Header";
import ProfileEngagedIn from "../components/ProfileEngagedIn";
import ProfileOrganized from "../components/ProfileOrganized";

interface MyProfileProps {

}

const MyProfile: React.FC<MyProfileProps> = ({}) => {
    const [segmentValue, setSegmentValue] = useState('default');

    return (
        <IonPage>
            <Header />
            <IonHeader>
                    <div className="profile-header-container">
                        <div className="profile-pfp-container">
                            <div className="profile-pfp-wrapp">
                                <IonIcon className="profile-pfp" icon={person} />
                            </div>
                        </div>
                        <div className="profile-username-container">
                            <IonLabel className="profile-username">Korisnicko ime</IonLabel>
                        </div>
                    </div>
                    <IonSegment value={segmentValue}>
                        <IonSegmentButton onClick={() => setSegmentValue("default")} value="default">
                            <IonLabel>Ucestvovao</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton onClick={() => setSegmentValue("segment")} value="segment">
                            <IonLabel>Organizovao</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
            </IonHeader>
            <IonContent>
                <>
                    { segmentValue === "default" ? <ProfileEngagedIn /> : <ProfileOrganized /> }
                </>
            </IonContent>
        </IonPage>
    );
}

export default MyProfile
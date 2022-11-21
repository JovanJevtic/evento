import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList } from "@ionic/react";
import ProfileOrganizedCard from "./ProfileOrganizedCard";

interface ProfileEngagedInProps {

}

const ProfileEngagedIn: React.FC<ProfileEngagedInProps> = ({}) => {
    return (
        <>
            <IonList>
                <ProfileOrganizedCard />
                <ProfileOrganizedCard />
                <ProfileOrganizedCard />
            </IonList>
        </>
    );
}

export default ProfileEngagedIn
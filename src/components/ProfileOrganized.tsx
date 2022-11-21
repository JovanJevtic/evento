import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonList } from "@ionic/react";

import { location, informationCircleOutline, person, arrowForwardCircleOutline} from 'ionicons/icons'
import { Link } from "react-router-dom";
import ProfileOrganizedCard from "./ProfileOrganizedCard";

interface ProfileOrganizedProps {

}

const ProfileOrganized: React.FC<ProfileOrganizedProps> = ({}) => {
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

export default ProfileOrganized
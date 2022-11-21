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
            
            <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Naziv Eventa</IonCardTitle>                    
                        <IonCardSubtitle>Lokacija Eventa</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Opis Eventa i dodatne informacije...
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Naziv Eventa</IonCardTitle>                    
                        <IonCardSubtitle>Lokacija Eventa</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Opis Eventa i dodatne informacije...
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Naziv Eventa</IonCardTitle>                    
                        <IonCardSubtitle>Lokacija Eventa</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Opis Eventa i dodatne informacije...
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Naziv Eventa</IonCardTitle>                    
                        <IonCardSubtitle>Lokacija Eventa</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Opis Eventa i dodatne informacije...
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Naziv Eventa</IonCardTitle>                    
                        <IonCardSubtitle>Lokacija Eventa</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Opis Eventa i dodatne informacije...
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Naziv Eventa</IonCardTitle>                    
                        <IonCardSubtitle>Lokacija Eventa</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Opis Eventa i dodatne informacije...
                    </IonCardContent>
                </IonCard>

            </IonList>
        </>
    );
}

export default ProfileOrganized
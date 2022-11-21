import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from "@ionic/react";
import { arrowForward, arrowForwardCircleOutline, location, person } from "ionicons/icons";
import { Link } from "react-router-dom";

interface ProfileOrganizedCardProps {
}

const ProfileOrganizedCard: React.FC<ProfileOrganizedCardProps> = ({}) => {
    return (
        // <IonCard className="card">
        //     <Link style={{ textDecoration: 'none', color: '#ffffff' }} className="card-left-container" to='/'>
        //             <div className="card-pfp-container">
        //                 <div className="card-pfp-wrapp">
        //                     <IonIcon color="#ffffff" icon={person} />
        //                 </div>
        //             </div>
        //     </Link>
        //     <Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }} className="card-right-container">
        //         <IonCardHeader>
        //             <div className="card-header">
        //                 <div className="card-header-title-container">
        //                     <IonCardTitle style={{fontWeight: 'bold'}}>Naziv Eventa</IonCardTitle>    
        //                 </div>
        //                 <div className="card-header-arrow-container">
        //                     <IonIcon className="card-header-arrow" icon={arrowForward} />     
        //                 </div>
        //             </div>                 
        //             <IonCardSubtitle><IonIcon icon={location} /> Lokacija Eventa</IonCardSubtitle>
        //             </IonCardHeader>


        //             <IonCardContent>
        //             <IonCardSubtitle>
        //                 {/* <IonIcon icon={informationCircleOutline} /> */}
        //                 Opis Eventa i dodatne informacije...
        //                 </IonCardSubtitle>
        //             </IonCardContent>   
        //     </Link>
        // </IonCard>

        <IonCard className="card">
            <Link style={{ textDecoration: 'none', color: '#ffffff' }} className="card-left-container" to='/'>
                    <div className="card-pfp-container">
                        <div className="card-pfp-wrapp">
                            <div className="card-pfp">
                                <IonIcon className="pfp" color="#ffffff" icon={person} />
                            </div>
                        </div>
                        <div className="card-username-wrapp">Username</div>
                    </div>
                    <div className="card-settings-container">
                        <IonIcon className="card-settings" icon={arrowForwardCircleOutline} />
                    </div>
            </Link>
            <Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }} className="card-right-container">
                <IonCardHeader>
                    <div className="card-header">
                        <div className="card-header-title-container">
                            <IonCardTitle style={{fontWeight: 'bold'}}>Naziv Eventa</IonCardTitle>    
                        </div>
                        {/* <div className="card-header-arrow-container">
                            <IonIcon className="card-header-arrow" icon={arrowForward} />     
                        </div> */}
                    </div>                 
                    <IonCardSubtitle><IonIcon icon={location} /> Lokacija Eventa</IonCardSubtitle>
                    </IonCardHeader>


                    <IonCardContent>
                    <IonCardSubtitle>
                        {/* <IonIcon icon={informationCircleOutline} /> */}
                        Opis Eventa i dodatne informacije...
                        </IonCardSubtitle>
                    </IonCardContent>   
            </Link>
        </IonCard>
    );
}

export default ProfileOrganizedCard
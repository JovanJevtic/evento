import { IonContent, IonHeader, IonList, IonPage, IonSearchbar, IonSlide, IonSlides, IonToolbar } from "@ionic/react";
import ExploreSliderPFP from "../components/ExploreSliderPFP";
import Header from "../components/Header";
import ProfileOrganizedCard from "../components/ProfileOrganizedCard";

interface ExploreProps {

}

const Explore: React.FC<ExploreProps> = ({}) => {
    const slideOpts = {
        initialSlide: 1,
        speed: 400
      };

    return (
        <IonPage>
            <Header />
            <IonHeader>
                <IonToolbar>
                    <IonSearchbar placeholder="Search for a event, user or a location" animated={true} />    
                </IonToolbar>   
            </IonHeader>
            <IonContent>
            <div className="explore-slider">
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
                <ExploreSliderPFP />
            </div>
            <IonList>
                <ProfileOrganizedCard />
                <ProfileOrganizedCard />
                <ProfileOrganizedCard />
                <ProfileOrganizedCard />
                <ProfileOrganizedCard />
                <ProfileOrganizedCard />
            </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Explore
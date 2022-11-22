import { IonIcon } from "@ionic/react";
import { person } from "ionicons/icons";

interface ExploreSliderPFPProps {

}

const ExploreSliderPFP: React.FC<ExploreSliderPFPProps> = ({}) => {
    return (
        <div className="explore-slider-pfp-wrapp">
            <div className="explore-slider-pfp-container">
                <IonIcon className="explore-slider-pfp" icon={person} />
            </div>
        </div>
    );
}

export default ExploreSliderPFP
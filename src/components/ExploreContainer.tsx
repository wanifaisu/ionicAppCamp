import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  useIonToast,
  IonLoading,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import { useState } from "react";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [present] = useIonToast();
  const [showDes, setShowDes] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const presentToast = (position: "top" | "middle" | "bottom") => {
    if (!showDes) {
      present({
        message: "View button is clicked your can now see discruption!",
        duration: 1500,
        position: position,
        cssClass: "custom-toast",
        buttons: [
          {
            text: "Dismiss",
            role: "cancel",
          },
        ],
      });
    } else {
      present({
        message: "View button is clicked your can't see the discruption now",
        duration: 1500,
        position: position,
      });
    }
  };

  return (
    <div className="container">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Faisal</IonCardSubtitle>
              <IonCardTitle>wani faisal</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              my first ionic project with fully response . and will be used in
              all devices , using react ionic and typescrip this application has
              featues of click a photo
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>Mohand pora shopian kashmir</IonLabel>
              <IonButton
                fill="outline"
                slot="end"
                onClick={() => {
                  setShowDes(!showDes);
                  presentToast("bottom");
                }}
              >
                View
              </IonButton>
            </IonItem>
            {showDes && (
              <IonCardContent>
                my name is faisal ashraf wani i am software developer
              </IonCardContent>
            )}
          </IonCard>
          <IonCard style={{ display: "flex", justifyContent: "center" }}>
            <IonButton onClick={() => setShowLoading(true)}>
              Show Loading
            </IonButton>
            <IonLoading
              cssClass="my-custom-class"
              isOpen={showLoading}
              onDidDismiss={() => setShowLoading(false)}
              message={"Please wait..."}
              duration={3000}
            />
          </IonCard>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default ExploreContainer;

import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>ChatApp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonToolbar>
            <IonTitle> Messages</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle> Chats</IonTitle>
          </IonToolbar>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard style={{ marginTop: "1rem" }}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Home page</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large"></IonTitle>
              </IonToolbar>
            </IonHeader>
            <ExploreContainer name="Home page" />
          </IonContent>
        </IonCard>
      </IonPage>
    </IonPage>
  );
};

export default Tab1;

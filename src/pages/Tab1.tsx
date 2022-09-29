import React, { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonToast,
} from "@ionic/react";

import { globe } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { GridExample } from "../components/GridIonic";
interface personDetails {
  name: string;
  // webviewPath?: string;
}
const initioalState = {
  name: "",
};
function Tab1() {
  const [presentAlert] = useIonAlert();
  const [presentToast] = useIonToast();
  const [personDetails, setPersonDetails] = useState<any>();
  const [itemDetailsArr, setItemDetailsArr] = useState<any>([]);
  const handleSubmit = (data: any) => {
    let newData = [...itemDetailsArr];
    newData.push(data);
    setItemDetailsArr(newData);
  };
  return (
    <IonPage>
      <IonItem>
        <IonButton
          fill="outline"
          slot="start"
          onClick={() =>
            presentAlert({
              header: "Please enter your info",

              inputs: [
                {
                  name: "name",
                  placeholder: "Enter Name",
                },
                {
                  type: "number",
                  name: "age",
                  placeholder: "Enter Age",
                },
                {
                  name: "mobile",
                  type: "number",
                  placeholder: "Enter Mobile Number",
                  attributes: {
                    maxlength: 8,
                  },
                },
                {
                  name: "address",
                  type: "textarea",
                  placeholder: "Enter Address ",
                },
              ],
              buttons: [
                {
                  text: "Cancel",
                  role: "cancel",
                  handler: (data) => console.log("Cancel clicked"),
                },
                {
                  text: "Submit",
                  role: "submit",
                  handler: (data) => {
                    handleSubmit(data);
                    presentToast({
                      message: "User added Successfully!",
                      duration: 1500,
                      icon: globe,
                    });
                  },
                },
              ],
            })
          }
        >
          Add User
        </IonButton>
      </IonItem>
      <GridExample itemDetailsArr={itemDetailsArr} />
    </IonPage>
  );
}

export default Tab1;

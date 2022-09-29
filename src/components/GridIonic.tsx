import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonCard,
  IonItem,
} from "@ionic/react";

export const GridExample = ({ itemDetailsArr }: any) => (
  <IonContent>
    <IonGrid>
      <IonRow style={{ backgroundColor: "green" }}>
        <IonCol>Name</IonCol>
        <IonCol>Age</IonCol>
        <IonCol>Mobile</IonCol>
        <IonCol>Address</IonCol>
      </IonRow>
      <IonRow>
        {itemDetailsArr.map((item: any) => {
          return (
            <>
              <IonCol size="3">
                <IonItem routerLink={`userprofile${item}`}>{item.name}</IonItem>
              </IonCol>
              <IonCol size="3">
                <IonItem>{item.age}</IonItem>
              </IonCol>
              <IonCol size="3">
                {" "}
                <IonItem>{item.mobile}</IonItem>
              </IonCol>
              <IonCol size="3">
                {" "}
                <IonItem>{item.address}</IonItem>
              </IonCol>
            </>
          );
        })}
      </IonRow>
    </IonGrid>
  </IonContent>
);

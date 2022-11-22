import { useRef, useEffect } from 'react';

import { IonButton, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import Header from "../components/Header";

import { GoogleMap } from '@capacitor/google-maps';
import { CapacitorGoogleMaps } from '@capacitor/google-maps/dist/typings/implementation';

interface HomeProps {

}

const Home: React.FC<HomeProps> = ({}) => {
    const mapRef = useRef<HTMLElement>();
    let newMap: GoogleMap;

    useEffect(() => {
        createMap();
    }, [])

    async function createMap() {
        if (!mapRef.current) return;
    
        newMap = await GoogleMap.create({
          id: 'f2fe2a01eec1db3b',
          element: mapRef.current,
          apiKey: process.env.REACT_APP_MAPS_API_KEY as string,
          config: {
            x: 5,
            y: 55,
            center: {
              lat: 44.772182,
              lng: 17.191000
            },
            zoom: 14, styles: [ 
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#1d2c4d"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#8ec3b9"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#1a3646"
                    }
                  ]
                },
                {
                  "featureType": "administrative.country",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#4b6878"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#64779e"
                    }
                  ]
                },
                {
                  "featureType": "administrative.province",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#4b6878"
                    }
                  ]
                },
                {
                  "featureType": "landscape.man_made",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#334e87"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#023e58"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#283d6a"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#6f9ba5"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#1d2c4d"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#023e58"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#3C7680"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#304a7d"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#98a5be"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#1d2c4d"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#2c6675"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#255763"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#b0d5ce"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#023e58"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#98a5be"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#1d2c4d"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#283d6a"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#3a4762"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#0e1626"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#4e6d70"
                    }
                  ]
                }
              ]  
          },
        })

        const markerId = await newMap.addMarker({
            coordinate: {
              lat: 33.6,
              lng: -117.9
            }
        });
    }

    return (
        <IonPage>
            <Header />
            <IonHeader>
                    <IonToolbar>
                        <IonSearchbar placeholder="Search for a location" animated={true} />    
                    </IonToolbar>   
            </IonHeader>
            <IonContent>
                <capacitor-google-map enableCurrentLocation={true} ref={mapRef} style={{
                    display: 'inline-block',
                    height: '99%',
                    width: '100%'
                }}></capacitor-google-map>
            </IonContent>
        </IonPage>
    );
}

export default Home
import React from 'react';
import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';

const Container = Styled.View`
    flex: 1;
`;

const MarkerOnMap = () => {
  return (
    <Container>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 1.33018,
          longitude: 103.92665,
          title: "My House"
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: 103.92588}}
          //image{{uri:'custom_pin_clinic 1'}}
          title= "YSL Bedok Clinic & Surgery"
          description= "Wednesday
          8am–12:30pm
          2–5pm
          6:30–9:30pm
          
          Thursday
          8am–12:30pm
          2–5pm
          6:30–9:30pm
          
          Friday
          8am–12:30pm
          2–5pm
          6:30–9:30pm
          
          Saturday
          8am–12:30pm
          
          Sunday
          8am–12:30pm
          
          Monday
          8am–12:30pm
          2–5pm
          6:30–9:30pm
          
          Tuesday
          8am–12:30pm
          2–5pm
          6:30–9:30pm"

          coordinate={{latitude: 1.33305, longitude: 193.92603}}
          //image{{uri:'custom_pin_clinic 2'}}
          title="S.T. Medical Group"
          description="Wednesday
          8:30am–1pm
          2–4:30pm
          
          Thursday
          8:30am–1pm
          2–4:30pm
          7–9pm
          
          Friday
          8:30am–1pm
          2–4:30pm
          
          Saturday
          8:30am–1pm
          
          Sunday
          9:30am–12pm
          
          Monday
          8:30am–1pm
          2–4:30pm
          7–9pm
          
          Tuesday
          8:30am–1pm
          7–9pm"
        />
        
      </MapView>
    </Container>
  );
};

export default MarkerOnMap;
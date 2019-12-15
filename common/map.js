import React, {useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    mapStyle: {
        width: '100%',
        height: '70%'
    }
})

const Mapa = () =>{
    const [locais, setLocais] = useState('')
    const url = 'http://localhost:8080/api/dados'
    useEffect(()=>{
        fetch(url).then((resp)=>resp.json()).then(async (data)=>{
          await setLocais(data.data)
          console.log(data.data);
          
        })
    }, [])
    console.log('locais: ', typeof locais);
    
    return (
        <MapView style={styles.mapStyle} initialRegion={{
            latitude: -23.9549779, 
            longitude: -46.4147152,
            latitudeDelta: 0.5, 
            longitudeDelta: 0.5}}
            >
                {Array.from(locais).map(local=>(
                    <Marker coordinate={{latitude: local.lat, longitude: local.lng}} />
                ))}
        </MapView>
    )    
}

export default Mapa;
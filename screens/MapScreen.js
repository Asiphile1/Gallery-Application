import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { fetchImages } from '../database/SQLiteDatabase';

const MapScreen = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {images.map(image => (
          <Marker
            key={image.id}
            coordinate={{ latitude: image.latitude, longitude: image.longitude }}
            title="Image Location"
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default MapScreen;

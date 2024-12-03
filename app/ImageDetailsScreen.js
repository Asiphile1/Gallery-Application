import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetailsScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.uri }} style={styles.image} />
      <Text>Latitude: {image.latitude}</Text>
      <Text>Longitude: {image.longitude}</Text>
      <Text>Timestamp: {image.timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  image: { width: 300, height: 300, marginBottom: 20 },
});

export default ImageDetailsScreen;

# GalleryApp

GalleryApp is a cross-platform mobile and web application built using React Native and Expo. The app allows users to browse a gallery of images, view image details, and locate image origins on a map. It supports functionality on Android, iOS, and the web.

## Features

- **Gallery Screen:** Displays a grid of images for users to explore.
- **Image Details Screen:** Provides additional details about a selected image.
- **Map Integration:** Shows the geographic origin of images on an interactive map.
- **Cross-Platform Support:** Fully functional on Android, iOS, and web platforms.

## Technologies Used

- **Frontend:**
  - [React Native](https://reactnative.dev/)
  - [Expo](https://expo.dev/)
  - [React Navigation](https://reactnavigation.org/)
  - [react-native-maps](https://github.com/react-native-maps/react-native-maps) (for mobile maps)
  - [react-leaflet](https://react-leaflet.js.org/) (for web maps)
- **Development Tools:**
  - Expo CLI
  - Node.js
- **Other Dependencies:**
  - `expo-location`: To access user location.
  - `expo-image-picker`: For selecting and uploading images.
  - `react-native-gesture-handler`, `react-native-reanimated`: For better navigation gestures.
  - `expo-splash-screen`: Custom splash screen support.

## Installation

1. Clone the repository:
```
   git clone https://github.com/your-username/GalleryApp.git
   cd GalleryApp
```
2. Install dependencies:
```
npm install
```

3. Start the app:

```
npx expo start
```

4. Test the app on:

* Mobile: Scan the QR code in Expo Go on your device.
* Web: Press w in the terminal to launch the app in a web browser.

## Project Structure

```
GalleryApp/
├── app/                    # Main app directory for pages
│   ├── index.js            # Entry file for the app
│   ├── GalleryScreen.js    # Gallery view component
│   ├── ImageDetailsScreen.js  # Image details component
│   └── MapScreen.js        # Map view component
├── assets/                 # Static assets like images and icons
│   ├── images/
│   ├── favicon.png         # Web favicon
│   └── splash-icon.png     # Splash screen icon
├── node_modules/           # Installed node modules
├── package.json            # Project dependencies and scripts
├── app.json                # Expo configuration
└── README.md               # Project documentation
```

## Configuration

Make sure you have the following configurations in place:

1. Expo App Configuration (app.json):

* Update the app name, icon, and splash screen details.
* Ensure platform-specific configurations like adaptiveIcon for Android and supportsTablet for iOS.

2. Web Maps Configuration:

* Add the Leaflet CSS link to your public/index.html file for web map support:
```
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha512-XQoYMqMTK8LvdlxUmw6tCX00N6CkCEpE9uK1rZnH8p0zv4hWOgGT2P9G+La8N+g41zVAg34YGoF6IH3wxT7S+g=="
  crossorigin=""
/>
```

## Troubleshooting

* "Cannot record touch end without a touch start":

* This error might occur due to improper gesture handling. Ensure you’ve installed and linked react-native-gesture-handler correctly.

* "Unable to resolve module @react-navigation/stack":


* Install the missing navigation stack package:
```
npm install @react-navigation/stack
```

* Web-specific Errors:

* Ensure platform-specific code for web maps is implemented using react-leaflet.

## Future Enhancements

* Add user authentication to secure access.
* Enable users to upload and manage their images.
* Enhance the map functionality to display additional data layers.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
Special thanks to the Expo team and React Native community for their amazing tools and resources, even though it was very difficult to use.


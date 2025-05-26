# Mobile Photo Gallery Application "York"

A React Native mobile application built with Expo that allows users to browse and interact with a beautiful collection of photos from Lorem Picsum. The application features a modern UI, smooth navigation, and image zoom capabilities.

## 🌟 Features

- **Photo Gallery**: Browse through a curated collection of high-quality photos from Lorem Picsum
- **Photo Details**: View detailed information about each photo including author and dimensions
- **Zoom Capability**: Pinch to zoom functionality for detailed photo viewing
- **Modern UI**: Clean and responsive user interface with beautiful transitions
- **Smooth Navigation**: Easy navigation between screens using React Navigation
- **Custom Fonts**: Beautiful typography with Montserrat font family
- **Offline Support**: View previously loaded images even without internet connection

## 🚀 Technologies Used

- [React Native](https://reactnative.dev/) - Mobile application framework
- [Expo](https://expo.dev/) - Development platform
- [React Navigation](https://reactnavigation.org/) - Navigation library
- [Axios](https://axios-http.com/) - HTTP client for API requests
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Smooth animations
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) - Gesture handling

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
```bash
npm install -g expo-cli
```
- [Git](https://git-scm.com/)
- Expo Go app on your mobile device ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

## 📸 API Integration

This application uses the [Lorem Picsum API](https://picsum.photos/) for fetching high-quality photos. The API is free to use and doesn't require any authentication. The application uses the following endpoints:

```javascript
Base URL: https://picsum.photos/v2

Endpoints:
- /list - Get a list of all photos
- /id/{photo_id} - Get specific photo details
- /search - Search for photos
```

Features of the Lorem Picsum API used in this app:
- Browse through a vast collection of high-quality photos
- Get detailed information about each photo
- No API key required
- Reliable and fast image delivery
- Support for different image sizes and formats


## 📥 Installation

1. Clone the repository:
```bash
git clone https://github.com/ErenEgeY/Final-Project.git
```

2. Navigate to the project directory:
```bash
cd Final-Project
```

3. Install dependencies:
```bash
npm install
```

## 🎯 Running the Application

1. Start the development server:
```bash
npx expo start
```

2. Run on your device:
   - 📱 **Physical Device**: 
     - Install Expo Go app
     - Scan QR code with your camera (iOS) or Expo Go app (Android)
   - 💻 **Emulator**:
     - Press 'a' for Android emulator
     - Press 'i' for iOS simulator

## 📱 Available Scripts

- `npm start` or `expo start`: Start the development server
- `npm android` or `expo start --android`: Start for Android
- `npm ios` or `expo start --ios`: Start for iOS

## 🔧 Troubleshooting

Common issues and their solutions:

1. **Images not loading**:
   - Check your internet connection
   - Verify that the Lorem Picsum API is accessible
   - Clear the app cache

2. **Metro Bundler issues**:
```bash
expo start --clear
```

3. **Dependencies issues**:
```bash
npm install --force
```

4. **Cache issues**:
```bash
expo r -c
```

## 📦 Dependencies

```json
{
  "@expo-google-fonts/montserrat": "^0.3.0",
  "@expo/react-native-action-sheet": "^4.1.1",
  "@expo/vector-icons": "^14.1.0",
  "@react-navigation/bottom-tabs": "^7.3.13",
  "@react-navigation/native": "^7.1.9",
  "@react-navigation/native-stack": "^7.3.13",
  "@react-navigation/stack": "^7.2.10",
  "axios": "^1.9.0",
  "react-native-gesture-handler": "^2.25.0",
  "react-native-image-zoom-viewer": "^3.0.1",
  "react-native-reanimated": "^3.17.5",
  "react-native-safe-area-context": "^5.4.0",
  "react-native-screens": "^4.10.0",
  "zustand": "^5.0.4"
}
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Eren Ege YILDIZ - [eren_yildiz_07@outlook.com]

Project Link: [https://github.com/ErenEgeY/Final-Project]
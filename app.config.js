import 'dotenv/config';

export default {
  "expo": {
    "name": "chatbot-saude",
    "slug": "chatbot-saude",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/chatMed.png",
    "userInterfaceStyle": "light",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/chatMed.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/chatMed.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.anamorais.chatbotsaude" // Add your unique package name here
    },
    "web": {
      "favicon": "./assets/chatMed.png"
    },
    "extra": {
      "API_KEY": process.env.API_KEY,
      "eas": {
        "projectId": "3ad52b83-edbb-40e9-922d-7808bb12f878"
      }
    }
  }
};

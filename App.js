import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from './Navigator';


const getFont = () => {
  return Font.loadAsync({
    museo: require("./assets/fonts/MuseoModerno-VariableFont_wght.ttf"),
  });
};

export default function App() {
  const [fonts, setFonts] = useState(false);

  if (fonts) {
    return (
      <Navigator />
    );
  }else {
    return <AppLoading startAsync={getFont} onFinish={() => setFonts(true)} />;
  }
}


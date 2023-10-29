import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

import { styles } from "./styles/home-screen.styles";
import Header from "../components/home/header";
import SearchBar from "../components/home/search-bar";
import Slider from "../components/home/slider";

export default function HomeScreen() {
  const { isLoaded, signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={styles.ScreenContainer}>
      <Header />

      <SearchBar setSearchText={(value) => console.log(value)} />

      <Slider />
      <TouchableOpacity onPress={signOut} style={styles.Button}>
        <Text style={styles.ButtonText}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
}

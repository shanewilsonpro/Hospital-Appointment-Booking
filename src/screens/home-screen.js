import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

import { styles } from "./styles/home-screen.styles";

export default function HomeScreen() {
  const { isLoaded, signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={styles.ScreenContainer}>
      <TouchableOpacity onPress={signOut} style={styles.Button}>
        <Text style={styles.ButtonText}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
}

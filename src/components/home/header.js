import { View, Image, Text } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles/header.styles";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View style={styles.Container}>
      <View style={styles.LeftContainer}>
        <Image style={styles.ProfileImage} source={{ uri: user.imageUrl }} />
        <View>
          <Text style={styles.HelloText}>Hello, 👋</Text>
          <Text style={styles.UserFullNameText}>{user.fullName}</Text>
        </View>
      </View>
      <Ionicons name="notifications-outline" size={28} color="black" />
    </View>
  );
}

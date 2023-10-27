import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

/* Styles */
import { styles } from "./styles/login-screen.styles";

export default function Login() {
  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <Image
        source={require("../../assets/images/app-home-screen.png")}
        style={styles.AppImage}
      />

      <View style={styles.MessagesContainer}>
        <Text style={styles.Heading}>Your Ultimate Doctor</Text>
        <Text style={styles.Heading}>Appointment Booking App</Text>
        <Text style={styles.Subheading}>
          Book appointments effortlessly and manager your health journey
        </Text>

        <TouchableOpacity
          onPress={() => console.log("Clicked")}
          style={styles.Button}
        >
          <Text style={styles.ButtonText}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

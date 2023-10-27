import { useCallback } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { maybeCompleteAuthSession } from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/warm-up-browser";

/* Styles */
import { styles } from "./styles/login-screen.styles";

maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onGooglePress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

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

        <TouchableOpacity onPress={onGooglePress} style={styles.Button}>
          <Text style={styles.ButtonText}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

import { StyleSheet, Dimensions } from "react-native";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../../theme/theme";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.primaryLightGrayHex,
  },
  AppImage: {
    width: 250,
    height: 500,
    objectFit: "cover",
    marginTop: 25,
    borderRadius: 20,
    borderWidth: 6,
  },
  MessagesContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
    padding: SPACING.space_24,
    alignItems: "center",
    marginTop: -150,
    borderTopLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
  },
  Heading: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_bold,
    textAlign: "center",
  },
  Subheading: {
    textAlign: "center",
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  Button: {
    padding: SPACING.space_12,
    backgroundColor: COLORS.primaryBlueHex,
    borderRadius: BORDERRADIUS.radius_25,
    alignItems: "center",
    marginTop: SPACING.space_30,
    width: width * 0.8,
  },
  ButtonText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryWhiteHex,
  },
});

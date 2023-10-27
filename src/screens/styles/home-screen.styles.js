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

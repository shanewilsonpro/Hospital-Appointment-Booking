import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, SPACING } from "../../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    marginHorizontal: SPACING.space_15,
  },
  BarContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderWidth: 0.6,
    borderColor: COLORS.primaryGrayHex,
    padding: SPACING.space_8,
    borderRadius: BORDERRADIUS.radius_8,
  },
  TextInput: {
    width: "100%",
  },
});

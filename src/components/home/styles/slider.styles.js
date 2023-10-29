import { StyleSheet, Dimensions } from "react-native";
import { BORDERRADIUS, SPACING } from "../../../theme/theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flex: 1,
    marginTop: SPACING.space_12,
    marginHorizontal: SPACING.space_16,
    maxWidth: width * 0.92,
    alignSelf: "center",
  },
  Image: {
    width: width * 0.9,
    height: 170,
    borderRadius: BORDERRADIUS.radius_10,
    margin: SPACING.space_2,
  },
});

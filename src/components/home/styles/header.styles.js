import { StyleSheet } from "react-native";
import {
  BORDERRADIUS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SPACING.space_20,
  },
  LeftContainer: {
    display: "flex",
    flexDirection: "row",
    gap: SPACING.space_8,
    alignItems: "center",
  },
  ProfileImage: {
    width: 45,
    height: 45,
    borderRadius: BORDERRADIUS.radius_25,
  },
  HelloText: {
    fontFamily: FONTFAMILY.poppins_regular,
  },
  UserFullNameText: {
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_bold,
  },
});

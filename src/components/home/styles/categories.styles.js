import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    marginTop: SPACING.space_12,
    marginHorizontal: SPACING.space_16,
  },
  CategoriesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  MainText: {
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  SeeAllText: {
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryBlueHex,
  },
  ItemContainer: {
    alignItems: "center",
  },
  ImageContainer: {
    backgroundColor: COLORS.primaryLightBlueHex,
    padding: SPACING.space_15,
    borderRadius: 50,
  },
  CategoryImage: {
    width: 30,
    height: 30,
  },
  CategoryName: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    marginTop: SPACING.space_8,
  },
});

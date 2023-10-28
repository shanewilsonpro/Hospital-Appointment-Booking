import { useState } from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme/theme";

import { styles } from "./styles/search-bar.styles";

export default function SearchBar({ setSearchText }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <View style={styles.Container}>
      <View style={styles.BarContainer}>
        <Ionicons
          name="search-outline"
          size={24}
          color={COLORS.primaryBlueHex}
        />
        <TextInput
          placeholder="Search"
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
          style={styles.TextInput}
        />
      </View>
    </View>
  );
}

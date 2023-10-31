import { View, Image, FlatList, Dimensions } from "react-native";

import { styles } from "./styles/slider.styles";
import { SPACING } from "../../theme/theme";
import globalApi from "../../services/global-api";
import { useEffect, useState } from "react";

const { width } = Dimensions.get("window");

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    globalApi.getSlider().then((resp) => {
      setSliderList(resp.data.data);
    });
  };

  return (
    <View style={styles.Container}>
      <FlatList
        data={sliderList}
        keyExtractor={(item) => item.id}
        bounces={false}
        snapToInterval={width * 0.9 + SPACING.space_16}
        horizontal={true}
        contentContainerStyle={{ gap: SPACING.space_16 / 2 }}
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.attributes.Image.data.attributes.url }}
            style={styles.Image}
          />
        )}
      />
    </View>
  );
}

import { View, Image, FlatList, Dimensions } from "react-native";

import { styles } from "./styles/slider.styles";
import { SPACING } from "../../theme/theme";

const { width } = Dimensions.get("window");

export default function Slider() {
  const sliderList = [
    {
      id: 1,
      name: "Slider 1",
      imageUrl:
        "https://img.freepik.com/free-vector/team-doctors-medical-booking-app_23-2148552962.jpg?w=1380&t=st=1698601889~exp=1698602489~hmac=5e6a0f6846c7145697b955fe10565dd313827a35d73ce1cc0cbe0b68ba09d91d",
    },
    {
      id: 2,
      name: "slider 2",
      imageUrl:
        "https://img.freepik.com/premium-vector/doctors-provide-online-advice-patients-coronavirus-outbreak-using-video-calling_1150-43292.jpg?w=2000",
    },
  ];
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
          <Image source={{ uri: item.imageUrl }} style={styles.Image} />
        )}
      />
    </View>
  );
}

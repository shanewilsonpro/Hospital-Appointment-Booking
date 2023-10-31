import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import globalApi from "../../services/global-api";

import { styles } from "./styles/categories.styles";

export default function Categories() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    globalApi.getCategories().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  if (!categoryList) {
    return null;
  }

  return (
    <View style={styles.Container}>
      <View style={styles.CategoriesContainer}>
        <Text style={styles.MainText}>Doctor Speciality</Text>
        <Text style={styles.SeeAllText}>See All</Text>
      </View>

      <FlatList
        data={categoryList}
        numColumns={4}
        style={{ marginTop: 5 }}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
        renderItem={({ item, index }) =>
          index < 4 && (
            <View style={styles.ItemContainer}>
              <View style={styles.ImageContainer}>
                <Image
                  source={{ uri: item.attributes.Icon.data[0].attributes.url }}
                  style={styles.CategoryImage}
                />
              </View>
              <Text style={styles.CategoryName}>{item.attributes.Name}</Text>
            </View>
          )
        }
      />
    </View>
  );
}

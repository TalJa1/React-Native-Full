import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import data from "../data/storage";

const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

interface CarouselItem {
  title: string;
  body: string;
  imgUrl: string;
}

interface CarouselCardItemProps {
  item: CarouselItem;
  index: number;
}

// npm install --save react-native-snap-carousel@4.0.0-beta.6
const CarouselSilderPage = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  const CarouselCardItem: React.FC<CarouselCardItemProps> = ({
    item,
    index,
  }) => {
    return (
      <View style={styles.container} key={index}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 0.3,
        }}
      ></View>
      <Carousel
        layout="stack" // tinder | default | stack
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        vertical={false} // Remenber adding this to make the error disappears
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)} // for setting index for pagging
        inactiveSlideShift={0}
        useScrollView={true}
      />
      {/* Add pagging if needed */}
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselSilderPage;

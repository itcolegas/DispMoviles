import React from 'react';
import { View, StyleSheet} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH, ITEM_HEIGHT } from './CarouselCardItem';

import data from './Test/data';

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


  return (
    <View style={styles.carouselContainer}>
      <Carousel
        containerCustomStyle={{
            height: ITEM_HEIGHT*0.8
        }}
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        containerStyle={{
            
        }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.7}
        tappableDots={true}
      />
    </View>

  )
}

const styles = StyleSheet.create({
    carouselContainer: {
        
    }
})

export default CarouselCards
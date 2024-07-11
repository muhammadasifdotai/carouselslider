import { FlatList, View, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import Slides from '../../components/Common/OnboardingSlides/Slides';
import OnboardingItem from '../../components/Common/OnboardingItem/OnboardingItem';
import Paginator from '../../components/Common/OnboardingPaginator/Paginator';
import NextButton from '../../components/Common/OnboardingNextButton/NextButton';
import styles from './styles';

// our onboarding component contain flatList, paginator and next button

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log('Last item.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={Slides} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
      />
    </View>
  );
};

export default Onboarding;
import React, { PureComponent } from 'react'
import {View, Text, Button} from "react-native"
import Carousel from 'react-native-snap-carousel';
import styles, { colors } from '../../styles/index.style';
import { sliderWidth, itemWidth } from '../../styles/sliderEntry.style';
import SliderEntry from '../../components/sliderEntry';
export const ENTRIES2 = [
  {
      title: 'Favourites landscapes 1',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
  },
  {
      title: 'Favourites landscapes 2',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
  },
  {
      title: 'Favourites landscapes 3',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat',
      illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
  },
  {
      title: 'Favourites landscapes 4',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/cA8zoGel.jpg'
  },
  {
      title: 'Favourites landscapes 5',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/pewusMzl.jpg'
  },
  {
      title: 'Favourites landscapes 6',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat',
      illustration: 'https://i.imgur.com/l49aYS3l.jpg'
  }
];
class DashBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      entries: [
        { title: 'hello' },
        { title: 'world' },
      ]
    }
  }
  _renderLightItem ({item, index}) {
    return <SliderEntry data={item} even={false} />;
}
  layoutExample (number, title, type) {
    const isTinder = type === 'tinder';
    return (
        <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
            <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>{`Example ${number}`}</Text>
            <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>{title}</Text>
            <Carousel
              data={ ENTRIES2}
              renderItem={ this._renderLightItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              layout={type}
              loop={true}
            />
        </View>
    );
}

  render () {
    const example4 = this.layoutExample(4, '"Tinder-like" layout | Loop', 'tinder');
    return (
      <View>
        { example4 }
      </View>
 ); 
}}

export default DashBoard
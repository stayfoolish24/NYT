import React, { Component } from 'react'
import { TabBarIOS, Text, Alert, Vibration, StatusBar } from 'react-native'
import NewsFeed from './NewsFeed'
import Search from './Search'
import * as globalStyles from '../styles/global'

//iOS에서 상태바의 내용을 흰색으로
Statusbar.setBarStyle('light-content')

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'newsFeed'
    }
  }

  showBookmarkAlert() {
    Vibration.vibrate()
    Alert.alert(
      'Comming Sonn!',
      'We`re hard at work on this feature, check back in the near future.',
      [{ text: 'OK', onPress: () => console.log('User pressed OK') }]
    )
  }
  render() {
    return (
      <TabBarIOS
        barTintColor={globalStyles.BAR_COLOR}
        tintColor={globalStyles.LINK_COLOR}
        translucent={false}
      >
        <TabBarIOS.Item
          systemIcon={'featured'}
          selected={this.state.tab === 'newsFeed'}
          onPress={() => this.setState({ tab: 'newsFeed' })}
        >
          <NewsFeed />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'search'}
          selected={this.state.tab === 'search'}
          onPress={() => this.setState({ tab: 'search' })}
        >
          <Search />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'bookmarks'}
          selected={this.state.tab === 'bookmarks'}
          onPress={() => this.setState({ tab: 'bookmarks' })}
        >
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

export default HomeScreen

/* eslint-disable */
import * as React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/common/Button';
import { screen } from '../../global/Screens';


export default class TestScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someStateNumber: this.props.somePropNumber || 0,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={{ textColor: 'black', fontSize: 26 }}>
          Here is the prop number!
          {'\n'}
          {this.props.somePropNumber || 0}
        </Text>
        <Text style={{ textColor: 'black', fontSize: 26 }}>
          Here is the state!
          {JSON.stringify(this.state)}
        </Text>
        <Button
          title='Increase number'
          onPress={() => this.setState((prevState) =>
            ({ someStateNumber: prevState.someStateNumber + 1 }),
          )}
        />
        <Button
          title='Push new screen'
          onPress={() => this.props.navigator.push({
            ...screen('INTRO_SCREEN'),
            passProps: {
              somePropNumber: (this.props.somePropNumber || 0) + 1,
            },
          })}
        />
        <Button
          title='Show new modal'
          onPress={() => this.props.navigator.showModal({
            ...screen('INTRO_SCREEN'),
            passProps: {
              somePropNumber: (this.props.somePropNumber || 0) + 1,
            },
          })}
        />
        <Button
          title='Pop'
          onPress={() => this.props.navigator.pop()}
        />
        <Button
          title='Dismiss modal'
          onPress={() => this.props.navigator.dismissModal()}
        />

      </View>
    );
  }
}
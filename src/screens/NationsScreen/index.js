import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NationsListScreen from './NationsListScreen';
import { switchNationTab, openNation, requestFetchNations } from '../../actions/nations';
import Screens from '../../global/Screens';
import { resolveNation } from '../../utils/nations';
import Colors from "../../global/Colors";
import NavigatorComponent from "../../components/common/NavigatorComponent";

const NEW_BUTTON = 'NEW_BUTTON';

class NationsScreen extends NavigatorComponent {

  constructor(props) {
    super(props);

    this.props.navigator.setButtons(
      {
        leftButtons: [],
        rightButtons: [{
          title: 'New',
          id: NEW_BUTTON,
          buttonColor: Colors.navigationColor,
        }],
      }
    );
    this.props.fetchNations();
  }

  onNavBarButtonPress(id) {
    if (id === NEW_BUTTON) {
      return (
        this.props.navigator.showModal({
          ...Screens.NATION_CREATE_SCREEN,
        })
      );
    }
  }

  render() {
    return (
      <NationsListScreen onSelectItem={this._onSelectItem} {...this.props}/>
    );
  }

  _onSelectItem = (id) => {
    const nation = resolveNation(this.props.nations, id);

    if (!nation) {
      return;
    }

    this.props.openNation(id);

    this.props.navigator.push({
      ...Screens.NATION_DETAILS_SCREEN,
    });
  };

}

NationsScreen.PropTypes = {
  navigator: PropTypes.object,
};

const mapStateToProps = state => ({
  ...state.nations
});

const mapDispatchToProps = dispatch => ({
  onSelectTab(index) {
    dispatch(switchNationTab(index));
  },
  openNation(id) {
    dispatch(openNation(id));
  },
  fetchNations() {
    dispatch(requestFetchNations());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NationsScreen);
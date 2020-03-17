import React, { Component } from 'react';
import { placeInfo, detailInfo, about } from '../data';

const InfoContext = React.createContext();

class InfoProvider extends Component {
  state = {
    info: placeInfo,
    
    detailInfo: detailInfo,
    about: about
  };

  getItem = id => {
    const item = this.state.info.find(item => item.id === id);
    return item;
  };

  handleDetail = id => {
    const item = this.getItem(id);
    this.setState(() => {
      return {
        detailInfo: item
      };
    });
  };

  render() {
    return (
      <InfoContext.Provider
        value={{
          info: this.state.info,
     
          maps: this.state.maps,
          headerTitle: this.state.headerTitle,
          headerSubTitle: this.state.headerSubTitle,
          headerText: this.state.headerText,
          detailInfo: this.state.detailInfo,
          about: this.state.about,
          name: this.state.name,
          avatar: this.state.avatar,
          comment: this.state.comment,
          handleDetail: this.handleDetail
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default function Repo({ route }) {
  const { repo } = route.params;
  return <WebView source={{ uri: repo.html_url }} style={{ flex: 1 }} />;
}

Repo.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      repo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

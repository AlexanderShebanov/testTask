import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView, { WebViewMessageEvent } from 'react-native-webview';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ISite } from '../../models.ts';
import { generalStyles } from '../../utils/styles';

import { injectedJS } from './InitialScreen.data';
import { styles } from './InitialScreen.styles';
import { IInitialScreenProps } from './InitialScreen.types';

import { ExtendedText } from '#components';
import { siteSlice } from '#redux/slices/sitesSlice';

export const InitialScreen: React.FC<IInitialScreenProps> = () => {
  const dispatch = useAppDispatch();
  const sites = useAppSelector(state => state.sites.sites.data) || [];
  const [selectedSite, setSelectedSite] = useState<ISite | null>(null);
  const [authorRights, setAuthorRights] = useState<string | null>(null);
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    dispatch(siteSlice.actions.getSites());
  }, [dispatch]);

  const handleSitePress = useCallback((site: ISite) => {
    setSelectedSite(site);
  }, []);

  const handleWVLoadEnd = () => {
    const injectedJS = `
      window.ReactNativeWebView.postMessage(JSON.stringify(document.documentElement.outerHTML));
    `;
    webViewRef.current?.injectJavaScript(injectedJS);
  };

  const handleWVMessage = (event: WebViewMessageEvent) => {
    try {
      const html = event.nativeEvent.data;
      const regex = /©.*?Inc\./;
      const match = html.match(regex);
      if (match) {
        setAuthorRights(match[0]);
      } else {
        setAuthorRights('No author rights found on this website.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={generalStyles.flex}>
      <View style={generalStyles.flex}>
        <View style={[generalStyles.aiCenter, generalStyles.jcCenter]}>
          {sites &&
            sites.map(site => (
              <TouchableOpacity
                key={site.name}
                onPress={() => handleSitePress(site)}
                style={styles.siteNameContainer}>
                <ExtendedText preset="fs18">{site.name}</ExtendedText>
              </TouchableOpacity>
            ))}
        </View>
        {selectedSite && (
          <View style={generalStyles.flex}>
            <WebView
              originWhitelist={['*']}
              source={{ uri: selectedSite.url }}
              onLoadEnd={handleWVLoadEnd}
              onMessage={handleWVMessage}
              onError={console.error}
              javaScriptEnabled
              injectedJavaScript={injectedJS}
            />
          </View>
        )}
        {authorRights && (
          <View style={styles.copyrightTextContainer}>
            <ExtendedText preset="fs18">{authorRights}</ExtendedText>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg';

const Footer = props => {
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={20}
          viewBox="0 0 19 20"
          {...props}
        >
          <Defs>
            <ClipPath id="prefix__e">
              <Path
                data-name="Path 51"
                d="M70-91l-5.5 9h11zm0 3.84L71.93-84h-3.87zM75.5-80a4.494 4.494 0 00-4.5 4.5 4.494 4.494 0 004.5 4.5 4.494 4.494 0 004.5-4.5 4.494 4.494 0 00-4.5-4.5zm0 7a2.5 2.5 0 01-2.5-2.5 2.5 2.5 0 012.5-2.5 2.5 2.5 0 012.5 2.5 2.5 2.5 0 01-2.5 2.5zM61-71.5h8v-8h-8zm2-6h4v4h-4z"
                fill="none"
              />
            </ClipPath>
            <ClipPath id="prefix__f">
              <Path data-name="Path 50" d="M0 0h414v-896H0z" fill="none" />
            </ClipPath>
          </Defs>
          <G
            data-name="Group 40"
            transform="translate(-61 91)"
            clipPath="url(#prefix__e)"
          >
            <G data-name="Group 39" clipPath="url(#prefix__f)">
              <Path data-name="Path 49" d="M56-96h29v30H56z" />
            </G>
          </G>
        </Svg>
        <Text style={styles.tabText}>Wearebles</Text>
      </View>

      <View style={styles.tab}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          {...props}
        >
          <Defs>
            <ClipPath id="prefix__a">
              <Path
                data-name="Path 57"
                d="M204-81.25a1.25 1.25 0 00-1.25 1.25 1.25 1.25 0 001.25 1.25 1.25 1.25 0 001.25-1.25 1.25 1.25 0 00-1.25-1.25zm6 0a1.25 1.25 0 00-1.25 1.25 1.25 1.25 0 001.25 1.25 1.25 1.25 0 001.25-1.25 1.25 1.25 0 00-1.25-1.25zM207-91a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10zm0 18a8.011 8.011 0 01-8-8 8.108 8.108 0 01.05-.86 10.062 10.062 0 005.21-5.37 9.974 9.974 0 008.16 4.23 9.76 9.76 0 002.25-.26A7.966 7.966 0 01215-81a8.011 8.011 0 01-8 8z"
                fill="none"
              />
            </ClipPath>
            <ClipPath id="prefix__b">
              <Path data-name="Path 56" d="M0 0h414v-896H0z" fill="none" />
            </ClipPath>
          </Defs>
          <G
            data-name="Group 44"
            transform="translate(-197 91)"
            clipPath="url(#prefix__a)"
          >
            <G data-name="Group 43" clipPath="url(#prefix__b)">
              <Path data-name="Path 55" d="M192-96h30v30h-30z" fill="#a0a9b7" />
            </G>
          </G>
        </Svg>
        <Text style={styles.tabTextInactive}>Profile</Text>
      </View>

      <View style={styles.tab}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          {...props}
        >
          <Defs>
            <ClipPath id="prefix__c">
              <Path
                data-name="Path 54"
                d="M337-91a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10zm0 18a8.011 8.011 0 01-8-8 8.011 8.011 0 018-8 8.011 8.011 0 018 8 8.011 8.011 0 01-8 8zm-1-4h2v2h-2zm1.61-9.96a4 4 0 00-4.43 2.79.907.907 0 00.87 1.17h.2a.963.963 0 00.88-.67 2 2 0 012.3-1.28 2.023 2.023 0 011.57 2.1c-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02s-.02.03-.03.05a3.33 3.33 0 00-.25.5c-.01.03-.03.05-.04.08a.631.631 0 00-.02.07A3.717 3.717 0 00336-78h2a2.124 2.124 0 01.28-1.07c.02-.03.03-.06.05-.09a2.761 2.761 0 01.28-.39c.01-.01.02-.03.03-.04a3.512 3.512 0 01.33-.34c.96-.91 2.26-1.65 1.99-3.56a4.075 4.075 0 00-3.35-3.47z"
                fill="none"
              />
            </ClipPath>
            <ClipPath id="prefix__d">
              <Path data-name="Path 53" d="M0 0h414v-896H0z" fill="none" />
            </ClipPath>
          </Defs>
          <G
            data-name="Group 42"
            transform="translate(-327 91)"
            clipPath="url(#prefix__c)"
          >
            <G data-name="Group 41" clipPath="url(#prefix__d)">
              <Path data-name="Path 52" d="M322-96h30v30h-30z" fill="#a0a9b7" />
            </G>
          </G>
        </Svg>
        <Text style={styles.tabTextInactive}>Help</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    height: 117
  },
  tab: {
    width: 56,
    height: 56,
    alignItems: 'center'
  },
  tabText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 5
  },
  tabTextInactive: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 5,
    color: '#A0A9B8'
  }
});

export default Footer;

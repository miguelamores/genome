import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg';

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
      >
        <Defs>
          <ClipPath id="prefix__a">
            <Path
              data-name="Path 219"
              d="M218.286-489.286h-8.571v8.571A1.719 1.719 0 01208-479a1.719 1.719 0 01-1.714-1.714v-8.571h-8.571A1.719 1.719 0 01196-491a1.719 1.719 0 011.714-1.714h8.571v-8.571A1.719 1.719 0 01208-503a1.719 1.719 0 011.714 1.714v8.571h8.571A1.719 1.719 0 01220-491a1.719 1.719 0 01-1.714 1.714z"
              fill="none"
            />
          </ClipPath>
          <ClipPath id="prefix__b">
            <Path data-name="Path 218" d="M0 0h414v-896H0z" fill="none" />
          </ClipPath>
        </Defs>
        <G
          data-name="Group 231"
          transform="translate(-196 503)"
          clipPath="url(#prefix__a)"
        >
          <G data-name="Group 230" clipPath="url(#prefix__b)">
            <Path data-name="Path 217" d="M191-508h34v34h-34z" fill="#fff" />
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424A93',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 50
  }
});

export default AddButton;

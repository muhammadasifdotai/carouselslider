import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const NextButton = ({ scrollTo }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={scrollTo} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('LoginScreen')} style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NextButton;
import { Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function FallbackText({ children }) {
  return <Text style={styles.fallbackText}>{children}</Text>;
}

export default FallbackText;

const styles = StyleSheet.create({
  fallbackText: {
    textAlign: 'center',
    color: GlobalStyles.colors.primary200,
    fontSize: 16,
    marginTop: 24,
  },
});

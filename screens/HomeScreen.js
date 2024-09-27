import React, { useContext } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { auth } from "../firebaseConfig";
import { AuthContext } from "../api/AuthContext";

export const HomeScreen = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    auth.signOut().catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <View style={styles.container}>
      {user && <Text>Chào mừng, {user.email}!</Text>}
      <Button title="Sign Out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

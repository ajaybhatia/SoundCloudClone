import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>More</Text>
      </View>
      <View style={styles.picContainer}>
        <View style={styles.picWrapper}>
          <Image
            source={require("../assets/images/profile-pic.jpg")}
            style={styles.pic}
            resizeMode="contain"
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={{ fontSize: 18, color: "#5d5d5d" }}>Mr-Jerry Kay</Text>
          <TouchableOpacity>
            <Text style={{ color: "#a3a3a3" }}>View public profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>Activity</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>Record</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>Settings</Text>
        </View>
        <View
          style={[
            styles.listItem,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <Text style={styles.listItemText}>Install SoundCloud Pulse app</Text>
          <Text style={{ color: "#a5a5a5" }}>for Creators</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e9e9",
  },
  header: {
    backgroundColor: "#fff",
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    padding: 10,
    color: "#777",
  },
  picContainer: {
    marginTop: 20,
    height: 120,
    padding: 10,
    paddingLeft: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  picWrapper: {
    flex: 1,
  },
  pic: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 100,
  },
  profileInfo: {
    flex: 2,
    justifyContent: "center",
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    marginTop: 1.5,
    padding: 15,
    backgroundColor: "#fff",
  },
  listItemText: {
    color: "#5d5d5d",
  },
});

export default Profile;

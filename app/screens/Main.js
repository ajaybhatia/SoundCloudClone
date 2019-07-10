import React, { useState } from "react";
import { StyleSheet, View, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from "./Home";
import Profile from "./Profile";
import Stream from "./Stream";
import Search from "./Search";
import Library from "./Library";

const Main = () => {
  const [index, setIndex] = useState(4);

  const onPress = idx => setIndex(idx);

  const loadComponent = () => {
    let Component = null;

    switch (index) {
      case 0:
        Component = <Home />;
        break;

      case 1:
        Component = <Stream />;
        break;

      case 2:
        Component = <Search />;
        break;

      case 3:
        Component = <Library />;
        break;

      case 4:
        Component = <Profile />;
        break;
    }

    return Component;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{loadComponent()}</View>
      <View style={styles.footer}>
        <FooterTab iconName="home" order={0} index={index} onPress={onPress} />
        <FooterTab
          iconName="flash-on"
          order={1}
          index={index}
          onPress={onPress}
        />
        <FooterTab
          iconName="search"
          order={2}
          index={index}
          onPress={onPress}
        />
        <FooterTab
          iconName="view-week"
          order={3}
          index={index}
          onPress={onPress}
        />
        <FooterTab iconName="menu" order={4} index={index} onPress={onPress} />
      </View>
    </View>
  );
};

const FooterTab = ({ order, index, iconName, onPress }) => {
  return (
    <View style={styles.footerTabIcon}>
      <TouchableNativeFeedback
        style={styles.footerTab}
        background={TouchableNativeFeedback.Ripple(
          "rgba(210, 210, 210, 0.5)",
          true
        )}
        onPress={() => onPress(order)}
      >
        <View style={styles.innerFooterTabIcon}>
          <Icon
            name={iconName}
            size={32}
            style={[styles.icon, order === index && { color: "#fff" }]}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
  footerTab: {
    borderRadius: 40,
  },
  footerTabIcon: {
    flex: 1,
    borderRadius: 40,
  },
  innerFooterTabIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    // borderRadius: 40,
  },
  icon: {
    color: "#757575",
  },
});

export default Main;

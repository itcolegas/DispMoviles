import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Picker } from "@react-native-picker/picker";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../components/CustomButton";
import MockProbelm from "./MockProblem";

const easy = {
  name: "Two Sum",
  category: "Array",
  difficulty: "easy",
};
const medium = {
  name: "ZigZag Conversion",
  category: "String",
  difficulty: "medium",
};

const hard = {
  name: "Recover Binary Search Tree",
  category: "Tree",
  difficulty: "hard",
};

export default function MockInterview({ navigation }) {
  const [opc, setOpc] = React.useState("");
  const [image, setImage] = useState(null);
  const [diff, setDiff] = useState("Easy");
  const [problem, setProblem] = useState(easy);
  const [n_problems, setProblems] = useState(1);
  const [isPlaying, setPlaying] = useState(false);

  const img_vector = require("../assets/mocki-logoV.png");
  const text = `Welcome to your Mock Interview! You're going to have 40 minutes to complete ${n_problems} ${diff} problem. Remember to apply the tips that can be found in our Tips section; think out loud, structure your ideas, etc. Good Luck!`;

  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  const getButtonStyle = (d) => {
    return {
      backgroundColor: d === diff ? "#6DD98C" : "#84868a",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: "auto",
      marginRight: 5,
      marginLeft: 5,
    };
  };

  return (
    <ScrollView>
      <View style={styles.menu}>
        <View style={styles.imageContainer}>
          <Image source={img_vector} style={{ width: 200, height: 50 }} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Mock Interview</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.textBody}>{text}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {setDiff("Easy"); setProblem(easy);}}
            style={getButtonStyle("Easy")}
            key={0}
          >
            <Text style={styles.appButtonText}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {setDiff("Medium"); setProblem(medium);}}
            style={getButtonStyle("Intermediate")}
            key={1}
            enabled={false}
          >
            <Text style={styles.appButtonText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {setDiff("Hard"); setProblem(hard)}}
            style={getButtonStyle("Hard")}
            key={2}
          >
            <Text style={styles.appButtonText}>Hard</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 15, marginBottom: 15 }}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={40 * 60}
            strokeWidth={15}
            colors={[
              ["#6DD98C", 0.4],
              ["#F7B801", 0.4],
              ["#A30000", 0.2],
            ]}
          >
            {({ remainingTime, animatedColor }) => (
              <>
                <Animated.Text
                  style={{
                    color: animatedColor,
                    fontSize: 13,
                    marginBottom: 2,
                  }}
                >
                  Remaining
                </Animated.Text>
                <Animated.Text style={{ color: animatedColor, fontSize: 30 }}>
                  {`${Math.floor(remainingTime / 60)}:${remainingTime % 60}`}
                </Animated.Text>
                <Animated.Text
                  style={{ color: animatedColor, fontSize: 13, marginTop: 2 }}
                >
                  Minutes
                </Animated.Text>
              </>
            )}
          </CountdownCircleTimer>
          <View style={{ paddingTop: 15 }}>
            <TouchableOpacity
              onPress={() => setPlaying(!isPlaying)}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}>
                {isPlaying ? "Pause Timer" : "Start Timer"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <MockProbelm data={problem} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "center",
    padding: 20,
    overflow: "scroll",
  },
  buttonContainer: {
    height: hp("10%"),
    paddingRight: 15,
    paddingLeft: 15,
  },
  bodyContainer: {
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  pickerContainer: {
    flexDirection: "row",
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  textBody: {
    color: "white",
    fontSize: 16,
    textAlign: "justify",
  },
  imageContainer: {
    height: hp("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    padding: 5,
  },
  buttonsContainer: {
    alignItems: "center",
    flex: 1,
    padding: 60,
    justifyContent: "space-between",
  },
  appButtonText: {
    fontSize: 18,
    color: "#7E8080",
    fontWeight: "bold",
    alignSelf: "center",
  },
  titleText: {
    paddingTop: 5,
    fontSize: 30,
    color: "white",
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  appButtonContainer: {
    backgroundColor: "#6DD98C",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "auto",
    marginRight: 5,
    marginLeft: 5,
  },
  buttonContainer: {
    paddingBottom: 20,
    flexDirection: "row",
  },
});

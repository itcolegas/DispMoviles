import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    LineChart,
  } from "react-native-chart-kit";

export default function LineGraph(){
    return (
        <LineChart
            data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
            datasets: [
                {
                data: [
                    1,
                    2,
                    4,
                    4,
                    5,
                    7
                ]
                }
            ]
            }}
            width={wp('90%')} // from react-native
            height={hp('30%')}
            
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "green"
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
        />
    )
}
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    LineChart,
  } from "react-native-chart-kit";

export default function LineGraph(props){
    //Line chart with set customization
    return (
        <LineChart
            data={{
            labels: props.labels,
            datasets: [
                { data: props.data }
            ]
            }}
            width={wp('90%')}
            height={hp('30%')}
            
            yAxisInterval={1}
            chartConfig={{
                decimalPlaces: 0,
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
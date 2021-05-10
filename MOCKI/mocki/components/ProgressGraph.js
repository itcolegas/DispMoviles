import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    ProgressChart,
  } from "react-native-chart-kit";

  export default function ProgressGraph(){
    return (
        <ProgressChart
            data={{
                //labels: ["Progress"],
                data: [0.7]
            }}
            width={wp('60%')} // from react-native
            height={hp('20%')}
            
            strokeWidth={8}
            radius={40}
            hideLegend={false}

            chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
        />
    )
}
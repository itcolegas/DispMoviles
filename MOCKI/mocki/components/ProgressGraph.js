import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    ProgressChart,
  } from "react-native-chart-kit";

  export default function ProgressGraph(props){
    //Progress chart with set customization
    return (
        <ProgressChart
            data={{
                data: props.data
            }}
            width={wp('60%')} // from react-native
            height={hp('20%')}
            
            strokeWidth={8}
            radius={40}
            hideLegend={props.hideLegend}

            chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
        />
    )
}
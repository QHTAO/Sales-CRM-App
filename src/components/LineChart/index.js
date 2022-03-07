import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Defs, LinearGradient, Stop, Svg} from 'react-native-svg';
import {VictoryChart, VictoryLine, VictoryAxis} from 'victory-native';
import {VictoryLabel} from 'victory-native';
const LineChart = ({data, x, y}) => {
  return (
    <View style={{height: 220, marginRight: -24}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <VictoryChart
          height={220}
          width={1800}
          padding={{top: 10, left: 30, bottom: 30, right: 20}}
          maxDomain={{y: 20000}}
          minDomain={{y: 0}}
          style={{
            // parent: {
            //   backgroundColor: '#ffffff',
            // },
            background: {
              fill: 'url(#gradient1)',
              rx: 20,
              ry: 20,
            },
          }}>
          <Defs>
            <LinearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="10%" stopColor="#DE64A3" />
              <Stop offset="100%" stopColor="#DE64C9" />
            </LinearGradient>
          </Defs>
          {/* title */}
          <VictoryLabel
            text="$148,455"
            x={50}
            y={37}
            style={{
              fill: '#FFFFFF',
              fontSize: 16,
              fontFamily: 'Urbanist-SemiBold',
            }}
          />
          {/* title2 */}
          <VictoryLabel
            text="September"
            x={260}
            y={37}
            style={{
              fill: '#FBCEE4',
              fontSize: 16,
              fontFamily: 'Urbanist-SemiBold',
            }}
          />
          <VictoryLine
            interpolation="cardinal"
            style={{
              data: {stroke: '#FFFFFF'},
            }}
            data={data}
            x={x}
            y={y}
          />
          <VictoryAxis
            offsetY={36}
            style={{
              /* 隐藏XAxis实线 */
              axis: {stroke: 'transparent'},
              tickLabels: {
                fontSize: 13,
                fill: '#E384C3',
                fontFamily: 'Urbanist-SemiBold',
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={y => `${y / 1000}k`}
            offsetX={36}
            style={{
              /* 隐藏YAxis实线 */
              axis: {
                stroke: 'transparent',
              },
              tickLabels: {
                fontSize: 13,
                fill: '#E384C3',
                fontFamily: 'Urbanist-SemiBold',
              },
            }}
          />
        </VictoryChart>
      </ScrollView>
    </View>
  );
};

export default LineChart;

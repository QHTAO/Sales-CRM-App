import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Defs, LinearGradient, Stop, Svg} from 'react-native-svg';
import {VictoryChart, VictoryLine, VictoryAxis} from 'victory-native';
import {VictoryLabel} from 'victory-native';
const LineChart = ({data, x, y}) => {
  return (
    <View style={{position: 'relative'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: -10,
          marginRight: -24,
        }}>
        <Svg
          width={30}
          height={220}
          style={
            {
              // backgroundColor: 'red',
            }
          }>
          <VictoryChart height={260} maxDomain={{y: 20000}} minDomain={{y: 0}}>
            <VictoryAxis
              dependentAxis
              tickFormat={y => `${y / 1000}k`}
              offsetX={34}
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
        </Svg>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <VictoryChart
            height={220}
            width={1800}
            padding={{top: 10, left: 4, bottom: 30, right: 20}}
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
              tickLabelComponent={<VictoryLabel dx={10} />}
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
          </VictoryChart>
        </ScrollView>
      </View>
      {/* title */}
      <View style={{position: 'absolute', top: 20, left: 60}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Urbanist-SemiBold',
              color: '#FFFFFF',
              fontSize: 16,
              marginRight: 150,
            }}>
            $148,455
          </Text>
          <Text
            style={{
              fontFamily: 'Urbanist-SemiBold',
              color: '#F9C4DF',
              fontSize: 16,
            }}>
            September
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LineChart;

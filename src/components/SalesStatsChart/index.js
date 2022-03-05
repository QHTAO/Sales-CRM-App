import React from 'react';
import {View, Text} from 'react-native';
import {VictoryBar, VictoryChart} from 'victory-native';
import {VictoryAxis, VictoryLabel, VictoryTooltip} from 'victory-native';
import tw from '../../libs/tailwind';
import Title from '../Title';
import {salesStatsOfMonthData} from '../../constants/data';

const SalesStatsChart = () => {
  const renderVictoryBarBackgournd = () => (
    <VictoryBar
      barWidth={16}
      cornerRadius={{
        top: 8,
        bottom: 8,
      }}
      style={{data: {fill: '#F5F2F9'}}}
      data={salesStatsOfMonthData}
      x="month"
      y={() => 500}
    />
  );
  return (
    <View style={tw`mt-5`}>
      <Title bodyText={'Your sales for 8 months'} rightText={'Details'} />
      <View style={tw`bg-white rounded-xl shadow-md`}>
        <View style={tw`fle flex-row justify-between mt-2 py-3 px-5 `}>
          <Text style={tw`text-base text-black font-urbanist `}>
            Sales stats
          </Text>
          <View style={tw`flex-col justify-center`}>
            <Text style={tw`text-sm text-gray-400 font-urbanist`}>
              01 Jan - 30 Sep
            </Text>
          </View>
        </View>
        <VictoryChart
          height={150}
          padding={{left: 30, right: 80, top: 0, bottom: 40}}>
          {renderVictoryBarBackgournd()}
          {/* VictoryBar   */}
          <VictoryBar
            barWidth={16}
            cornerRadius={{
              top: 8,
              bottom: 8,
            }}
            style={{data: {fill: '#DE64B9'}}}
            labels={({datum}) => `$ ${datum.amount}`}
            labelComponent={
              <VictoryTooltip
                dy={20}
                cornerRadius={10}
                pointerLength={0}
                flyoutStyle={{
                  stroke: 'none',
                  fill: '#FFFFFF',
                }}
                style={{fill: '#221F40', fontFamily: 'Urbanist-SemiBold'}}
              />
            }
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onPressIn: ({nativeEvent}) => {
                    return [
                      {
                        target: 'labels', // activate current tooltip `eventKey`
                        mutation: () => ({active: true}),
                      },
                    ];
                  },
                  onPressOut: ({nativeEvent}) => {
                    return [
                      {
                        target: 'labels',
                        eventKey: 'all', // deactivate all active tooltips
                        mutation: () => ({active: false}),
                      },
                    ];
                  },
                },
              },
            ]}
            data={salesStatsOfMonthData}
            x="month"
            y="amount"
          />
          <VictoryAxis
            style={{
              axis: {stroke: 'none'},
            }}
            tickLabelComponent={
              <VictoryLabel style={tw`font-urbanist text-sm text-black`} />
            }
          />
        </VictoryChart>
      </View>
    </View>
  );
};
export default SalesStatsChart;

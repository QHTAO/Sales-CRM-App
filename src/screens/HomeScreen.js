import React from 'react';
import {View, Text} from 'react-native';
import {VictoryBar, VictoryChart} from 'victory-native';
import {VictoryAxis, VictoryLabel, VictoryTooltip} from 'victory-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from '../libs/tailwind';

import Contianer from '../components/Contianer';
import Header from '../components/Header';
import Title from '../components/Title';

import salesTasks from '../constants/salesTasks';
import salesStatsForMonths from '../constants/salesStatsForMonths';

const HomeScreen = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.2}}
      end={{x: 0.8, y: 1}}
      locations={[0, 0.3, 1]}
      colors={['#FFFFFF', '#F5F7FD', '#EAEEF9']}
      style={tw`flex-1 `}>
      <Contianer>
        <Header title={'Home'} />
        <Text style={tw`text-lg text-black font-urbanist mb-5 `}>
          Hi, Jeffrey!
        </Text>

        {/* salesTasks  */}
        <Title
          bodyText={'Here are your tasks for today'}
          rightText={'See all'}
        />
        {salesTasks.map((item, index) => (
          <View
            style={tw`fle flex-row mb-4 bg-white shadow-md rounded-xl `}
            key={item.id}>
            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 0.3, y: 1}}
              locations={[0, 1]}
              colors={item.colors}
              style={tw`rounded-xl h-13 w-13 flex flex-row justify-center items-center`}>
              <Ionicons name={item.icon} size={24} color="#FFFFFF" />
            </LinearGradient>
            <View style={tw`flex-col justify-center ml-4`}>
              <Text style={tw`text-md text-black font-urbanist`}>
                {item.title}
              </Text>
            </View>
          </View>
        ))}

        <Title
          styel={tw`mt-5`}
          bodyText="Your sales for 8 months"
          rightText="Details"
        />
        {/* SalesStatsChart  */}

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
            padding={{left: 30, right: 80, top: 0, bottom: 33}}>
            <VictoryBar
              barWidth={16}
              cornerRadius={{
                top: 8,
                bottom: 8,
              }}
              style={{data: {fill: '#F5F2F9'}}}
              data={salesStatsForMonths}
              x="month"
              y={() => 500}
            />
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
              data={salesStatsForMonths}
              x="month"
              y="amount"
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: {stroke: 'none'},
                tickLabels: {fill: 'none'},
              }}
            />
            <VictoryAxis
              style={{
                axis: {stroke: 'none'},
              }}
              tickLabelComponent={
                <VictoryLabel
                  style={{
                    fontSize: 12,
                    fill: '#5A5770',
                    fontFamily: 'Urbanist-SemiBold',
                  }}
                />
              }
            />
          </VictoryChart>
        </View>
      </Contianer>
    </LinearGradient>
  );
};

export default HomeScreen;

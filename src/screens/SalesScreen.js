import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {VictoryChart, VictoryPie, VictoryAxis} from 'victory-native';
import {
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
} from 'react-native-svg';

import tw from '../libs/tailwind';
import Contianer from '../components/Contianer';
import Header from '../components/Header';
import Title from '../components/Title';
import salesStatsForDays from '../constants/salesStatsForDays';
import LineChart from '../components/LineChart';

const SalesScreen = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.2}}
      end={{x: 0.8, y: 1}}
      locations={[0, 0.3, 1]}
      colors={['#E3E9FE', '#EDE6F8', '#F4E3F0']}
      style={tw`flex-1 `}>
      <Contianer>
        <Header title={'Sales'} />
        {/* salesStats */}
        <View style={tw`fle flex-row justify-between mt-4`}>
          <View>
            <Text style={tw`text-lg text-black font-urbanist mb-1 `}>
              September
            </Text>
            <Text style={tw`text-3xl text-black font-urbanistBold `}>
              $24,500
            </Text>
          </View>
          <View
            style={[
              tw`h-11 px-4 mt-3 flex-col justify-center shadow-sm `,
              {
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                marginRight: -24,
                backgroundColor: '#F1F1FD',
              },
            ]}>
            <Text style={[tw`text-md font-urbanist`, {color: '#2E9AA2'}]}>
              +5% than import August
            </Text>
          </View>
        </View>
        {/* pieChart  */}
        <View style={{height: 240, marginTop: 5}}>
          <View style={tw`relative flex  flex-row justify-center`}>
            <View style={tw`absolute top-0`}>
              <VictoryPie
                height={240}
                width={240}
                innerRadius={90}
                colorScale={['#F5F2F9']}
                data={[1]}
                labels={({datum}) => null}
              />
            </View>
            <View style={tw`absolute top-0`}>
              <VictoryChart height={240} width={240}>
                <Defs>
                  <SvgLinearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%">
                    <Stop offset="0%" stopColor="#DE64A3" />
                    <Stop offset="100%" stopColor="#DE64C9" />
                  </SvgLinearGradient>
                </Defs>
                <VictoryPie
                  height={240}
                  width={240}
                  innerRadius={90}
                  cornerRadius={10}
                  colorScale={['#F5F2F9', 'url(#gradient1)']}
                  data={[3, 1]}
                  labels={({datum}) => null}
                />
                <VictoryAxis
                  style={{
                    axis: {
                      stroke: 'transparent',
                    },
                    tickLabels: {
                      fill: 'transparent',
                    },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  style={{
                    axis: {
                      stroke: 'transparent',
                    },
                    tickLabels: {
                      fill: 'transparent',
                    },
                  }}
                />
              </VictoryChart>
            </View>
            <View style={[tw`absolute flex-col items-center`, {top: 95}]}>
              <Text style={tw`text-gray-400 font-urbanist`}>You goal</Text>
              <Text style={tw`text-xl  mt-1 text-black  font-urbanist`}>
                $148,455
              </Text>
            </View>
          </View>
        </View>
        {/* lineChart  */}
        <Title bodyText="Goal for the current month" styel={tw`mt-3`} />
        <LineChart data={salesStatsForDays} x="day" y="amount" />
      </Contianer>
    </LinearGradient>
  );
};

export default SalesScreen;

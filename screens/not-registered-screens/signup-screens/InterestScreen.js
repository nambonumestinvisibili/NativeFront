import ScreenWrapper from '../../../ui/layout/ScreenWrapper';
import SubmitButton from '../../../ui/input/SubmitButton';
import StackNames from '../../../constants/stacks';
import WelcomeUserComponent from '../../../ui/avatar/WelcomeUserComponent';
import Capitals from '../../../ui/typography/Capitals';
import { ScrollView, View } from 'react-native';
import Divider from '../../../components/Divider';
import Bubble from '../../../components/Bubble';

const interests = [
  {
    category: 'Category1',
    items: [{
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      }
    ]
  },
  {
    category: 'Category1',
    items: [{
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      }
    ]
  },
  {
    category: 'Category1',
    items: [{
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest2",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest3",
      }
    ]
  }
]

const InterestScreen = ({ navigation }) => {
  return (
    <ScreenWrapper text={"Tell us more about yourself" } navigation={navigation}>
      <View style={{alignItems: 'flex-start', paddingLeft: 50}}>
        <WelcomeUserComponent />
        <Divider />
        <Capitals text={'Pick a few interests'}/>
      </View>
      <View>
        {interests.map(category => {
          const howManyInterest = category.items.length
          const howManyLines = 3
          const howManyInOneLine = howManyInterest / howManyLines
          return [...Array(howManyLines).keys()].map((lineOfInterests, idx) => (
            <ScrollView style={{backgroundColor: 'red', paddingBottom: 10}}>
              {category.items.slice(idx*howManyInOneLine, (howManyInOneLine + 1) * idx)
                .map(item => (
                <Bubble text={item.name}/>
              ))}
            </ScrollView>
          ));
        })}
      </View>
      <SubmitButton onPress={() => navigation.push(StackNames.AllSetScreen)}/>
      
    </ScreenWrapper>
  );
}

export default InterestScreen
import ScreenWrapper from '../../../ui/layout/ScreenWrapper';
import SubmitButton from '../../../ui/input/SubmitButton';
import StackNames from '../../../constants/stacks';
import WelcomeUserComponent from '../../../ui/avatar/WelcomeUserComponent';
import Capitals from '../../../ui/typography/Capitals';
import { ScrollView, View } from 'react-native';
import Divider from '../../../components/Divider';
import Bubble from '../../../components/Bubble';
import { dividerSizes } from '../../../constants/style';
import colors from '../../../constants/colors';
import { useReducer } from 'react';

const interests = [
  {
    category: 'Category1',
    color: colors.ACCENTS.PINK,
    items: [{
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest1",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest12",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest13",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest14",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest15",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest16",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest17",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest18",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest19",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest20",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest21",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest22",
      }
    ]
  },
  {
    category: 'Category1',
    color: colors.ACCENTS.MINT,
    items: [{
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest91",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest92",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest93",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest91",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest92",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest93",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest91",
      },
      {
        "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Interest92",
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
    color: colors.ACCENTS.MUSTARD,
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

  const [chosenInterests, addToChosenInterests] = useReducer((state, guid) => {
    if (state.includes(guid)) return state.filter(item => item !== guid)
    else return [...state, guid]
  }, [])
  console.log(chosenInterests)
  
  return (
    <ScreenWrapper text={"Tell us more about yourself" } navigation={navigation}>
      <View style={{alignItems: 'flex-start', paddingLeft: 50}}>
        <WelcomeUserComponent />
        <Divider />
        <Capitals text={'Pick a few interests'}/>
      </View>
      <View>
        <Divider />
        {interests.map(category => {
          const howManyInterest = category.items.length
          const howManyLines = 3
          const howManyInOneLine = howManyInterest / howManyLines
          return (<>
            {[...Array(howManyLines).keys()].map((_, idx) => (
              <>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {category.items.slice(idx*howManyInOneLine, howManyInOneLine*(idx+1))
                    .map(item => (
                    <Bubble 
                      color={category.color} 
                      text={item.name}
                      onPress={() => addToChosenInterests(item.guid)}
                      isPressed={chosenInterests.includes(item.guid)}
                    />
                  ))}
                </ScrollView>
              <Divider size={dividerSizes.medium} />
              </>
            ))}
            <Divider />
          </>)
        })}
      </View>
      <SubmitButton onPress={() => navigation.push(StackNames.AllSetScreen)}/>
      
    </ScreenWrapper>
  );
}

export default InterestScreen
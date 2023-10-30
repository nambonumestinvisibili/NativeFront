import { useReducer } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import useApi from '../api/api';
import colors from '../constants/colors';
import { dividerSizes } from '../constants/style';
import Bubble from './Bubble';
import Divider from './Divider';

const Interests = ({ setChosenInterests }) => {

  const { api } = useApi()

  const [interests, setInterests] = useState([])

  const prepareInterests = apiInterests => {

    const categories = [colors.ACCENTS.PINK, colors.ACCENTS.MINT, colors.ACCENTS.MUSTARD]
      .map(color => ({ category: "c", color, items: []}))
    
      apiInterests.forEach((interest, idx) => {
        const catIdx = idx % 3
        categories[catIdx].items.push(interest)
      });

      setInterests(categories)
  }

  const [chosenInterests, addToChosenInterests] = useReducer((state, guid) => {
    if (state.includes(guid)) return state.filter(item => item !== guid)
    else return [...state, guid]
  }, [])

  const onBubblePress = (guid) => {
    addToChosenInterests(guid)
  }

  useEffect(() => {
    setChosenInterests(chosenInterests)
  }, [chosenInterests])

  useEffect(() => {
    api.interestApi.getAll((x) => prepareInterests(x))
  }, [])

  return (
    <View>
        {interests.map(category => {
          const howManyInterest = category.items.length
          const howManyLines = 3
          const howManyInOneLine = howManyInterest / howManyLines
          return (<>
            {[...Array(howManyLines).keys()].map((_, idx) => (
              <>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {category.items.slice(idx*howManyInOneLine, howManyInOneLine*(idx+1))
                    .map((item, idx2) => (
                    <Bubble 
                      key={`${idx}${idx2}`}
                      color={category.color} 
                      text={item.name}
                      onPress={() => onBubblePress(item.guid)}
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
  )
}

export default Interests
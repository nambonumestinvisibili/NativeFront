import styled from 'styled-components/native';
import Icon from '../../components/Icon';
import { dislikeIconConfig, hadnClapIconConfig } from '../icons/IconConfigs';
import colors from "../../constants/colors";
import { Text } from 'react-native';

const StyledRow = styled.View`
  flexDirection: row;
  alignItems: center;
  justify-content: center;
`

const StyledCol = styled.View`
  flex: ${({ flex }) => flex};
`

const StyledWrapper = styled.View`
`

const LikePanel = ({ recommendAction, unrecommendAction, hasVoted }) => {
  return (
    <StyledWrapper>
      <StyledRow>
        <StyledCol flex={1}>
          <Icon {...hadnClapIconConfig} color={hasVoted ? colors.BASIC.GRAY : colors.ACCENTS.PINK} onPress={!hasVoted && recommendAction} />
        </StyledCol>
        <StyledCol flex={1}>
          <Icon {...dislikeIconConfig} color={hasVoted ? colors.BASIC.GRAY : colors.ACCENTS.MINT} onPress={!hasVoted && unrecommendAction}/>
        </StyledCol>
      </StyledRow>
      {hasVoted && (<StyledRow>
        <Text>You already voted</Text>
      </StyledRow>)}
    </StyledWrapper>
  )
}
export default LikePanel
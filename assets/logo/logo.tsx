import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

interface IProps {
    width?: number;
    height?: number;
    className?: string;
}

const ExpoLogo = (props: IProps) => {
    const { width = 120, height = 120, className } = props;

    return (
        <View className={className}>
            <Svg width={width} height={height} viewBox="0 0 320 320">
                <Defs>
                    <LinearGradient id="expoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor="#33FFDD" stopOpacity={1} />
                        <Stop offset="100%" stopColor="#7766CC" stopOpacity={1} />
                    </LinearGradient>
                </Defs>

                <SvgText
                    x="50%"
                    y="50%"
                    dy={6}
                    dx={6}
                    alignmentBaseline="middle"
                    textAnchor="middle"
                    fontFamily="Montserrat-Bold, Century Gothic, Arial Narrow, sans-serif"
                    fontSize={105}
                    fontWeight="700"
                    letterSpacing={5}
                    fill="url(#expoGradient)">
                    EXPO
                </SvgText>
            </Svg>
        </View>
    );
};

export default ExpoLogo;

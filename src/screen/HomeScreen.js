import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Text from '../components/text'
import { colors } from '../Theme/colors'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { spacing } from '../Theme/spacing';
import { AntDesign } from '@expo/vector-icons';
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <View style={styles.topBar}>
                    <FontAwesome5 name="grip-lines" size={24} color="white" />
                    <FontAwesome name="bell-o" size={24} color="white" />
                </View>
                <View style={styles.secendBar}>
                    <View>
                        <Text preset='h2' style={{ color: colors.textWhite }}>Covid-19</Text>
                    </View>
                    <View style={styles.dropDoun}>
                        <Image style={styles.icons} source={require('../../assets/usa.png')}></Image>
                        <Text preset='small' style={{ fontSize: 20 }}>USA</Text>
                        <AntDesign name="caretdown" size={15} color="black" />
                    </View>
                </View>
                <View style={{ marginTop: spacing[6], marginBottom: spacing[4] }}>
                    <Text preset='h3' style={{ color: colors.bgWhite }}>Are you feeling sick?</Text>
                    <Text preset='small' style={{ color: colors.bgWhite, fontSize: 18, marginTop: spacing[4] }}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
                </View>
                <View style={styles.btnBar}>
                    <View style={{ backgroundColor: colors.btnRade, flex: 1, margin: spacing[2], borderRadius: 20 }}>
                        <Text preset='h4' style={{ padding: spacing[4], textAlign: 'center', color: colors.textWhite }}>Call Now</Text>
                    </View>
                    <View style={{ backgroundColor: colors.btnBlue, flex: 1, margin: spacing[2], borderRadius: 20 }}>
                        <Text preset='h4' style={{ padding: spacing[4], textAlign: 'center', color: colors.textWhite }}>Send SMS</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomBar}>
                <Text preset='h3' style={{ marginBottom: spacing[4] }}>Prevention</Text>
                <View style={styles.iconsBar}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image source={require('../../assets/icons/icon1.png')}></Image>
                        <Text preset='h4' style={{ textAlign: 'center' }}>Avoid close contact</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image source={require('../../assets/icons/icon1.png')}></Image>
                        <Text preset='h4' style={{ textAlign: 'center' }}>Avoid close contact</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image source={require('../../assets/icons/icon1.png')}></Image>
                        <Text preset='h4' style={{ textAlign: 'center' }}>Avoid close contact</Text>
                    </View>
                </View>
                <View style={styles.boxbottom}>
                    <Image source={require('../../assets/icons/Frame.png')}></Image>
                    <View>
                        <Text preset='h3' style={{ color: colors.textWhite, margin: spacing[3] }}>Do your own test!</Text>
                        <Text style={{ color: colors.textWhite, textAlign: 'justify', marginLeft: spacing[3], width: 150 }}>Follow the instructions to do your own test.</Text>
                    </View>
                </View>
            </View>
            <View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    topbar: {
        flex: 1,
        backgroundColor: colors.bgPrimary,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        padding: spacing[5]

    },
    bottomBar: {
        flex: 1,
        padding: spacing[5]
    },
    topBar: {
        margin: spacing[5],
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    secendBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropDoun: {
        backgroundColor: colors.bgWhite,
        width: 100,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    icons: {
        width: 20,
        height: 20,
        borderRadius: 50,
        margin: spacing[1]
    },
    btnBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconsBar: {
        flexDirection: 'row',
        marginTop: spacing[4],
        marginBottom: spacing[4]
    },
    boxbottom: {
        backgroundColor: "#56549E",
        borderRadius: 20,
        flexDirection: 'row'
    }
})
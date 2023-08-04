import React, {useState} from 'react';
import {Header} from './src/Header';
import {Margin} from './src/Margin';
import {Division} from './src/Division';
import {FlatList, View} from 'react-native';
import {myProfile, friendProfiles} from './src/data';
import Profile from './src/Profile';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import TabBar from "./src/TabBar";
import MultiProfile from "./src/MultiProfile";
import BirthdayProfile from "./src/BirthdayProfile";
import styled from 'styled-components/native'


export default function App (){

    const [isOpened, setIsOpened] = useState(false)
    const [selectedTabIdx, setSelectedTabIdx] = useState(0);


    const onPressArrow = ()=>{
        setIsOpened(!isOpened);
    }

    const ItemSeparatorComponent = () => <Margin height ={13} />

    const renderItem = ({item}) => (
        <View>
            <Profile
                uri={item.uri}
                name={item.name}
                introduction={item.introduction} />

        </View>
    )

    const ListHeaderComponent =()=>(
        <View style={{flex:1, paddingHorizontal:10,backgroundColor:'white'}}>
            <Margin height={50}/>

            <Header />
            <Profile
                uri={myProfile.uri}
                name={myProfile.name}
                introduction={myProfile.introduction}/>
            <Margin height={10}/>
            <Division />
            <MultiProfile/>
            <Division />
            <FriendSection
                friendProfileLen={friendProfiles.length}
                isOpened={isOpened}
                onPressArrow={onPressArrow}/>
        </View>

    )
    const ListFooterComponent =()=>{
        <View>
            <TabBar selectedTabIdx={selectedTabIdx}
                    setSelectedTabIdx={setSelectedTabIdx}/>
        </View>
    }
    return (
        <View
            style={{flex:1}}>
            {/* 해당 view 전체를 화면에 꽉 차게 두겠다. */}
            <FlatList
                data={isOpened ? friendProfiles : []}
                contentContainerStyle={{paddingHorizontal:1}}
                keyExtractor={(_, index)=>index}
                stickyHeaderIndices={[0]}
                ItemSeparatorComponent={ItemSeparatorComponent}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                // ListFooterComponent={ListFooterComponent}
                showsVerticalScrollIndicator={false}
            />
            <TabBar selectedTabIdx={selectedTabIdx}
                    setSelectedTabIdx={setSelectedTabIdx}/>
        </ View>
    )
}
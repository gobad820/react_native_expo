
import React, { useState } from 'react';
import {Header} from './src/Header';
import {Margin} from './src/Margin';
import {Division} from './src/Division';
import {SafeAreaView, View} from 'react-native';
import {myProfile, friendProfiles} from './src/data';
import Profile  from './src/Profile';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';




export default function App (){

    const [isOpened, setIsOpened] = useState(false)

    const onPressArrow = ()=>{
        setIsOpened(!isOpened);
    }



    return (
        <SafeAreaView style={{flex:1, paddingHorizontal:10}}>
            <Margin height={10}/>

            <Header />
            <Profile
                uri={myProfile.uri}
                name={myProfile.name}
                introduction={myProfile.introduction}/>
            <Margin height={10}/>
            <Division />
            <FriendSection
                friendProfileLen={friendProfiles.length}
                isOpened={isOpened}
                onPressArrow={onPressArrow}/>

            <FriendList data={friendProfiles} isOpened={isOpened}/>




      {/*      { <Text>{count}</Text>*/}
      {/*<Button title="더하기" onPress={()=>setCount(count+1)} />*/}
      {/*<Margin height={5} />*/}
      {/*<Button title="빼기" onPress={()=>setCount(count-1)} />*/}
      {/*<Margin height={10}/> }*/}

      {/*      {*/}
      {/*       <FriendSection*/}
      {/*  count = {friendProfiles.lengh}*/}
      {/*  isOpened = {isOpened}*/}
      {/*  onPressArrow = {onPressArrow}*/}
      {/*/>*/}
      {/*}*/}

        </SafeAreaView>
    );
}
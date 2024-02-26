import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { styles } from '../../../Styles/styles';
import PostCard from './component/Card';


export default function PostSFetch(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setPosts(response.results))
    .catch(err => console.error(err));
  useEffect(()=>{

  })

  const [posts, setPosts] = useState([])

  return (
    <View style={styles.container}>
    <Text style={{alignItems:'center',display:'flex',justifyContent:'center',padding:12}}>Trending movies</Text>
      <FlatList
      horizontal={true}
        style={styles.list}
        data={posts}
        keyExtractor={item => {
          return item.id
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />
        }}
        renderItem={post => {
          const item = post.item 
           return (
            <PostCard title_movie={item.original_title} img={item.poster_path} vote={item.popularity} />
          )
        }}
      />
    </View>
  )
}
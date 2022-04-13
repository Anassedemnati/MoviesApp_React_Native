import { View, Text ,Image} from 'react-native'
import React from 'react'
import { getImageFromApi } from '../Api/index'
const MovieCard = ({movie}) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image 
        style ={{
            width:160,
            height:215,
            margin:10,
            borderRadius:10,
            shadowColor:"black"
            
        }}
        source={{uri:getImageFromApi(movie.poster_path)}}
      />
    </View>
  )
}

export default MovieCard
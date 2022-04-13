import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {useEffect,useState} from 'react'
import {getMoviesFromApi} from './Api/index'
import {TextInput} from 'react-native-paper'
import MovieCard from './components/MovieCard';
export default function App() {
  const [movies,setMovies] = useState([]);
  const [searchMovie,setSearchMovie] = useState('');
  
  useEffect(()=>{
    const getMovies = async ()=>setMovies(await getMoviesFromApi('Batman'))
    getMovies();

  },[]);

const Search = async ()=>{
  setMovies(await getMoviesFromApi(searchMovie));
  setSearchMovie('');
}
  
  return (
   <>

    


    <View>
     
      <TextInput 
      placeholder='Search your movies !'
      value={searchMovie}
      onChange={(e)=>setSearchMovie(e.target.value)}
      // onChangeText={(text)=>setSearchMovie(text)} 
      style={{
        marginTop:20
      }} 
      left={<TextInput.Icon name="magnify" onPress={Search} />}
      onSubmitEditing={Search}
      />
       {movies.Search &&(
      <ScrollView contentContainerStyle={{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around",
        alignItems:"center"
      }}>
          {movies.Search.map((movie,i)=>(
            <MovieCard movie={movie} key={i}/>
          ))}
      </ScrollView>
      )}
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

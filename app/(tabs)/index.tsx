import SearchBar from "@/components/SearchBar";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/movie-card";
import { useState } from "react";
export default function Index() {
  // const [searchQuery, setSearchQuery] = useState("");

  // const router = useRouter();
  const {
    data: movies,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => fetchMovies({ query: "" }));
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={require("@/assets/images/bg.png")}
        className="absolute w-full z-0"
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
        // style={{ flexDirection: "column" }}
      >
        <Image
          source={require("@/assets/icons/logo.png")}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
        />

        {movieLoading ? (
          <ActivityIndicator
            size={"large"}
            color={"#0000ff"}
            className="mt-10-center"
          />
        ) : movieError ? (
          <Text style={{ color: "white" }}>Error: {movieError?.message}</Text>
        ) : (
          <View>
            {/* <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie."
              value={searchQuery}
              onChangeText={(text: string) => setSearchQuery(text)}
            /> */}
            <Text className="capitalize text-xl mt-5 font-bold text-white mb-3">
              Latest movies
            </Text>
            <>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                // style={{ flexDirection: "row", overflow: "scroll" }}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 12,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
  
}

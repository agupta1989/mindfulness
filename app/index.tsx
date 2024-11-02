import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View
          className="w-full h-full justify-center items-center px-4"
        >
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px]"
            resizeMethod="auto"
            resizeMode="contain"
          />
          <View
            className="relative mt-5"
          >
            <Text className="text-3xl text-white font-bold text-center">
              Disconver
              <Text className="text-secondary-200">Mindfullness</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-3xl font-pblack">Practice Mindfulness!</Text>
    //   <Link href={'/home'}>Go to home</Link>
    //   <StatusBar style="auto"></StatusBar>
    // </View>
  );
}

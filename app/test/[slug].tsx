import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

// const myFile = require('../../assets/data/groupedBy50/01. 日-空.json');
// console.log('myFile', myFile);

export default function Page() {
  const { slug } = useLocalSearchParams();
  // console.log(slug);
  // const fileName = `../../assets/data/groupedBy50/${slug}.json`;
  // const data = require(fileName);
  // console.log('myFile', data);

  return <ThemedText>Blog post: {JSON.stringify(slug, null, 2)}</ThemedText>;
}

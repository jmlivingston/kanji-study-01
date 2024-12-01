import { ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
// import * as FileSystem from 'expo-file-system';

// console.log(FileSystem.documentDirectory);

// FileSystem.readDirectoryAsync(FileSystem.bundleDirectory).then((x) => {
//   console.log(x.sort().join('\n'));
// });

// const slug2 = '01. 日-空';
// const JSONPath = FileSystem.bundleDirectory + `assets/data/groupedBy50/${slug2}.json`;
// FileSystem.readAsStringAsync(JSONPath)
//   .then((content) => console.log(content))
//   .catch((error) => console.error('Error reading file: ', error));

export default function Test() {
  return null;
  //   const [data, setData] = useState();
  //   const [slug, setSlug] = useState();

  //   useEffect(() => {
  //     setSlug('01. 日-空');
  //   }, []);

  //   useEffect(() => {
  //     if (slug) {
  //       const fileName = `../assets/data/groupedBy50/${slug}.json`;
  //       //   const fileName2 = `../assets/data/groupedBy50/01. 日-空.json`;
  //       const datum = require(fileName);
  //       setData(data);
  //       console.log('myFile', datum);
  //     }
  //   }, [slug]);

  //   return data ? JSON.stringify({ data, slug }, null, 2) : null;
}

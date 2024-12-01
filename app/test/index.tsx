import { ScrollView } from 'react-native';
// import { ThemedText } from '@/components/ThemedText';
// import { Link } from 'expo-router';

// const schema = require('../../assets/data/schema.json');

export default function TestScreen() {
  return (
    <ScrollView>
      test
      {/* {schema.groupedBy50.fileNames.map(({ fileName, total }) => (
        <Link href={`/test/${fileName}`} key={fileName}>
          <ThemedText>
            {fileName} ({total})
          </ThemedText>
        </Link>
      ))} */}
    </ScrollView>
  );
}

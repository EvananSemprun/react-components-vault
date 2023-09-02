
import { Document, Page, Text, View, StyleSheet, BlobProvider } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>1 2 3 </Text>
      </View>
    </Page>
  </Document>
);

const App = () => {
  return (
    <div>
      <BlobProvider document={<MyDocument />}>
        {({ url, loading, error }) => {
          if (loading) {
            return <p>Loading...</p>;
          }
          if (error) {
            return <p>Error: {error.toString()}</p>;
          }
          if (url) {
            return (
              <div>
                <a href={url} target="_blank" rel="noopener noreferrer" download="hello.pdf">
                  <button>Hello</button>
                </a>
              </div>
            );
          }
          return null;
        }}
      </BlobProvider>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
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

const MyDocument = ({ name, lastName }: { name: string; lastName: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Name: {name}</Text>
        <Text>Last Name: {lastName}</Text>
      </View>
    </Page>
  </Document>
);

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </div>
      <BlobProvider document={<MyDocument name={name} lastName={lastName} />}>
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
                  <button>Generar</button>
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

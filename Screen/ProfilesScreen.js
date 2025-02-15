import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function ProfilesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>

            {/*Foto*/}
            <Image 
                source={require('../assets/Images/Foto Muka.jpeg')} 
                style={styles.profileImage}
            />

            {/*Data*/}
            <Text style={styles.name}>Gilbert Parluhutan Pakpahan</Text>
            <Text style={styles.NIM}>00000079904</Text>
            <Text style={styles.desc}>Tugas Mobile Cross Platform Week 2</Text>

      </View>

      <Text style={styles.sectionTitle}>Teman-Teman hehehe</Text>

      <View style={styles.friendContainer}>

            {/*Foto*/}
            <Image 
                source={require('../assets/Images/A.jpg')} 
                style={styles.friendImage}
            />

            {/*Data*/}
            <View>
            <Text style={styles.friendName}>Anthonio Raphael Porteuro Bulo</Text>
            <Text style={styles.NIM}>00000079343</Text>
            </View>
            

      </View>

      <View style={styles.friendContainer}>

            {/*Foto*/}
            <Image 
                source={require('../assets/Images/Axel Tidur.jpg')} 
                style={styles.friendImage}
            />

            {/*Data*/}
            <View>
            <Text style={styles.friendName}>Axel Reginald Wiranto</Text>
            <Text style={styles.NIM}>00000078456</Text>
            </View>
            

      </View>

      <View style={styles.friendContainer}>

            {/*Foto*/}
            <Image 
                source={require('../assets/Images/Javarel Tidur.jpg')} 
                style={styles.friendImage}
            />

            {/*Data*/}
            <View>
            <Text style={styles.friendName}>Javarell Muhzeka</Text>
            <Text style={styles.NIM}>000000</Text>
            </View>
            

      </View>

      <View style={styles.friendContainer}>

            {/*Foto*/}
            <Image 
                source={require('../assets/Images/Efri Marah.jpg')} 
                style={styles.friendImage}
            />

            {/*Data*/}
            <View>
            <Text style={styles.friendName}>Efri Ramadhan</Text>
            <Text style={styles.NIM}>00000078662</Text>
            </View>
            

      </View>

      <View style={styles.friendContainer}>

            {/*Foto*/}
            <Image 
                source={require('../assets/Images/Batara Hepi.jpg')} 
                style={styles.friendImage}
            />

            {/*Data*/}
            <View>
            <Text style={styles.friendName}>Batara Hotdo Horas Simbolon</Text>
            <Text style={styles.NIM}>00000078626</Text>
            </View>
            

      </View>

      <View style={styles.friendContainer}>

            {/*Foto*/}
            <Image 
                source={require('../assets/Images/Fikri Keren.jpg')} 
                style={styles.friendImage}
            />

            {/*Data*/}
            <View>
            <Text style={styles.friendName}>Fikri Naufal Andrasito</Text>
            <Text style={styles.NIM}>00000079229</Text>
            </View>
            

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },  
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  NIM: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    color: '#555',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  friendContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 15,
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  friendDesc: {
    color: '#555',
  },
});

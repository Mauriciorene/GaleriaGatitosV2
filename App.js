import {StyleSheet, Text, View , ScrollView} from 'react-native';
import Gatito from './COMPONENTES/Gatito';

export default function App() {
  return (
  <View style={styles.container}>
    <Text style={styles.tituloText}>Galería gatitos</Text>
    <ScrollView>

    <Gatito
      nombre='Gatito 1'
      imagen={require('./IMAGENES/1.jpg')}
    ></Gatito>

    <Gatito
      nombre='Gatito 2'
      imagen={require('./IMAGENES/2.jpg')}
    ></Gatito>

    <Gatito
      nombre='Gatito 3'
      imagen={require('./IMAGENES/3.jpg')}
    ></Gatito>

    <Gatito
      nombre='Gatito 4'
      imagen={require('./IMAGENES/4.jpg')}
    ></Gatito>

    <Gatito
      nombre='Gatito 5'
      imagen={require('./IMAGENES/5.jpg')}
    ></Gatito>

    <Gatito
      nombre='Gatito 6'
      imagen={require('./IMAGENES/6.jpg')}
    ></Gatito>
    
    <Gatito
      nombre='Gatito 7'
      imagen={require('./IMAGENES/7.jpg')}
    ></Gatito>

    <Gatito
      nombre='Gatito 8'
      imagen={require('./IMAGENES/8.jpg')}
    ></Gatito>

    <Gatito
      nombre='Gatito 9'
      imagen={require('./IMAGENES/9.jpg')}
    ></Gatito>

    <Gatito
      nombre='Gatito 10'
      imagen={require('./IMAGENES/10.jpg')}
    ></Gatito>

    <Gatito
      nombre='Gatito 11'
      imagen={require('./IMAGENES/11.png')}
    ></Gatito>

    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontSize: 25,
    fontWeight: 'bold',
  }

});

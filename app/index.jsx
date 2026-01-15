import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from "expo-router"
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Space from '../components/Space'
import ThemedText from '../components/ThemeText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <ThemedText style={styles.title} title={true}>Book</ThemedText>
      <Space height={10} />
      <ThemedText>List</ThemedText>
      <Space height={30} />
      {/* link */}
      <Link href="./login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href="./profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 120,
    height: 120,
    marginVertical: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  link: {
    borderBottomWidth: 1,
    marginVertical: 10
  }

})
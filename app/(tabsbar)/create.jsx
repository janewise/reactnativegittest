import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useNote } from "../../hooks/useNote"
import { useRouter } from 'expo-router'
import { useState } from 'react'
// themed components
import Space from "../../components/Space"
import ThemedText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"
import ThemedInput from "../../components/ThemedInput"
import ThemedButton from '../../components/ThemeButton'


const Create = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  const { createNotes } = useNote()
  const router = useRouter()

  async function handleSubmit() {
    if(!title.trim() || !description.trim()) return
    setLoading(true)
    await createNotes({title,description})
    // reset value
    setTitle("")
    setDescription("")
    //router 
    router.replace("/note")
    //
    setLoading(false)
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <ThemedView style={styles.container}>

        <ThemedText title={true} style={styles.heading}>
          Add a New Book
        </ThemedText>
        <Space />

        <ThemedInput
          style={styles.input}
          placeholder="Note Title"
          value={title}
          onChangeText={setTitle}
        />
        <Space />

        <ThemedInput
          style={styles.multiline}
          placeholder=" Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Space />

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: '#fff' }}>
            {loading ? "Saving..." : "Create Note"}
          </Text>
        </ThemedButton>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}
export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
})
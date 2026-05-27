import { useState } from "react"
import {Alert,KeyboardAvoidingView,Platform,ScrollView,StyleSheet,Switch,Text,TextInput,TouchableOpacity,View,} from "react-native"

const AddStudentScreen = ({ navigation }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")

  const [isActive, setIsActive] = useState(false)

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !city.trim()) {
      Alert.alert("Missing Details", "Please fill in all fields.")
      return
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      username: name.trim().replace(/\s+/g, "").toLowerCase(),
      email: email.trim(),
      phone: phone.trim(),
      website: "student.example.com",
      address: {
        city: city.trim(),
      },
      company: {
        name: isActive ? "Active Student Group" : "Inactive Student Group",
      },
      isActive,
    }

    if (navigation.popTo) {
      navigation.popTo("HomeScreen", { newStudent })
      return
    }

    navigation.navigate("HomeScreen", { newStudent })
  }

  return (

    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}

            onChangeText={setName}

            placeholder="Enter student name"
            placeholderTextColor="#94a3b8"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput

            style={styles.input}
            value={email}

            onChangeText={setEmail}
            placeholder="Enter email address"

            placeholderTextColor="#94a3b8"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter phone number"
            placeholderTextColor="#94a3b8"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={setCity}
            
            placeholder="Enter city"
            placeholderTextColor="#94a3b8"
          />
        </View>

        <View style={styles.switchRow}>
          <View>
            <Text style={styles.switchTitle}>Active Student</Text>
            <Text style={styles.switchSubtitle}>
              {isActive ? "Currently active" : "Currently inactive"}
            </Text>
          </View>
          <Switch value={isActive} onValueChange={setIsActive} />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Add Student</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: "#f4f7fb",
  },
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 36,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color: "#1f2937",
    fontSize: 15,
    fontWeight: "700",
  },
  input: {
    minHeight: 50,
    paddingHorizontal: 14,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: 16,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 24,
    padding: 16,
    borderColor: "#dbe3ee",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  switchTitle: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "800",
  },
  switchSubtitle: {
    marginTop: 4,
    color: "#64748b",
    fontSize: 13,
  },
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    borderRadius: 8,
    backgroundColor: "#16a34a",
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
})

export default AddStudentScreen

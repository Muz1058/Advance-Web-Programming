import { useCallback, useEffect, useRef, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import {ActivityIndicator,FlatList,StyleSheet,Text,TouchableOpacity,View,} from "react-native"
import axios from "axios"

const STUDENTS_URL = "https://jsonplaceholder.typicode.com/users"

const HomeScreen = ({ navigation, route }) => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState("")
  const handledStudentIds = useRef(new Set())

  const fetchStudents = useCallback(async (showFullLoader = false) => {
    try {
      if (showFullLoader) {
        setLoading(true)
      }
      setError("")
      const response = await axios.get(STUDENTS_URL)
      setStudents((prevStudents) => {
        const addedStudents = prevStudents.filter((student) =>
          handledStudentIds.current.has(student.id)
        )

        return [...addedStudents, ...response.data]
      })
    } 
    catch (requestError) {
      setError("Unable to load students Please try again.")
    } 
    finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    fetchStudents(true)
  }, [fetchStudents])

  useFocusEffect(
    useCallback(() => {
      const newStudent = route.params?.newStudent

      if (newStudent && !handledStudentIds.current.has(newStudent.id)) {
        handledStudentIds.current.add(newStudent.id)
        setStudents((prevStudents) => [newStudent, ...prevStudents])
        navigation.setParams({ newStudent: undefined })
      }
    }, [navigation, route.params?.newStudent])
  )

  const handleRefresh = () => {
    setRefreshing(true)
    fetchStudents()
  }

  const renderStudent = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.82}
        onPress={() =>
          navigation.navigate("StudentDetailScreen", { student: item })
        }
      >
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardText}>Email: {item.email}</Text>
        <Text style={styles.cardText}>Phone: {item.phone}</Text>
      </TouchableOpacity>
    )
  }

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Loading students....</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.centeredContainer}>

        <Text style={styles.errorText}>{error}</Text>

        <TouchableOpacity style={styles.primaryButton} onPress={handleRefresh}>
          <Text style={styles.primaryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("AddStudentScreen")}
        >
          <Text style={styles.primaryButtonText}>Add Student</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() =>
            navigation.navigate("ScrollInfoScreen", {
              studentName: "Student",companyName: "Campus Demo",
            })

          }
        >
          <Text style={styles.secondaryButtonText}>Scroll Demo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={students}

        keyExtractor={(item) => String(item.id)}
        renderItem={renderStudent}
          contentContainerStyle={styles.listContent}
         refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f4f7fb",
  },
  loadingText: {
    marginTop: 12,
    color: "#334155",
    fontSize: 16,
  },
  errorText: {
    marginBottom: 16,
    color: "#b91c1c",
    fontSize: 16,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
    backgroundColor: "#ffffff",
    borderBottomColor: "#dbe3ee",
    borderBottomWidth: 1,
  },
  primaryButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 46,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "#2563eb",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  secondaryButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 46,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "#e0f2fe",
    borderColor: "#38bdf8",
    borderWidth: 1,
  },
  secondaryButtonText: {
    color: "#075985",
    fontSize: 15,
    fontWeight: "700",
  },
  listContent: {
    padding: 16,
    paddingBottom: 28,
  },
  card: {
    marginBottom: 14,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#0f172a",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  cardName: {
    marginBottom: 8,
    color: "#111827",
    fontSize: 18,
    fontWeight: "800",
  },
  cardText: {
    marginTop: 4,
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
  },
})

export default HomeScreen

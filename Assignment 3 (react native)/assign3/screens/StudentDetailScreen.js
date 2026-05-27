import { useEffect } from "react"
import { Pressable,StatusBar,StyleSheet,Text,TouchableOpacity,View,} from "react-native"

const StudentDetailScreen = ({ route, navigation }) => {
  const { student } = route.params

  const city = student.address?.city || "Not provided"
  const companyName = student.company?.name || "Not provided"

  useEffect(() => {
    navigation.setOptions({ title: student.name })
  },
  [navigation, student.name]
)

  const renderInfoRow = (label, value) => {
    return (
      <View style={styles.infoRow}>
        
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value || "Not provided"}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />

      <View style={styles.card}>
        <View style={styles.profileSection}>

          <Text style={styles.profileInitial}>{student.name.charAt(0)}</Text>

          <View style={styles.profileTextGroup}>
            <Text style={styles.name}>{student.name}</Text>
            <Text style={styles.username}>@{student.username}</Text>
          </View>

        </View>

        <View style={styles.divider} />

        {renderInfoRow("Email", student.email)}

        {renderInfoRow("Phone", student.phone)}

        {renderInfoRow("Website", student.website)}

        {renderInfoRow("City", city)}
        {renderInfoRow("Company", companyName)}
      </View>

      <Pressable
        style={styles.demoButton}
        onPress={() =>
          navigation.navigate("ScrollInfoScreen", {
            studentName: student.name,
            companyName,
          })}
      >

        <Text style={styles.demoButtonText}>View Scroll Demo</Text>
      </Pressable>

      <TouchableOpacity  style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to List</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eef4f8",
  },
  card: {
    padding: 18,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#0f172a",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 5,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileInitial: {
    width: 58,
    height: 58,
    paddingTop: 12,
    borderRadius: 29,
    overflow: "hidden",
    backgroundColor: "#1d4ed8",
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
  },
  profileTextGroup: {
    flex: 1,
    marginLeft: 14,
  },
  name: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "900",
  },
  username: {
    marginTop: 4,
    color: "#64748b",
    fontSize: 15,
  },
  divider: {
    height: 1,
    marginVertical: 18,
    backgroundColor: "#e2e8f0",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  infoLabel: {
    width: 92,
    color: "#0f766e",
    fontSize: 14,
    fontWeight: "800",
  },
  infoValue: {
    flex: 1,
    color: "#334155",
    fontSize: 15,
    lineHeight: 21,
    textAlign: "right",
  },
  demoButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    marginTop: 22,
    borderRadius: 8,
    backgroundColor: "#2563eb",
  },
  demoButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    marginTop: 12,
    borderColor: "#94a3b8",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  backButtonText: {
    color: "#334155",
    fontSize: 15,
    fontWeight: "800",
  },
})

export default StudentDetailScreen

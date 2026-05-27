import {ScrollView,StyleSheet,Text,TouchableOpacity,View,} from "react-native"

const skills = ["React Native","JavaScript","C#",".Net","Angular","Web Scraping"]

const projects = ["HRMIS","CHI","HSPP","Horizon Notifier"]

const ScrollInfoScreen = ({ route, navigation }) => {

  const studentName = route.params?.studentName || "Student"

  const companyName = route.params?.companyName || "Campus Demo"

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >

      <View style={styles.greetingCard}>
        <Text style={styles.greetingTitle}>Welcome, {studentName}</Text>
        <Text style={styles.greetingSubtitle}>Company: {companyName}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.bodyText}>
          This profile highlights the student's learning journey, core React
          Native concepts, and sample work created during the course.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}

          contentContainerStyle={styles.horizontalContent}
        >
          {skills.map((skill) => (
            <View style={styles.skillBadge} key={skill}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </ScrollView>

      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          contentContainerStyle={styles.horizontalContent}
        >
          {projects.map((project, index) => (
            <View style={styles.projectCard} key={project}>

              <Text style={styles.projectNumber}>Project {index + 1}</Text>

              <Text style={styles.projectTitle}>{project}</Text>
              
              <Text style={styles.projectDescription}>
                Built with reusable components and navigation-friendly screens.
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
  },
  contentContainer: {
    padding: 18,
    paddingBottom: 34,
  },
  greetingCard: {
    padding: 18,
    borderRadius: 8,
    backgroundColor: "#0f766e",
  },
  greetingTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
  },
  greetingSubtitle: {
    marginTop: 8,
    color: "#ccfbf1",
    fontSize: 15,
    fontWeight: "600",
  },
  section: {
    marginTop: 18,
    paddingVertical: 4,
  },
  sectionTitle: {
    marginBottom: 10,
    color: "#111827",
    fontSize: 20,
    fontWeight: "900",
  },
  bodyText: {
    padding: 16,
    borderColor: "#dbe3ee",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    color: "#475569",
    fontSize: 15,
    lineHeight: 22,
  },
  horizontalContent: {
    paddingRight: 18,
  },
  skillBadge: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 128,
    minHeight: 72,
    marginRight: 12,
    paddingHorizontal: 14,
    borderColor: "#bae6fd",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#e0f2fe",
  },
  skillText: {
    color: "#075985",
    fontSize: 15,
    fontWeight: "800",
    textAlign: "center",
  },
  projectCard: {
    width: 210,
    minHeight: 142,
    marginRight: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#0f172a",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 3,
  },
  projectNumber: {
    color: "#be123c",
    fontSize: 13,
    fontWeight: "800",
  },
  projectTitle: {
    marginTop: 8,
    color: "#111827",
    fontSize: 17,
    fontWeight: "900",
  },
  projectDescription: {
    marginTop: 8,
    color: "#64748b",
    fontSize: 14,
    lineHeight: 20,
  },
  homeButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    marginTop: 24,
    borderRadius: 8,
    backgroundColor: "#2563eb",
  },
  homeButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
})

export default ScrollInfoScreen

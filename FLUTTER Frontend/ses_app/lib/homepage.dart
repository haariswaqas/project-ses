import 'package:flutter/material.dart';
import 'login_page.dart';
import 'registration_page.dart';
import 'dashboard.dart';

class HomePage extends StatefulWidget {
  static const String routeName = '/';

  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final Map<String, String> engineeringDepartments = {
    'Computer Engineering (CPEN)':
        'Computer Engineering combines principles of electrical engineering and computer science to design and develop computer hardware and software systems. This field encompasses areas such as computer architecture, digital systems, network engineering, and software engineering.',
    'Materials Science & Engineering (MTEN)':
        'Materials Science & Engineering focuses on the study and manipulation of materials to develop new materials with improved properties. This field involves understanding the structure, properties, and behavior of materials, and applying that knowledge to design and create materials for various applications.',
    'Biomedical Engineering (BMEN)':
        'Biomedical Engineering applies engineering principles and techniques to solve problems in the field of medicine and healthcare. It involves the development of medical devices, diagnostic tools, imaging systems, and other technologies that improve patient care and enhance medical research.',
    'Agricultural Engineering (AREN)':
        'Agricultural Engineering combines engineering principles with agricultural science to develop solutions for sustainable agriculture. It involves designing and implementing systems for irrigation, crop production, farm machinery, post-harvest processing, and environmental control to optimize agricultural practices.',
    'Food Process Engineering (FPEN)':
        'Food Process Engineering focuses on the study and improvement of food processing techniques and technologies. It involves applying engineering principles to develop efficient and safe methods for food preservation, processing, packaging, and quality control in the food industry.',
  };

  String? expandedDepartment;

    @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue, // Set the background color to dark red
        leading: IconButton(
          icon: Icon(
            Icons.arrow_back,
            color: Colors.white,
          ),
          onPressed: () {
            Navigator.pop(context); // Navigate back when the back arrow button is pressed
          },
        ),
        title: const Text(
          'Home',
          style: TextStyle(
            color: Colors.white, // Set the text color to white
          ),
        ),
      ),
      
      body: Container(
        color: Colors.grey[800], // Set the background color to dark grey
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              const SizedBox(height: 20),
              Text(
                'Welcome to the School of Engineering Sciences!',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20),
              Text(
                'We are committed to providing quality education to our students, equipping them with the skills and knowledge they need to succeed in their careers.',
                style: TextStyle(fontSize: 16, color: Colors.white),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20),
              Text(
                'Our faculty is made up of experienced professionals who are passionate about teaching and research, and who work hard to ensure that our curriculum is up-to-date and relevant to the needs of the industry.',
                style: TextStyle(fontSize: 16, color: Colors.white),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20),
              Text(
                'At the School of Engineering Sciences, we offer a range of programs in various engineering fields, including:',
                style: TextStyle(fontSize: 16, color: Colors.white),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20),
              Column(
                children: engineeringDepartments.entries
                    .map(
                      (entry) => Card(
                        color: Colors.grey[900], // Set the card background color to a darker shade of grey
                        child: ExpansionTile(
                          title: Text(
                            entry.key,
                            style: TextStyle(color: Colors.white),
                          ),
                          trailing: Icon(Icons.arrow_forward, color: Colors.white),
                          children: [
                            Padding(
                              padding: const EdgeInsets.all(16.0),
                              child: Text(
                                entry.value,
                                style: TextStyle(color: Colors.white),
                              ),
                            ),
                          ],
                          onExpansionChanged: (expanded) {
                            setState(() {
                              if (expanded) {
                                expandedDepartment = entry.key;
                              } else {
                                expandedDepartment = null;
                              }
                            });
                          },
                          initiallyExpanded: entry.key == expandedDepartment,
                        ),
                      ),
                    )
                    .toList(),
              ),
              const SizedBox(height: 20),
              Text(
                'Whether you are a current student, a prospective student, or just interested in learning more about the field of engineering, we invite you to explore our website and learn more about what we have to offer.',
                style: TextStyle(fontSize: 16, color: Colors.white),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person_add),
            label: 'Register',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.dashboard),
            label: 'Dashboard',
          ),
          
        ],
        selectedItemColor: Colors.black,
        unselectedItemColor: Colors.white,
        backgroundColor: Colors.blue,
        currentIndex: 0, // Set the current index of the selected item
        onTap: (index) {
          // Handle item tap here
          if (index == 0) {
            // Navigate to home page
            Navigator.pushNamed(context, '/');  } 
            else if (index == 1) {
            Navigator.pushNamed(context, RegistrationPage.routeName);
          } else if (index == 2) {
            Navigator.pushNamed(context, Dashboard.routeName);
          }
        },
      ),
    );
  }
}

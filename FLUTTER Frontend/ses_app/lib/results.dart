import 'package:flutter/material.dart';

class Results extends StatelessWidget {
  final List<Map<String, dynamic>> paymentData = const [
    {
      'code': 'SENG 101',
      'title': 'Calculus I',
      'credit': '4',
      'grade': 'A',
      'gpt': '16',
    },
    {
      'code': 'SENG 103',
      'title': 'Mechanics I',
      'credit': '3',
      'grade': 'A',
      'gpt': '12',
    },
    {
      'code': 'SENG 107',
      'title': 'Intro To Engineering',
      'credit': '2',
      'grade': 'A',
      'gpt': '8',
    },
    {
      'code': 'CPEN 103',
      'title': 'Computer Eng. Innovations',
      'credit': '3',
      'grade': 'B',
      'gpt': '9',
    },
  ];
  static const String routeName = 'results';

  const Results({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Results'),
        backgroundColor: Colors.blue,
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.black,
              ),
              child: Text(
                'Manage Tasks',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 24,
                ),
              ),
            ),
            ListTile(
              title: Text('Home'),
              onTap: () {
                Navigator.pushNamed(context, '/');
              },
            ),
            ListTile(
              title: Text('Dashboard'),
              onTap: () {
                Navigator.pushNamed(context, 'dashboard');
              },
            ),
            ListTile(
              title: Text('Sign Out'),
              onTap: () {
                Navigator.pushNamed(context, '/logout_page');
              },
            ),
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'CGPA: 3.08',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: DataTable(
                  dataRowHeight: 56, // Adjust the row height for mobile screens
                  columns: const <DataColumn>[
                    DataColumn(
                      label: Text('Course Code'),
                    ),
                    DataColumn(
                      label: Text('Course Title'),
                    ),
                    DataColumn(
                      label: Text('Credit'),
                    ),
                    DataColumn(
                      label: Text('Grade'),
                    ),
                    DataColumn(
                      label: Text('GPT'),
                    ),
                  ],
                  rows: paymentData.map((payment) {
                    return DataRow(cells: [
                      DataCell(
                        Text(
                          payment['code'] as String,
                          style: TextStyle(fontSize: 14), // Adjust font size for mobile screens
                        ),
                      ),
                      DataCell(
                        Text(
                          payment['title'] as String,
                          style: TextStyle(fontSize: 14), // Adjust font size for mobile screens
                        ),
                      ),
                      DataCell(
                        Text(
                          payment['credit'] as String,
                          style: TextStyle(fontSize: 14), // Adjust font size for mobile screens
                        ),
                      ),
                      DataCell(
                        Text(
                          payment['grade'] as String,
                          style: TextStyle(fontSize: 14), // Adjust font size for mobile screens
                        ),
                      ),
                      DataCell(
                        Text(
                          payment['gpt'] as String,
                          style: TextStyle(fontSize: 14), // Adjust font size for mobile screens
                        ),
                      ),
                    ]);
                  }).toList(),
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle),
            label: 'Profile',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.assignment),
            label: 'Assignments',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.folder),
            label: 'Projects',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.event_note),
            label: 'Exams',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.grade),
            label: 'Results',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.payment),
            label: 'Fees',
          ),
        ],
        selectedItemColor: Colors.blue,
        unselectedItemColor: Colors.black,
        backgroundColor: Colors.blue,
        showUnselectedLabels: true, // Show labels for unselected items
        currentIndex: 4, // Set the current index of the selected item
        onTap: (index) {
          // Handle item tap here
          if (index == 0) {
            // Navigate to profile page
            Navigator.pushNamed(context, 'profile');
          } else if (index == 1) {
            Navigator.pushNamed(context, 'assignments');
          } else if (index == 2) {
            Navigator.pushNamed(context, 'projects');
          } else if (index == 3) {
            Navigator.pushNamed(context, 'exams');
          } else if (index == 4) {
            Navigator.pushNamed(context, 'results');
          } else if (index == 5) {
            Navigator.pushNamed(context, 'fees');
          }
        },
      ),
    );
  }
}

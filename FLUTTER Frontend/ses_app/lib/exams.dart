import 'package:flutter/material.dart';

class Exams extends StatelessWidget {
  static const String routeName = 'exams';

  const Exams({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Exam Timetable'),
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
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Exam Timetable',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Card(
              child: ListTile(
                title: const Text('Linear Circuits'),
                subtitle: const Text('Date: 25th June, 2023'),
              ),
            ),
            Card(
              child: ListTile(
                title: const Text('Data Communications'),
                subtitle: const Text('Date: 30th June, 2023'),
              ),
            ),
            Card(
              child: ListTile(
                title: const Text('Software Engineering Midterm'),
                subtitle: const Text('Date: 5th July, 2023'),
              ),
            ),
          ],
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
         showUnselectedLabels: true, // Show labels for unselected items
        backgroundColor: Colors.blue,
        currentIndex: 3, // Set the current index of the selected item
        onTap: (index) {
          // Handle item tap here
          if (index == 0) {
            // Navigate to home page
            Navigator.pushNamed(context, 'profile');  } 
            else if (index == 1) {
            Navigator.pushNamed(context, 'assignments');
          } else if (index == 2) {
            Navigator.pushNamed(context, 'projects');
          }
          else if (index == 3) {
            Navigator.pushNamed(context, 'exams');
          }
          else if (index == 4) {
            Navigator.pushNamed(context, 'results');
          }
          else if (index == 5) {
            Navigator.pushNamed(context, 'fees');
          }
        },
),
    );
  }
}

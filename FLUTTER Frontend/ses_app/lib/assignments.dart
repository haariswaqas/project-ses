import 'package:flutter/material.dart';

class Assignments extends StatefulWidget {
  static const String routeName = 'assignments';

  const Assignments({Key? key}) : super(key: key);

  @override
  _AssignmentsState createState() => _AssignmentsState();
}

class _AssignmentsState extends State<Assignments> {
  bool _task1Completed = false;
  bool _task2Completed = false;
  bool _task3Completed = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Assignments'),
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
              'Upcoming Assignments',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Card(
              child: CheckboxListTile(
                title: const Text('Linear Circuits Homework 3'),
                subtitle: const Text('Due: 21st June, 2023'),
                value: _task1Completed,
                onChanged: (value) {
                  setState(() {
                    _task1Completed = value!;
                  });
                },
              ),
            ),
            Card(
              child: CheckboxListTile(
                title: const Text('Linear Circuits Lab 3 Report'),
                subtitle: const Text('Due: 5th July, 2023'),
                value: _task2Completed,
                onChanged: (value) {
                  setState(() {
                    _task2Completed = value!;
                  });
                },
              ),
            ),
            Card(
              child: CheckboxListTile(
                title: const Text('Data Structures & Algorithms Quiz 3'),
                subtitle: const Text('On: 27th June, 2023'),
                value: _task3Completed,
                onChanged: (value) {
                  setState(() {
                    _task3Completed = value!;
                  });
                },
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
        backgroundColor: Colors.blue,
         showUnselectedLabels: true, // Show labels for unselected items
        currentIndex: 1, // Set the current index of the selected item
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

import 'package:flutter/material.dart';

class Profile extends StatelessWidget {
  static const String routeName = 'profile';

  const Profile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
   return Scaffold(
      appBar: AppBar(
        title: const Text('Student Profile'),
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
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Student Profile',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black),
            ),
            const SizedBox(height: 16),
            Align(
              alignment: Alignment.center,
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.black),
                  borderRadius: BorderRadius.circular(8.0),
                  color: Colors.white,
                ),
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 20),
                    CircleAvatar(
                      radius: 60,
                      backgroundImage: AssetImage('assets/profile_picture.jpg'),
                    ),
                    Text(
                      'Name',
                      style: TextStyle(fontSize: 16, color: Colors.black),
                    ),
                    Text(
                      'Haaris Ali Waqas',
                      style: TextStyle(fontSize: 20, color: Colors.black),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Student ID',
                      style: TextStyle(fontSize: 16, color: Colors.black),
                    ),
                    Text(
                      '10947015',
                      style: TextStyle(fontSize: 20, color: Colors.black),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Department',
                      style: TextStyle(fontSize: 16, color: Colors.black),
                    ),
                    Text(
                      'Computer Engineering (CPEN)',
                      style: TextStyle(fontSize: 20, color: Colors.black),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Email',
                      style: TextStyle(fontSize: 16, color: Colors.black),
                    ),
                    Text(
                      'haarisali9@gmail.com',
                      style: TextStyle(fontSize: 20, color: Colors.black),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: Container(
  color: Colors.blue, // Set the desired background color here
  child: BottomNavigationBar(
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
    currentIndex: 0, // Set the current index of the selected item
    onTap: (index) {
      // Handle item tap here
      if (index == 0) {
        // Navigate to home page
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
),

    );
  }
}

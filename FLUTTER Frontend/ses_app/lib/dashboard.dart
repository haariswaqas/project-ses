import 'package:flutter/material.dart';

class Dashboard extends StatelessWidget {
  static const String routeName = 'dashboard';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(kToolbarHeight),
        child: Container(
          color: Colors.blue,
          child: AppBar(
            title: const Text('Dashboard'),
            backgroundColor: Colors.transparent,
          ),
        ),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text(
                'Navigation',
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
                Navigator.pushNamed(context, Dashboard.routeName);
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
      bottomNavigationBar: PreferredSize(
        preferredSize: Size.fromHeight(56),
        child: Container(
          color: Colors.blue,
          child: BottomNavigationBar(
            backgroundColor: Colors.transparent,
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
            selectedItemColor: Colors.black,
            unselectedItemColor: Colors.black,
            showUnselectedLabels: true,
            onTap: (index) {
              if (index == 0) {
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
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Welcome to your Dashboard!',
              style: TextStyle(fontSize: 28),
            ),
            Text(
              'Keep track of all your tasks/activities',
              style: TextStyle(fontSize: 24),
            ),
          ],
        ),
      ),
    );
  }
}

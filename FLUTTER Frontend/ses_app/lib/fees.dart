import 'package:flutter/material.dart';

class Fees extends StatelessWidget {
  final List<Map<String, dynamic>> paymentData = const [
    {
      'date': '10th June, 2023',
      'description': 'Tuition Fee',
      'amount': '2000',
    },
    {
      'date': '15th June, 2023',
      'description': 'Library Fine',
      'amount': '50',
    },
    {
      'date': '20th June, 2023',
      'description': 'Lab Fee',
      'amount': '500',
    },
    {
      'date': '25th June, 2023',
      'description': 'Late Payment Penalty',
      'amount': '100',
    },
  ];
  static const String routeName = 'fees';

  const Fees({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Fees'),
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
              'Fees Payment',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            DataTable(
              columns: const <DataColumn>[
                DataColumn(label: Text('Date')),
                DataColumn(label: Text('Description')),
                DataColumn(label: Text('Amount')),
              ],
              rows: paymentData.map((payment) {
                return DataRow(cells: [
                  DataCell(Text(payment['date'] as String)),
                  DataCell(Text(payment['description'] as String)),
                  DataCell(Text(payment['amount'] as String)),
                ]);
              }).toList(),
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
        currentIndex: 5, // Set the current index of the selected item
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

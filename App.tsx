 import React, { useState } from 'react';
import {StyleSheet,View,Text,ScrollView,Image,LayoutAnimation, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
//import { createStackNavigator } from '@react-navigation/stack'; // needs it



export default function Homepage() {
  const [showLongCourses, setshowLongCourses] = useState(false); // Those lines indicate whether the sections are expanded or collapsed
  const [showShortCourses, setshowShortCourses] = useState(false); // The intial state is collapsed (false) 

  // Function used to change the state of the buttons 
  const LongCoursesClick = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // This line makes the animation of the button smooth
    setshowLongCourses(!showLongCourses); // This line changes the state of the the button 
  };

  const ShortCoursesClick = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setshowShortCourses(!showLongCourses);
  };

  

  return ( // Basically the whole page is a scroll view and it contains the history of the organization and the courses offered 
    
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Logo and Organization Info */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image source={require('./assets/Logo.jpeg')} style={styles.logo} />
          </View>
          <Text style={styles.title}>Empowering the Nation </Text>
          <Text style={styles.description}>
            Founded in 2022 by Precious Radebe Empowering the nation dedicated its mission to provide quality education 
            and skill development programs to communities. We believe in 
            empowering individuals through practical knowledge and hands-on training.
          </Text>
          <Text style={styles.description}>
            Empowering the Nation offers courses in Johannesburg. Hundreds of domestic workrs and gardeners have been trained 
            on both the six-month long learnership and six-week Short Skills Trainning Programmes to empower themselves and 
            can provide more maketable skills. 
            Choose a course and start learning today!
          </Text>
        </View>

        {/* Courses Section */}
        <View style={styles.coursesSection}>
          <Text style={styles.sectionTitle}>Offered courses</Text>

          {/* Long Term Courses */}
          <View style={styles.courseCategory}>
            <TouchableOpacity style={styles.categoryHeader} onPress={LongCoursesClick}>
              <Text style={styles.categoryTitle}>Long Term Courses</Text> {/* This section reprsent the long courses button */}
              <Text style={styles.arrow}>
                {showLongCourses ? '▼' : '►'} {/* This line changes the arrow direction based on the state of the button */}
              </Text>
            </TouchableOpacity>
            
            {showLongCourses && ( // This line first checks if the state od the button is true (basically open) then shows the courses
              <View style={styles.courseList}>
                <TouchableOpacity style={styles.courseItem}>
                  <Text style={styles.courseName}>First Aid</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.courseItem}>
                  <Text style={styles.courseName}>Sewing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.courseItem}>
                  <Text style={styles.courseName}>Landscaping</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.courseItem}>
                  <Text style={styles.courseName}>Life Skills</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Short Term Courses */}
          <View style={styles.courseCategory}>
            <TouchableOpacity style={styles.categoryHeader} onPress={ShortCoursesClick}>
              <Text style={styles.categoryTitle}>Short Term Courses</Text>
              <Text style={styles.arrow}>
                {showShortCourses ? '▼' : '►'}
              </Text>
            </TouchableOpacity>
            
            {showShortCourses && ( // Same as above but for the short courses button (but will probably have to change when dealing with navigation)
              <View style={styles.courseList}> 
                <TouchableOpacity style={styles.courseItem}>
                  <Text style={styles.courseName}>Child Minding</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.courseItem}>
                  <Text style={styles.courseName}>Cooking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.courseItem}>
                  <Text style={styles.courseName}>Garden Maintenance</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#e1e8ed',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c2938',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4a5568',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 12,
  },
  coursesSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c2938',
    marginBottom: 16,
    textAlign: 'center',
  },
  courseCategory: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4a6da7',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  arrow: {
    fontSize: 18,
    color: 'white',
  },
  courseList: {
    padding: 8,
  },
  courseItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#edf2f7',
  },
  courseName: {
    fontSize: 16,
    color: '#2d3748',
  },
});
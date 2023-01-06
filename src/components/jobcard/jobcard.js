import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./jobcard.style";

const Jobcard=({job,onSelect})=> {
  return (
    <TouchableOpacity onPress={onSelect}>
    <View style={styles.container}>
      <Text style={styles.category}>{job.name}</Text>
      <Text style={styles.company}>{job.company.name}</Text>
      <Text style={styles.location}>{job.locations[0].name}</Text>
      <Text style={styles.level}>{job.levels[0].name}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Jobcard;
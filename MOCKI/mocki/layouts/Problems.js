import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FilterPicker from '../components/FilterPicker';

const testData = [
    {
        name: 'Two Sum',
        category: 'Array',
        difficulty: 'easy'
    },
    {
        name: 'ZigZag Conversion',
        category: 'String',
        difficulty: 'medium'
    },
    {
        name: 'Binary Tree Inorder Traversal',
        category: 'Tree',
        difficulty: 'medium'
    },
    {
        name: 'Recover Binary Search Tree',
        category: 'Tree',
        difficulty: 'hard'
    },
    {
        name: 'Copy List with Random Pointer',
        category: 'Hash Table',
        difficulty: 'medium'
    }
]
export default function Problems({navigation}) {
    const [category, setCategory] = useState('all');
    const [difficulty, setDifficulty] = useState('all');

    const firstUpperCase = (str) => {
        return(`${str[0].toUpperCase()}${str.slice(1)}`)
    }
    const mapProblems = (problems) => {
        return problems.map(problem => {
            return(
                <View style={styles.problem}>
                    <View style={styles.problemFeature}>
                        <Button 
                            title={problem.name}
                            onPress={ () => navigation.navigate('Problem', {
                                name: problem.name,
                                category: problem.category,
                                difficulty: problem.difficulty
                            })}
                        />
                    </View>
                    <View style={styles.problemFeature}>
                        <Text style={styles.textCategory}> 
                            {problem.category}
                        </Text>
                    </View>
                    <View style={styles.problemFeature}>
                        <Text style={{...styles.textDifficulty, ...styles[problem.difficulty]}}> 
                            {firstUpperCase(problem.difficulty)}
                        </Text>
                    </View>
                </View>
            )
        })
    }
    return (
        <View style={styles.problems}>
            <Text style={styles.title}>Select your Filters</Text>
            <View style={styles.filters}>
                <FilterPicker 
                    placeholder = 'Category'
                    setSelected = {setCategory}
                    items = {['All', 'Array', 'String', 'Tree', 'Hash Table']}
                />
                <FilterPicker
                    placeholder = 'Difficulty'
                    setSelected = {setDifficulty}
                    items = {['All', 'Easy', 'Medium', 'Hard']}
                />
            </View>
            <View style={styles.list}>
                <View style={styles.problem}>
                    <View style={styles.problemFeature}>
                        <Text style={styles.tableHeader}> Name </Text>
                    </View>
                    <View style={styles.problemFeature}>
                        <Text style={styles.tableHeader}> Category </Text>
                    </View>
                    <View style={styles.problemFeature}>
                        <Text style={styles.tableHeader}> Difficulty </Text>
                    </View>
                </View>
                {mapProblems(testData)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    problems: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        overflow: 'scroll'
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        width: '100%'
    },
    list: {
        flex: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    problem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5
    },
    problemFeature: {
        width: '33%',
    },
    title: {
        fontSize: 22,
        color: 'black'
    },
    tableHeader: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold"
    },
    textDifficulty: {
        fontSize: 16,
        textAlign: 'center',
        borderWidth: 3,
        borderRadius: 5
    },
    textCategory: {
        fontSize: 18,
        textAlign: 'center'
    },
    easy: {
        borderColor: '#6DD98C'
    },
    medium: {
        borderColor: '#F7B801'
    },
    hard: {
        borderColor: '#A30000'
    },
});
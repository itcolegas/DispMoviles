import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Pressable } from 'react-native';
import FilterPicker from '../components/FilterPicker';
import axios from 'axios';
import { api } from '../config';

export default function Problems({navigation}) {
    const [category, setCategory] = useState('all');
    const [difficulty, setDifficulty] = useState('all');
    const [problems, setProblems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchByFilters = () => {
        setIsLoading(true);
        console.log(category, difficulty)
        axios.post(api + '/get-questions',{
            category: category,
            difficulty: difficulty
        })
            .then( res => {
                setProblems(res.data.questions)
                setIsLoading(false);
                console.log(problems);
            })
            .catch( err => {
                console.error(err)
            })
    }

    useEffect(() => {
        setIsLoading(true);
        axios.get(api + '/get-questions')
            .then( res => {
                setProblems(res.data.questions)
                setIsLoading(false);
                console.log(problems);
            })
            .catch( err => {
                console.error(err)
            })
    }, []);

    const firstUpperCase = (str) => {
        return(`${str[0].toUpperCase()}${str.slice(1)}`)
    }
    const mapProblems = (problems) => {
        return problems.map(problem => {
            return(
                <View style={styles.problem}>
                    <View style={styles.problemFeature}>
                        <Button 
                            title={problem.title}
                            onPress={ () => navigation.navigate('Problem', {
                                name: problem.title,
                                category: problem.category,
                                difficulty: problem.difficulty,
                                description: problem.description,
                                hint: problem.hint,
                                link: problem.link
                            })}
                        />
                    </View>
                    <View style={styles.problemFeature}>
                        <Text style={styles.textCategory}> 
                            {firstUpperCase(problem.category)}
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
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={ searchByFilters }
                >
                    <Text style={styles.textStyle}>Filter</Text>
                </Pressable>
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
                <ScrollView>
                {!isLoading? mapProblems(problems) : null}

                </ScrollView>
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
        padding: 20
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#15c712",
    },
});
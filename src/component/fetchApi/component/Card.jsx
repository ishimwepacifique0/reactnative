import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { styles } from '../../../../Styles/styles'
export default function PostCard({title_movie,img,vote}) {
    return (

        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View>
                    <Text style={styles.title}>{title_movie}</Text>
                    <Text style={styles.time}>{vote}</Text>
                </View>
            </View>

            <Image style={styles.cardImage} source={{ uri: `https://image.tmdb.org/t/p/w500${img}` }} />

            <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                                style={styles.icon}
                                source={{ uri: 'https://img.icons8.com/color/70/000000/heart.png' }}
                            />
                            <Text style={styles.socialBarLabel}>78</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                                style={styles.icon}
                                source={{ uri: 'https://img.icons8.com/color/70/000000/comments.png' }}
                            />
                            <Text style={styles.socialBarLabel}>25</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                                style={styles.icon}
                                source={{
                                    uri: 'https://img.icons8.com/color/70/000000/share.png',
                                }}
                            />
                            <Text rkType="primary4 hintColor" style={styles.socialBarLabel}>
                                13
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
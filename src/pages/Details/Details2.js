import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import useFetch from '../../hooks/useFetch'
import styles from './Detail.style';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Button from '../../components/Button';


const Detail = ({ route }) => {
    const { id } = route.params;
    const { data} = useFetch(`${config.JOB}/${id}`);
    const source = {
        html: `${data.contents}`
    };
    const { width } = useWindowDimensions();

    const dispatch = useDispatch();

    function addToFavorite(item) {
        dispatch(addFavorite(item))
    }

    return (
        <View>
            {
                loading ? (
                    <View style={{ marginTop: 20 }}><Loading /></View>
                ) : (
                    <>
                        <ScrollView style={styles.top_container}>
                            <Text style={styles.header_title}>{data.categories[0].name}</Text>
                            <Text style={styles.location_title}>Locations : <Text style={styles.location_content}>{data.locations[0].name}</Text></Text>
                            <Text style={styles.location_title}>Job Level : <Text style={styles.location_content}>{data.levels[0].name}</Text></Text>
                            <Text style={styles.job_title_head}>Job Detail</Text>

                            <View style={styles.content_container}>
                                <RenderHtml baseStyle={styles.content_title} contentWidth={width} source={source} />
                            </View>

                            <View style={styles.button_container}>
                                <Button buttonText="Submit" iconName="login" />
                                <Button buttonText="Favorite Jobs" iconName="cards-heart" onPress={() => addToFavorite(data)} />
                            </View>
                        </ScrollView>
                    </>
                )
            }
        </View>
    )
}

export default Detail
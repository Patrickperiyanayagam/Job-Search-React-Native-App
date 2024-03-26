import React, { useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';
import { Company, JobAbout, JobFooter, JobTabs, Specifics } from '../components';
import { COLORS, SIZES } from '../constants';
// import useFetch from '../hook/useFetch';

const tabs = ["About","Qualifications","Responsibilities"];

const JobDetails = ({route})=>{
    const {value} = route.params;
    const [refreshing,setrefreshing] = useState(false);
    const [activeTab,setActiveTab] = useState(tabs[0])
    const onRefresh = ()=> {}

    const displayTabContent = ()=>{
        switch(activeTab){
            case "Qualifications":
                return <Specifics
                title="Qualifications"
                points={value.job_highlights?.Qualifications ??['N/A']}
                />
            case "About":
                return <JobAbout
                info={value.job_description ?? "No data provided"}
                />
            case "Responsibilities":
                return <Specifics
                title="Responsibilities"
                points={value.job_highlights?.Responsibilities ??['N/A']}
                />
            default:
            break;
                        }
    }

    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                <View style={{padding:SIZES.medium,paddingBottom:100}}>
                    <Company
                        companyLogo={value.employer_logo}
                        jobTitle={value.job_title}
                        companyName={value.employer_name}
                        Location={value.job_country}
                        />
                    <JobTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    />
                    <View>

                    {displayTabContent()}
                    </View>
                </View>
            </ScrollView>
            <JobFooter url={value.job_google_link ?? 'https://www.google.com/about/careers/applications/'}/>
        </SafeAreaView>
    )
}
export default JobDetails;
import {JobCard} from "../../../components/job/Jobcard.tsx";
import {useUser} from "../../../hooks/useUser.ts";

export const MyResearch = () => {
    const {userResearches} = useUser()

    return (
        <>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 text-left gap-6'}>
                {
                    userResearches && userResearches?.map((job, index) => (
                        <JobCard key={index}
                                 applications={{
                                     research: job.applications
                                 }}
                                 description={job.researchData.description}
                                 title={job.researchData.title}
                                 company={job.researchData.univercity}
                                 salary={job.researchData.money?.toString()}
                                 type={job.researchData.isFullTime ? 'Full-time' : 'Part-time'}
                                 location={job.researchData.location}/>
                    ))
                }
            </div>
        </>
    )
}
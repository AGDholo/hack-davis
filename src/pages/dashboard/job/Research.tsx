import {JobCard} from "../../../components/job/Jobcard.tsx";
import {useResearch} from "../../../hooks/useResearch.ts";

export const Research = () => {
    const {allResearchesWithApplied} = useResearch()
    return (
        <>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-4'}>
                {
                    allResearchesWithApplied && allResearchesWithApplied?.map((job, index) => (
                        <JobCard key={index}
                                 id={job.id}
                                 applied={job.applied}
                                 description={job.description}
                                 title={job.title}
                                 company={job.univercity}
                                 salary={job.money.toString()}
                                 type={job.isFullTime ? 'Full-time' : 'Part-time'}
                                 location={job.location}/>
                    ))
                }


            </div>
        </>
    )
}
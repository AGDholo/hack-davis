import {JobCard} from "../../../components/job/Jobcard.tsx";
import {useUser} from "../../../hooks/useUser.ts";

export const MyApplication = () => {
    const {myApplications} = useUser()
    return (
        <>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 text-left gap-6'}>
                {
                    myApplications?.map((job, index) => (
                        <JobCard key={index}
                                 status={job.status}
                                 description={job.research.description}
                                 title={job.research.title}
                                 company={job.research.univercity}
                                 salary={job.research.money.toString() ?? ''}
                                 applied={true}
                                 type={job.research.isFullTime ? 'Full-time' : 'Part-time'}
                                 location={job.research.location}
                        />
                    ))
                }
            </div>
        </>
    )
}
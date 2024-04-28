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
                                 description={job.description}
                                 title={job.title}
                                 company={job.univercity}
                                 salary={job.money.toString() ?? ''}
                                 applied={true}
                                 type={job.isFullTime ? 'Full-time' : 'Part-time'}
                                 location={job.location}
                        />
                    ))
                }
            </div>
        </>
    )
}
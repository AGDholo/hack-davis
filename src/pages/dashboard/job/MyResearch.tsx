import {JobCard} from "../../../components/job/Jobcard.tsx";
import {Pagination} from "@mui/material";
import {useUser} from "../../../hooks/useUser.ts";

export const MyResearch = () => {
    const {userResearches} = useUser()

    return (
        <>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 text-left gap-6'}>
                {
                    userResearches?.map((job, index) => (
                        <JobCard key={index}
                                 description={job.description}
                                 title={job.title}
                                 company={job.univercity}
                                 salary={job.money}
                                 type={job.isFullTime ? 'Full-time' : 'Part-time'}
                                 location={job.location}/>
                    ))
                }
            </div>

            <Pagination count={10}
                        className={'py-5 flex justify-center'}/>
        </>
    )
}
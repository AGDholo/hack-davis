import {JobCard, jobs} from "../../../components/job/Jobcard.tsx";
import {Pagination} from "@mui/material";

export const MyResearch = () => {
    return (
        <>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 text-left gap-6'}>
                {
                    jobs.map((job, index) => (
                        <JobCard key={index} {...job}/>
                    ))
                }
            </div>

            <Pagination count={10}
                        className={'py-5 flex justify-center'}/>
        </>
    )
}
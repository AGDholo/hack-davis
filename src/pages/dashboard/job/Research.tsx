import {JobCard, jobs} from "../../../components/job/Jobcard.tsx";
import {Pagination} from "@mui/material";

export const Job = () => {

    return (
        <>
            <div className={'grid grid-cols-9 gap-4'}>
                {
                    jobs.map((job, index) => (
                        <JobCard key={index} {...job}/>
                    ))
                }


            </div>

            <div className={'py-5 flex justify-center'}>
                <Pagination count={10}/>
            </div>
        </>
    )
}
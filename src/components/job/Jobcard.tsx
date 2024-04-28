import {FC, useState} from "react";
import DOMPurify from 'dompurify';
import {useUser} from "../../hooks/useUser.ts";
import axios from "axios";
import {Alert, Dialog, Stack, Typography} from "@mui/material";
import {TextareaAutosize} from "@mui/base";
import {useAuthInfo} from "@propelauth/react";

interface JobCardProps {
    company: string;
    location: string;
    title: string;
    type: string;
    description: string;
    salary: string;
    isProfesssor?: boolean;
    id?: string;
    applied?: boolean;
    applications?: {
        research: {
            id: string;
            letter: string;
            time: string;
            student_id: string;
            status?: number;
        }[]
    }
}

export const jobs = [
    {
        company: "Harvard University",
        location: "Cambridge, MA, USA",
        title: "Quantum Computing Researcher",
        type: "Full-time",
        description: "Lead groundbreaking research in quantum algorithms and machine learning.",
        salary: "$7000/month"
    },
    {
        company: "MIT",
        location: "Cambridge, MA, USA",
        title: "Renewable Energy Specialist",
        type: "Full-time",
        description: "Pioneer new solar energy solutions within our engineering department.",
        salary: "$6500/month"
    },
    {
        company: "Stanford University",
        location: "Stanford, CA, USA",
        title: "AI Ethics Professor",
        type: "Full-time",
        description: "Guide the future of AI with a focus on ethical implications and policies.",
        salary: "$6800/month"
    },
    {
        company: "Caltech",
        location: "Pasadena, CA, USA",
        title: "Astrophysics Postdoc",
        type: "Full-time",
        description: "Conduct research on dark matter within our Space Science Department.",
        salary: "$5600/month"
    },
    {
        company: "Oxford University",
        location: "Oxford, UK",
        title: "Medieval History Scholar",
        type: "Full-time",
        description: "Explore the depths of medieval history and culture in a global context.",
        salary: "£4500/month"
    },
    {
        company: "Columbia University",
        location: "New York, NY, USA",
        title: "Urban Studies Analyst",
        type: "Full-time",
        description: "Develop sustainable urban planning strategies for the 21st century.",
        salary: "$6300/month"
    },
    {
        company: "Yale University",
        location: "New Haven, CT, USA",
        title: "Environmental Policy Expert",
        type: "Full-time",
        description: "Shape environmental policy and practice with cutting-edge research.",
        salary: "$6900/month"
    },
    {
        company: "Princeton University",
        location: "Princeton, NJ, USA",
        title: "Neuroscience Investigator",
        type: "Full-time",
        description: "Lead innovative studies on the human brain and neurological diseases.",
        salary: "$7200/month"
    }
];


export const JobCard: FC<JobCardProps> = (job) => {
    const safeHtml = DOMPurify.sanitize(job.description);
    const {user} = useUser()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setApplySuccess(false)
    };
    const [letter, setLetter] = useState('')
    const authInfo = useAuthInfo()

    const [applySuccess, setApplySuccess] = useState(false)
    const [approveSuccess, setApproveSuccess] = useState(false)
    const handleApply = () => {
        axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/proxy/research/apply`, {
            Research: {
                id: job.id,
                title: job.title,
                location: job.location,
                salary: job.salary,
                type: job.type,
                description: job.description,
                univercity: job.company
            },
            Application: {
                letter: letter
            },
        }, {
            headers: {Authorization: `Bearer ${authInfo.accessToken}`}
        }).then(() => {
            setApplySuccess(true)
        })
    }

    const [openPeople, setOpenPeople] = useState(false);
    const handleOpenPeople = () => {
        setOpenPeople(true)
    };

    const handleApprove = (status: number, id: string) => {
        axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/proxy/research/approve`, {
            id: id,
            status: status
        }, {
            headers: {Authorization: `Bearer ${authInfo.accessToken}`}
        }).then(() => {
            setApproveSuccess(true)
        })
    }

    return (
        <>
            <Dialog
                open={openPeople}
                fullWidth
                onClose={() => {
                    setOpenPeople(false)
                    setApproveSuccess(false)
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className={'p-2 space-y-4 overflow-y'}>
                    {job.applications && job.applications.research.map((application, index) =>
                        (
                            <div className={'px-2 py-2 rounded-2xl border border-blue-500 dark:border-gray-700'}
                                 key={index}>
                                <div>
                                    {approveSuccess && (
                                        <div className={'p-1 bg-cyan-500 text-white rounded-3xl mb-2'}>
                                            Action successful
                                        </div>
                                    )}
                                </div>
                                <div className={'flex justify-between'}>
                                    <div className={'text-gray-500'}>
                                        UserId: {application.student_id}
                                    </div>

                                    <div className={'flex gap-2'}>
                                        <div
                                            id="basic-button"
                                            onClick={() => {
                                                application.status === null && handleApprove(1, application.id)
                                            }}
                                            className={`
                            ${application.status === 1 && 'bg-green-500 text-white'}
                            ${application.status === 2 && 'bg-red-500 text-white'}
                            ${application.status === null && 'hover:bg-cyan-500 hover:text-white'}
                            text-sm text-slate-500 cursor-pointer dark:bg-slate-700 dark:text-white rounded-3xl border  py-2 px-4`}>
                                            <>
                                                <div className={`flex items-center`}>
                                                    {application.status === 1 && 'Approved'}
                                                    {application.status === 2 && 'Rejected'}
                                                    {application.status === null && 'Approve'}
                                                </div>
                                            </>
                                        </div>

                                        {application.status === null && (
                                            <div
                                                id="basic-button"
                                                onClick={() => {
                                                    application.status === null && handleApprove(2, application.id)
                                                }}
                                                className={`
                                                hover:bg-red-500 hover:text-white
                            text-sm text-slate-500 cursor-pointer dark:bg-slate-700 dark:text-white rounded-3xl border  py-2 px-4`}>
                                                <>
                                                    <div className={`flex items-center`}>
                                                        Reject
                                                    </div>
                                                </>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <div className={'font-semibold underline text-lg'}>
                                        Application Letter
                                    </div>
                                    {application.letter}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Dialog>
            <div
                onClick={() => job.applications && job?.applications.research.length > 0 && handleOpenPeople()}
                className='col-span-1  lg:col-span-4 xl:col-span-3 p-6 border rounded-xl hover:shadow-lg hover:border-0 cursor-pointer transition-all duration-200 ease-linear flex flex-col'>
                {
                    job.applications && (
                        <div className='flex justify-between'>
                            <div className='text-sm text-gray-500'>
                                {job.applications.research.length} applications
                            </div>
                        </div>
                    )
                }


                <div className='flex-1 z-0 pt-4'>
                    <div className='flex'>

                        <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                            <span>{job.company}</span>
                        </div>
                    </div>

                    <div className='mt-1 space-y-0.5'>
                        <div className='text-xl font-semibold'>
                            {job.title}
                        </div>

                        <div className='text-sm text-gray-500'>
                            {job.location}
                        </div>

                        <div className='text-sm text-gray-500'>
                            {job.type}
                        </div>
                    </div>

                    <div className='flex flex-1'>
                        <div className='mt-2'>
                            <div dangerouslySetInnerHTML={{__html: safeHtml}}/>
                        </div>
                    </div>
                </div>

                <div className='mt-auto flex justify-between items-end pt-5'>
                    <div className='text-lg font-bold'>
                        ${job.salary} / Month
                    </div>

                    {user && !user.professor && !job.applied && (
                        <button
                            onClick={handleOpen}
                            className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm px-4 py-2 rounded-3xl'>
                            Apply Now
                        </button>)}

                    {job.applied && (
                        <div className='bg-gradient-to-r from-green-500 to-cyan-500 text-white text-sm px-4 py-2 rounded-3xl'>
                            Applied
                        </div>
                    )}
                </div>

                <Dialog
                    open={open}
                    fullWidth
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Stack direction={'column'}
                           spacing={2}
                           sx={{
                               p: 4,
                           }}>

                        {applySuccess && (
                            <Alert severity="success">
                                Application submitted successfully!
                            </Alert>)
                        }
                        <Typography id="modal-modal-title"
                                    variant="h6"
                                    component="h2">
                            Apply for {job.title}
                        </Typography>
                        <TextareaAutosize
                            minRows={3}
                            className="w-full text-sm font-normal font-sans leading-normal p-3 rounded-xl rounded-br-none shadow-lg shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0 box-border"
                            aria-label="empty textarea"
                            placeholder="Letter"
                            value={letter}
                            onChange={(e) => setLetter(e.target.value)}
                        />

                        <button
                            onClick={handleApply}
                            className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm px-4 py-2 rounded-3xl'>
                            Submit
                        </button>
                    </Stack>
                </Dialog>
            </div>
        </>
    );

}
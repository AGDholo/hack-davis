import {FormControlLabel, Switch, TextField} from "@mui/material";
import {TextareaAutosize} from "@mui/base";

export const EditResearch = () => {
    return (
        <>
            <div className="container mx-auto max-w-lg space-y-4">
                <div>
                    <h1 className="text-2xl font-bold">Edit Research</h1>
                </div>

                <form className={'space-y-5'}>
                    <TextField id="outlined-basic"
                               fullWidth
                               label="Research Title"
                               variant="outlined"/>
                    <TextareaAutosize
                        minRows={3}
                        className="w-full text-sm font-normal font-sans leading-normal p-3 rounded-xl rounded-br-none shadow-lg shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0 box-border"
                        aria-label="empty textarea"
                        placeholder="Description"
                    />

                    <TextField id="outlined-basic"
                               fullWidth
                               label="Salary"
                               variant="outlined"/>
                    <TextField id="outlined-basic"
                               fullWidth
                               label="Localtion"
                               variant="outlined"/>
                    <TextField id="outlined-basic"
                               fullWidth
                               label="University"
                               variant="outlined"/>

                    <div className={'flex justify-between'}>
                        <FormControlLabel control={<Switch/>}
                                          label="Fulltime"/>

                        <div>
                            <button className="hover:bg-cyan-500 hover:text-white rounded-3xl px-5 py-1 outline">
                                Create
                            </button>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}
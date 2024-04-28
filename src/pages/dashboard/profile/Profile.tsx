import {Avatar, FormControlLabel, Switch, TextField} from "@mui/material";
import {FC, useEffect, useState} from "react";
import {TextareaAutosize} from '@mui/base';
import {useUser} from "../../../hooks/useUser.ts";
import {useAuthInfo} from "@propelauth/react";
import axios from "axios";

interface ProfileFieldProps {
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    icon?: string;
    verified?: boolean;
    readonly?: boolean;
}

const ProfileField: FC<ProfileFieldProps> = ({readonly, label, value, onChange, icon, verified}) => (

    <div className="flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-200 dark:bg-slate-600">
        {icon && <Avatar sx={{width: 24, height: 24}}
                         src={icon}/>}
        <TextField
            required
            label={label}
            fullWidth
            variant="standard"
            value={value}
            onChange={e => onChange?.(e.target.value)}
            size="small"
            margin="dense"
            disabled={!!readonly}
        />
        {verified !== undefined && (
            <div style={{width: 24, height: 24}}>
                {verified ? (
                    <span className="i-mdi-check-circle-outline text-green-500"
                          style={{width: 24, height: 24}}></span>
                ) : (
                    <span className="i-mdi-close-circle-outline text-red-500"
                          style={{width: 24, height: 24}}></span>
                )}
            </div>
        )}
    </div>
);


export const Profile = () => {
    const {user, isUserLoading} = useUser()
    const authInfo = useAuthInfo()

    const [isProfessor, setIsProfessor] = useState(false)
    const [name, setName] = useState('')
    const [university, setUniversity] = useState('')
    const [biography, setBiography] = useState('')

    useEffect(() => {
        setIsProfessor(user?.professor ?? false)
        setUniversity(user?.university ?? '')
        setName(user?.name ?? '')
        setBiography(user?.biography ?? '')
    }, [user])


    const updateUserAsync = async (professor: boolean) => {
        try {
            await axios.post(
                `${import.meta.env.VITE_APP_BACKEND_URL}/proxy/user/update-user`,
                {
                    professor: professor,
                    name: name,
                    university: university,
                    biography: biography
                },
                {
                    headers: {Authorization: `Bearer ${authInfo.accessToken}`}
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {!isUserLoading && authInfo.accessToken && (
                <div className={'grid grid-cols-1 lg:grid-cols-12 gap-4 dark:text-white'}>
                    <div className={'lg:col-span-5 space-y-4'}>
                        <div className={'bg-slate-100 rounded-3xl p-6 dark:bg-slate-700'}>
                            <div className={'flex justify-between items-center'}>
                                <div>
                                    User Role
                                </div>
                            </div>

                            <div className={'mt-5'}>
                                {user && (
                                    <FormControlLabel control={<Switch onChange={
                                        (e) => {
                                            setIsProfessor(e.target.checked)
                                            updateUserAsync(e.target.checked)
                                        }
                                    }
                                                                       checked={isProfessor
                                                                       }/>}
                                                      label="I'm professor"/>
                                )
                                }
                            </div>
                        </div>
                    </div>

                    <div className={'lg:col-span-7'}>
                        <div className={'bg-slate-100 rounded-3xl p-6 space-y-4 dark:bg-slate-700'}>
                            <div className={'flex justify-between items-center'}>
                                <div>
                                    Basic Information
                                </div>

                                <div>
                                    <button
                                        onClick={async () => {
                                            await updateUserAsync(isProfessor)
                                        }}
                                        className={'hover:bg-transparent ring-1 ring-fuchsia-600 hover:bg-fuchsia-600 text-sm text-slate-500 cursor-pointer dark:bg-slate-700 dark:text-white rounded-3xl bg-slate-100 py-1 px-4'}>
                                        Save
                                    </button>
                                </div>
                            </div>
                            <div className={'mt-5 space-y-4'}>
                                <ProfileField
                                    value={name}
                                    onChange={(value) => setName(value)}
                                    label={'Name'}
                                />

                                <ProfileField
                                    label={'Email'}
                                    onChange={() => {
                                    }}
                                    value={authInfo.user?.email}
                                    readonly={true}
                                />

                                <ProfileField
                                    value={university}
                                    label={'University'}
                                    onChange={(value) => setUniversity(value)}
                                />

                                <TextareaAutosize
                                    minRows={3}
                                    className="w-full text-sm font-normal font-sans leading-normal p-3 rounded-xl rounded-br-none shadow-lg shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0 box-border"
                                    aria-label="empty textarea"
                                    placeholder="Bio"
                                    value={biography}
                                    onChange={(e) => setBiography(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
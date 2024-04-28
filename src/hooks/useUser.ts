import useSWR from "swr";
import {useJwtFetcher} from "./useJwtFetcher.ts";
import {useAuthInfo} from "@propelauth/react";

interface User {
    firstname: string | null;
    featured_publications: string | null;
    user_id: string;
    gender: string | null;
    award_honor: string | null;
    pronounce: string | null;
    department: string | null;
    biography: string | null;
    photo: string | null;
    id: string;
    eduemail: string | null;
    research_area: number | null;
    name: string | null;
    phonenumber: number | null;
    middlename: string | null;
    professor: boolean | null;
    personal_homepage: string | null;
    university: string | null;
    lastname: string | null;
    time: string;  // ISO date string
}

export interface Research {
    applied?: boolean;
    id: string;              // UUID string
    title: string;           // Text title
    professor_id: string;    // UUID string for the professor
    description: string;     // Text description, could be empty
    money: number;           // Numeric value
    location: string;        // Text location
    univercity: string;      // Text university name
    isFullTime: boolean;     // Boolean flag for full-time status
    time: string;            // ISO string for time
}


export interface UserResearch {
    researchData: Research;
    applications: {
        id: string;
        letter: string;
        time: string;
        student_id: string;
        status?: number;
    }[];
}

export interface MyApplication {
    research: Research,
    status: number
}

export const useUser = () => {
    const authInfo = useAuthInfo()
    const jwtFetcher = useJwtFetcher();
    const {
        data: user,
        isLoading: isUserLoading
    } = useSWR<User>(authInfo.accessToken ? '/proxy/user/db-user' : null, jwtFetcher, {
        refreshInterval: 1000 * 2
    });
    const isProfileComplete = user?.name;

    const {
        data: userResearches,
        isLoading: isUserResearchesLoading
    } = useSWR<UserResearch[]>(authInfo.accessToken && '/proxy/research/list-by-professor', jwtFetcher, {
        refreshInterval: 1000 * 10
    });


    const {
        data: myApplications
    } = useSWR<MyApplication[]>(authInfo.accessToken ? '/proxy/user/my-applications' : null, jwtFetcher, {
        refreshInterval: 1000 * 10
    });

    return {user, isUserLoading, isProfileComplete, userResearches, isUserResearchesLoading, myApplications};
}
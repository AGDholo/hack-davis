import useSWR from "swr";
import {useJwtFetcher} from "./useJwtFetcher.ts";

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


export const useUser = () => {
    const jwtFetcher = useJwtFetcher();
    const {data: user, isLoading: isUserLoading} = useSWR<User>('/user/db-user', jwtFetcher);
    const isProfileComplete = user?.name;

    return {user, isUserLoading, isProfileComplete};
}
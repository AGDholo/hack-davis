import useSWR from "swr";
import {Research} from "./useUser.ts";
import {useJwtFetcher} from "./useJwtFetcher.ts";
import {useAuthInfo} from "@propelauth/react";

export const useResearch = () => {
    const jwtFetcher = useJwtFetcher();
    const authInfo = useAuthInfo()
    const {
        data: allResearches,
        isLoading: isAllResearchesLoading
    } = useSWR<Research[]>('/research/list', jwtFetcher, {
        refreshInterval: 1000 * 2
    });

    const {
        data: allResearchesByApplied
    } = useSWR(authInfo.accessToken && '/proxy/research/list-by-apply', jwtFetcher, {
        refreshInterval: 1000 * 2
    });

    // get a new research list from all researches and user researches, apply a new field:applied to each research object
    // if the research is in the user researches list, applied is true, otherwise false

    let allResearchesWithApplied = []
    if (authInfo.accessToken && allResearchesByApplied && allResearchesByApplied.length > 0 && allResearches && allResearches.length > 0) {
        allResearchesWithApplied = allResearchesByApplied && allResearches?.map(research => {
            return {
                ...research,
                applied: allResearchesByApplied?.some((userResearch: {
                    research_id: string;
                }) => userResearch.research_id === research.id)
            }
        });
    }


    return {allResearches, isAllResearchesLoading, allResearchesWithApplied};
}
import {episodeServiceAdapter} from "../../services";
import {actionBuilder, requestActionTypesBuilder} from "./action-builder";

const ACTION_NAME = 'FIND_ALL_EPISODES';

const findAllEpisodesActionTypes = requestActionTypesBuilder(ACTION_NAME);

const findAllEpisodesAction = (idPodcast) => actionBuilder(ACTION_NAME
    , async () => episodeServiceAdapter().findAll(idPodcast));

export {
    findAllEpisodesActionTypes,
    findAllEpisodesAction,
};
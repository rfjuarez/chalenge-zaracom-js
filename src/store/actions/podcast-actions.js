import {podcastServiceAdapter} from "../../services";
import {actionBuilder, requestActionTypesBuilder} from "./action-builder";

const ACTION_NAME = 'FIND_ALL_PODCAST';

const findAllPodcastActionTypes = requestActionTypesBuilder(ACTION_NAME);

const findAllPodcastAction = () => actionBuilder(ACTION_NAME
    , podcastServiceAdapter().findAll);

export {
    findAllPodcastActionTypes,
    findAllPodcastAction,
};
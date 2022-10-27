import {convertXML} from "simple-xml-to-json";
import ErrorApiService from "./error-api-service";

const jsonRequestHandler = async (request) => {
    const response = await request();
    const data = await response.json();
    if (response.ok) {
        return data;
    } else throw new ErrorApiService(response.status, data);
}

const xmlRequestHandler = async (request) => {
    const response = await request();
    const data = await response.text();
    const jsonData = convertXML(data);
    if (response.ok) {
        return jsonData;
    } else throw new ErrorApiService(response.status, jsonData);
}

export {
    jsonRequestHandler,
    xmlRequestHandler,
}
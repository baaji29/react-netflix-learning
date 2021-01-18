import axios from "axios";

const ResourceLocator = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default ResourceLocator;

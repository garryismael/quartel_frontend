import Axios from "@/utils/axios";

const login = async ({ data }) => {
	const response = await Axios.post("/api/auth/login", data);
	return response.data;
};

export default {
	login,
};


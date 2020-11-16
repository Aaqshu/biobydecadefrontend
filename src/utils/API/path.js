const baseUrl = "http://localhost:8080/api/users";

const appPath = {
  getLogin: () => {
    const apiPath = `${baseUrl}/login`;
    return apiPath;
  },
  createUser: () => {
    const apiPath = `${baseUrl}/`;
    return apiPath;
  }
};

export default appPath;

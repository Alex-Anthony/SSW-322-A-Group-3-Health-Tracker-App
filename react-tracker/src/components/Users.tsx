interface User {
    username?: string;
    email?: string;
    password?: string;
    fullname?: string;
    firstName?: string;
    lastName?: string;

    height?: string;
    weight?: string;
    gender?: string;
    dob?: string;

    theme?: string;
    weeklyReports?: boolean;
    goalReminders?: boolean;
    healthAlerts?: boolean;

    heartrate?: string;

}

function createUser({ username, password, email, firstName, lastName, height, weight, gender, dob, theme = 'default', weeklyReports = true, goalReminders = true, healthAlerts = true, heartrate }: User) {

    const myUser: User = {
        username: username,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        height: height,
        weight: weight,
        gender: gender,
        dob: dob,

        theme: theme,
        weeklyReports: weeklyReports,
        goalReminders: goalReminders,
        healthAlerts: healthAlerts,

        heartrate: heartrate
    }

    return myUser;

}

const myUser: User = {
    username: "Mary97",
    email: "mary97smith@aol.com",
    password: "Pass1234",
    firstName: "Mary",
    lastName: "Smith",
    height: "5'2''",
    gender: 'Female',

    heartrate: "64",
};

const currUser = createUser(myUser);


function getUsername() {
    return currUser.username;
}

function setUsername(username: string) {
    currUser.username = username;
}

function getEmail() {
    return currUser.email;
}

function setEmail(email: string) {
    currUser.email = email;
}

function getPassword() {
    return currUser.password;
}

function setPassword(password: string) {
    currUser.password = password;
}

function getFirstName() {

    return currUser.firstName;
}

function setFirstName(firstName: string | undefined) {
    currUser.firstName = firstName;
}

function getLastName() {
    return currUser.lastName;
}

function setLastName(lastName: string | undefined) {
    currUser.lastName = lastName;
}

function getFullName() {
    return getFirstName() + ' ' + getLastName();
}

function getHeight() {
    return currUser.height;
}

function setHeight(height: string | undefined) {
    currUser.height = height;
}

function getWeight() {
    return currUser.weight;
}

function setWeight(weight: string | undefined) {
    currUser.weight = weight;
}

function getGender() {
    return currUser.gender;
}

function setGender(gender: string | undefined) {
    currUser.gender = gender;
}

function getDOB() {
    return currUser.dob;
}

function setDOB(dob: string | undefined) {
    currUser.dob = dob;
}

function getTheme() {
    return currUser.theme;
}

function setTheme(theme: string | undefined) {
    currUser.theme = theme;
}

function getWeeklyReports() {
    return currUser.weeklyReports;
}

function setWeeklyReports(weeklyReports: boolean | undefined) {
    currUser.weeklyReports = weeklyReports;
}

function getGoalReminders() {
    return currUser.goalReminders;
}

function setGoalReminders(goalReminders: boolean | undefined) {
    currUser.goalReminders = goalReminders;
}

function getHealthAlerts() {
    return currUser.healthAlerts;
}

function setHealthAlerts(healthAlerts: boolean | undefined) {
    currUser.healthAlerts = healthAlerts;
}

function getHeartrate() {
    return currUser.heartrate;
}



export { getUsername, getEmail, getPassword, getFirstName, getLastName, getFullName, getHeight, getWeight, getGender, getDOB, getTheme, getWeeklyReports, getGoalReminders, getHealthAlerts, getHeartrate, setUsername, setEmail, setPassword, setFirstName, setLastName, setHeight, setWeight, setGender, setDOB, setTheme, setWeeklyReports, setGoalReminders, setHealthAlerts }

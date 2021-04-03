const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const inquire = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

var team = [];

const manQuest = [{
    type: "input",
    name: "name",
    message:"Enter Manager Name",
},
{
    type:'input',
    name:'email',
    message:"Enter Manager's Email"
},
{
    type:"input",
    name:"officeNumber",
    message:"Enter manager office number"
},
{
    type:"input",
    name:"team",
    message:"Do you have a team?",
    choices:["yes","no"]
}

];

const questions = [{
    type:"input",
    name:"name",
    message:"Enter Employee Name",
},
{
    type: "input",
    name: "email",
    message: "Enter Employee Email",
},
{
    type:"list",
    name:"role",
    message:"What is the employee's role?",
    choices: ["engineer","intern"]
},
{
    when: input => {
        return input.role == "engineer"
},

    type:"input",
    name:"github",
    message:"Enter Engineer Github Account",
},
{
    when:input => { return input.role == "intern"},
        type:"input",
        name:"school",
        message:"Enter Intern's School Name",
},
{
    type:"list",
    name:"addMember",
    message: "Are there additional members?",
    choices:["yes","no"]
}
]
function createTeam() {
    inquire.prompt(questions).then(employeeData => {
        if (employeeData.role == "engineer") {
            var newMember = new Intern(employeeData.name, employeeData.email,employeeData.school,team.length + 1,);
        } else {
            var newMember = new Engineer(employeeData.name,employeeData.email,employeeData.github,team.length + 1);
        }
        team.push(newMember);
        if(employeeData.addMember === "Yes") {
            console.log(" ");
            createTeam();
        } else {
            createHtml();
        }
    })
}

function createHtml() {
    let newFile = fs.readFileSync("./templates/main.html")
    fs.writeFileSync("./output/teamPage.html",newFile,function(err){
        if (err) throw err;
    })
    console.log("base html created");

    for (member of team) {
        if (member.getRole() == "Manager") {
            createTeam("manager", member.getName(),member.getId(),member.getEmail(), "Office Number: " + member.getOfficeNumber());
        } else if (member.getRole() == "Engineer") {
            createTeam("manager", member.getName(),member.getId(),member.getEmail(), "Github: " + member.getGithub());
        } else if (member.getRole() == "Intern") {
            createTeam("manager", member.getName(),member.getId(),member.getEmail(), "School: " + member.getSchool());
        }
    }
    fs.appendFileSync('./output/teamPage.html',"</div>M/main></body></html>", function (err) {
        if (err) throw err;
    });
    console.log("Page Created")
}

function buildCard(memType, name, id, email, propertyValue) {
    let data = fs.readFileSync(`./templates/${memType}.html`,'utf8')
    data = data.replace("nameInput",name);
    data = data.replace("idInput",id);
    data = data.replace("emailInput",email);
    data = data.replace("propInput",propertyValue);
    fs.appendFileSync('./output/teamPage.html',data, err => {
        if (err) throw err;
    })
    console.log("card created");
    }

    function init() {
        inquire.prompt(manQuest).then(managerInfo => {
            let teamManager = new Manager(managerInfo.name, 1, managerInfo.email,managerInfo.officeNumber);
                team.push(teamManager);
                console.log(" ");
            if (managerInfo.addMember === "Yes") {
                createTeam();
            } else {
                buildCard();
            }
        })
        
    }

    init();
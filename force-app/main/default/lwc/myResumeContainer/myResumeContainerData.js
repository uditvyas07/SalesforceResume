import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import nikhil from '@salesforce/resourceUrl/nikhil';
export const PROFILE_IMAGE = nikhil

export const SOCIAL_LINKS=[
    {
        type:'twitter',
        label:"twitter/Udit_Vyas",
        link:"https://twitter.com/@ud_vyas",
        icon:SOCIAL+'/SOCIAL/twitter.svg'
    },
    {
        type: "github",
        label: "github/UditVyas",
        link: "https://github.com/uditvyas07",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin/UditVyas",
        link: "https://www.linkedin.com/in/udit-vyas-7545b959/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/uvyas",
        link: "https://www.salesforce.com/trailblazer/uditvyas",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
]

export const USER_DETAILS={
    NAME:'Udit Vyas',
    ROLE:'Senior Salesforce Developer',
    EMAIL:'vyasuidt95@gmail.com',
    PHONE:'+91 9630877141'
}

export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION: "Working as Senior Consultant SFDC – With Yash Technologies.A dynamic and hardworking professional, offering a rich and productive experience of years.Spearheading efforts as SFDC Senior Analyst - with Accenture Worked with HCL Technologies as a Software Developer. Previously worked with VANGAURD SOFT TECH from Dec 2017 to Dec 2019 as Android Developer.",
    KEYS_POINTS:[
        "Certified Salesforce Admin and PD1 Developer & PD2 Developer, App Builder, Copado fundamentals 1, Copado robotic testing, Marketing Cloud Admin.",
        "Experience in tools such as Oracle 10G, Android Studio. Visual studio, Copado, Workbench & Git.",
        "knowledge of development methodologies such as change request/requirement analysis, change impact analysis. ",
        "Ensured the overall quality of all the deliverables. ",
    ]
}

export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Senior Salesforce Developer",
            COMPANY_NAME: "Yash Technologies",
            DURATION: "2023 - Present",
            DESCRIPTION:
                "Manging Team and leading them.Developed multiple POC for business use cases(Sales,Service & Marketing Cloud). And achieved the client appreciation for the business solutioning. Was part of multiple projects and also handling the team and successfully achieving the goals within given timeline. Build POC for business problem and converted into profitable client for company.  ",
            DESCRIPTION_POINTS: [
                "Handling team & supporting team in all phases of development",
                "Estimation Of user Stories and providing the solutioning with story points.",
                "Worked on app exchange product for automation of DocuSign and integration of it.",
                	"Creating Vf page to read PDF data and extracting data and creating record with the product line items.",
                	"Enhancement of LWC according to business requirement.",
                	"Integration Of marketing cloud to social media platform (Facebook/Instagram).",
                	 "Creation of Cloud pages.",
                	"Developed multiple POC for business use cases. And achieved the client appreciation for the business solutioning.",
                	"Implementation of data table flow with LWC.", 
,
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "DocuSign",
                    "Vf Page",
                    "Javascript",
                    "Copado",
                    "HTML5",
                    "LWC",
                    "Git",
                ]
            },
        },
        {
            ROLE: "Senior Salesforce Developer",
            COMPANY_NAME: "Accenture",
            DURATION: "2022 - 2023",
            DESCRIPTION:
                "Participate and help drive phases of the software development lifecycle. Write well designed, testable, efficient, reusable code. Responsible for Project execution throughout the life-cycle of the projects including: Analysis, Requirements Definition, Design, Build & Test, Conversion, Deployment for operations delivery functionality.",
            DESCRIPTION_POINTS: [
                "Creating the application from the scratch with the help of screen flow. ",
                "And to creating the certificate with the help of VF-Page and populating the data with the desired data needed on the certificate. And to integrate send email functionality with the certificate, with the help aura and apex class with the HTML template. ",
                "Implementation and enhancement of LWC with reusable component.",
                "Creating the documentation for the Sprint/User Stories and for post/pre deployment, and to carry out the whole process till production.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Apex",
                    "LWC",
                    "Copado",
                    "Git",
                    "HTML5/JavaScript",
                    "SQL",
                ]
            }
        },
        {
            ROLE: "Software Developer",
            COMPANY_NAME: "HCL Technologies",
            DURATION: "2020 - 2021",
            DESCRIPTION:
                "Maintaining the transactional data of customer to ensure there are no duplicate records.Creating Dash Boards and reports as per the business requirement.Enhancement of the LWC for better overall experience as per need. For seamless experience to the end user.AURA Component/Apex classes. ",
            DESCRIPTION_POINTS: [
                "Creating the Reports Accordingly to the level of authorization. And give the permission of the different according to their role hierarchy.",
                "Creation of object and Validation rules need to implemented",
                "Apex Trigger and SOQL",
                "Test Case for Code Coverage ",
                "Visual Force Page and lighting web component.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Angular",
                    "Bootstsrap",
                    "MobX",
                    "Webpack",
                    "HTML5/CSS3",
                    "Javascript",
                ]
            }
        },
        {
            ROLE: "Andriod Developer",
            COMPANY_NAME: "Vangaurd Soft Tech",
            DURATION: "2017 - 2019",
            DESCRIPTION:
                "Responsible to develop a set of software components which provides base functionality for the application.Impact Analysis in case of new Requirements for the existing Application.Performing code reviews and design reviews.Discussion with clients on enhancement implementation. ",
            DESCRIPTION_POINTS: [
                "Responsible to develop a set of software components which provides base functionality for the application..",
                "Impact Analysis in case of new Requirements for the existing Application.",
                "Devloping fragmention of pages",
                "Creating Package",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "HTML5",
                    "Andriod Studio",
                    "java",
                    
                ]
            }
        },
    ]
}


 export const EDUCATION_DATA={
     ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "EDUCATION",
     LIST:[
      
         {
             NAME: "Bachelor in Information Technology",
             UNIVERSITY_NAME: "L.N.C.T Indore",
             DURATION: "2011 - 2016",
         }
     ]
 }

 export const AWARDS_DATA={
     ICON: SOCIAL + '/SOCIAL/awards.svg',
     HEADING: "AWARDS",
     LIST: [
         
         {
             NAME: "Employee of the year",
             DESCRIPTION:"For consistently devilvering the deliverables on time.",
         },
     ]
 }

export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Administrator",
        },
        {
            NAME: "Salesforce PD I ",
        },
        {
            NAME: "Salesforce PD II",
        },
        {
            NAME: "Salesforce Platform App Builder",
        },
        {
            NAME: "Copado fundamentals I",
        },
        {
            NAME: "Copado robotic testing",
        },
       
    ]
}

export const LANGUAGES_DATA={
    HEADING: "Languages",
    LIST: [
       
        {
            NAME: "English",
            LEVEL: "Professional",
        },
       
    ]
}

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                
                { NAME: "LWC", LEVEL: "70" },
                { NAME: "VF-Page", LEVEL: "65" },
                { NAME: "JavaScript", LEVEL: "89" },
                { NAME: "HTML5/CSS3", LEVEL: "80" },
            ],
        },
        {
            HEADING: "BACKEND",
            SKILLS_LIST: [
                { NAME: "Apex", LEVEL: "80" },
                { NAME: "PHP", LEVEL: "98" },
            ],
        },
        {
            HEADING: "CRM/CMS",
            SKILLS_LIST: [
                { NAME: "Salesforce", LEVEL: "50" },
                 { NAME: "Marketing Cloud", LEVEL: "50" },
                { NAME: "Wordpress", LEVEL: "30" },
            
            ],
        }
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "Git",
            "Copado",
            "Code Review",
            "JIRA",
            "Unit Testing",
            "Google Api",
        ]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Reading", "Cooking", "Cricket"]
}
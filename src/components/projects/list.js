import technologies from './technologies.js';

const projects = [
    {   
        title: "Taxi GPS Tracker",
        desciption:
            "A real-time tracking app for taxi companies that utilizes ELM-327 sensors to measure the rpms of their vehicles, and GPS location of the phone that was sending to the company. The app also features a web page that allows users to view the history of the car's movements within a specific period and compare up to 3 cars at the same time.",
        techStack: [
            {
                alt: 'ReactJS',
                src: technologies.reactjs,
                desc: 'ReactJS for front-end development.'
            },
            {
                alt: 'Node.js',
                src: technologies.nodejs,
                desc: 'NodeJS and Express for back-end development.'
            },
            {
                alt: 'MySQL',
                src: technologies.mysql,
                desc: 'MySQL for database management.'
            },
            {
                alt: 'Kotlin',
                src: technologies.kotlin,
                desc: 'Kotlin for Android app development.'
            },
            {
                alt: 'AWS',
                src: technologies.aws,
                desc: 'AWS for cloud services.'
            }
        ],
        buttons: [
            {
                link: "https://github.com/esacon/TaxiTracker",
                text: "Full project"
            }
        ]
    },
    {   
        title: "COPD Monitoring Wearable Device",
        desciption:
            "A project to facilitate the measurement of respiratory rate in people with Chronic Obstructive Pulmonary Disease (COPD) using a wearable device. The device consists of a mask with an omnidirectional electret microphone that captures audio signals and a transducer that filters the signal to obtain the respiratory rate. The device is connected to a smartphone which records audio samples in .WAV format and stores it on a web server using AWS S3.",
        techStack: [
            {
                alt: 'ReactJS',
                src: technologies.reactjs,
                desc: 'ReactJS for front-end development.'
            },
            {
                alt: 'Flask',
                src: technologies.flask,
                desc: 'Flask for back-end development.'
            },
            {
                alt: 'Python',
                src: technologies.python,
                desc: 'Python for signal analysis.'
            },
            {
                alt: 'MongoDB',
                src: technologies.mongodb,
                desc: 'MongoDB for database management.'
            },
            {
                alt: 'Kotlin',
                src: technologies.kotlin,
                desc: 'Kotlin for Android app development.'
            },
            {
                alt: 'AWS',
                src: technologies.aws,
                desc: 'AWS S3 for file storage.'
            }
        ],
        img: 'https://drive.google.com/uc?export=view&id=1zd-5e78vagz-QLp45bV2L2yHTg1miMzS'
    },
    {   
        title: "CBZ/CBR to PDF Converter",
        desciption:
            "A Python program that allows users to convert comic book files in CBZ or CBR format to a PDF file. It preserves the original formatting of the comic book while providing a convenient and widely supported format for reading on various devices.",
        techStack: [
            {
                alt: 'Python',
                src: technologies.python,
                desc: 'Python.'
            }
        ],
        buttons: [
            {
                link: "https://github.com/esacon/Comic2pdf_converter",
                text: "Project"
            }
        ]
    },
    {   
        title: "Real-time Colombian License Plate Detector",
        desciption:
            "A real-time license plate detector for Colombian license plates using a webcam and Python. The system uses computer vision techniques to detect and recognize Colombian license plates in real-time video feed from a webcam. It allows the user to quickly identify the license plate number and vehicle information.",
        techStack: [
            {
                alt: 'Python',
                src: technologies.python,
                desc: 'Python for computer vision and image processing.'
            },
            {
                desc: 'OpenCV library for image processing and computer vision.'
            }
        ],
        buttons: [
            {
                link: "https://github.com/esacon/plate_detector",
                text: "Project"
            }
        ]
    },
    {   
        title: "Access Control Backend",
        desciption:
            "A backend system for controlling access to spaces using a mobile application. The system allows users to control access to certain spaces and domotic devices using a mobile application. It also includes authentication features to ensure secure access.",
        techStack: [
            {
                alt: 'Node.js',
                src: technologies.nodejs,
                desc: 'NodeJS and Express for back-end development.'
            },
            {
                desc: 'Authentication and authorization using JSON Web Tokens (JWT).'
            }
        ],
        buttons: [
            {
                link: "https://github.com/esacon/pf-domotica-arduino",
                text: "Project"
            }
        ]
    },
];

export default projects;

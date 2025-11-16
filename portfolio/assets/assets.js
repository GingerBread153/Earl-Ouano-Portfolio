import js_image from './java-script.png';
import html_image from './html.png';
import css_image from './css-3.png';
import python_image from './python.png';
import c_image from './c.png';
import cSharp_image from './c-sharp.png';
import ruby_image from './ruby.png';
import java_image from './java.png';
import aws_image from './aws.png';
import moon_icon from './moon.png';
import moon_icon_filled from './moon_filled.png';
import icon_menu from './icon_menu.png';
import cross_menu from './cross.png';
import default_image from './default_image.png';
import download_icon from './download_icon.png';
import arrow_right_icon from './arrow_right.png';


export const assets = {
    prog_languages: {
        js: {
            title: 'JavaScript',
            attribute: 'Javascript icons created by Freepik - Flaticon',
            image: js_image,
        },
        html: {
            title: 'HTML',
            attribute: 'Html icons created by Freepik - Flaticon',
            image: html_image,
        },
        css: {
            title: 'CSS',
            attribute: 'Css icons created by Freepik - Flaticon',
            image: css_image,
        },
        python: {
            title: 'Python',
            attribute: 'Python icons created by Freepik - Flaticon',
            image: python_image,
        },
        c: {
            title: 'C',
            attribute: 'C icons created by Freepik - Flaticon',
            image: c_image,
        },
        cSharp: {
            title: 'C#',
            attribute: 'C# icons created by Freepik - Flaticon',
            image: cSharp_image,
        },
        ruby: {
            title: 'Ruby',
            attribute: 'Ruby icons created by Freepik - Flaticon',
            image: ruby_image,
        },
        kotlin: {
            title: 'Kotlin',
            attribute: 'Kotlin icons created by Freepik - Flaticon',
            image: '',
        },
        java: {
            title: 'Java',
            attribute: 'Java icons created by Freepik - Flaticon',
            image: java_image,
        },
    },
    frameWorks: {
        rails: {
            title: 'Ruby on Rails',
        },
        aspNet: {
            title: 'ASP.NET',
        },
        blazor: {
            title: 'Blazor',
        },
        telerik: {
            title: 'Telerik',
        },
        react: {
            title: 'ReactJS',
        },
        django: {
            title: 'Django',
        },
        flask: {
            title: 'Flask',
        },
    },
    aws_image,
    moon_icon,
    moon_icon_filled,
    icon_menu,
    cross_menu,
    default_image,
    download_icon,
    arrow_right_icon,
}

export const languagesData = [
    assets.prog_languages.c.image,
    assets.prog_languages.cSharp.image,
    assets.prog_languages.java.image,
    assets.prog_languages.js.image,
    assets.prog_languages.html.image,
    assets.prog_languages.css.image,
    assets.prog_languages.python.image,
    assets.prog_languages.ruby.image,
]

export const workExperience = [
    {
        title: 'Intern Software Developer',
        company: 'Advanced World Systems, Inc.',
        description: "",
        dateStarted: 'Feb 2023',
        dateEnded: 'July 2023',
        programLanguagesUsed: [assets.prog_languages.python.title],
        frameWorksUsed: [assets.frameWorks.django.title, assets.frameWorks.flask.title],
        bgImage: aws_image,
        currentlyWorking: false,
    },
    {
        title: 'Junior Software Developer',
        company: 'Advanced World Systems, Inc.',
        description: "",
        dateStarted: 'Sept 2023',
        dateEnded: 'July 2025',
        programLanguagesUsed: [assets.prog_languages.cSharp.title, assets.prog_languages.js.title],
        frameWorksUsed: [assets.frameWorks.aspNet.title, assets.frameWorks.telerik.title, assets.frameWorks.blazor.title],
        bgImage: aws_image,
        currentlyWorking: false,
    },
    {
        title: 'Software Developer',
        company: 'Advanced World Systems, Inc.',
        description: "",
        dateStarted: 'July 2025',
        dateEnded: 'Present',
        programLanguagesUsed: [assets.prog_languages.cSharp.title, assets.prog_languages.js.title],
        frameWorksUsed: [assets.frameWorks.aspNet.title, assets.frameWorks.telerik.title, assets.frameWorks.blazor.title],
        bgImage: aws_image,
        currentlyWorking: true,
    },
]

export const certifications = {
    JavaScript: [
        {
            title: 'Entry-Level JavaScript Programmer (JSE-40-01)',
            dateIssued: 'April 12, 2025',
            url: 'https://verify.openedg.org/?id=PW7v.nouM.miyQ'
        },
    ],
}

export const linkedIn = {
    url: 'https://www.linkedin.com/in/earl-ouano-711006261 ',
}

export const university = {
    name: 'University of San Carlos',
    degree: "Bachelor's",
    course: 'Computer Engineer',
    yearStarted: '2019',
    yearEnded: '2023',
    bgImage: ''
}

export const informations = {
    languages: [
        {
            name: 'English',
            fluency: 'Fluent',
        },
        {
            name: 'Japanese',
            fluency: 'Basic',
        }
    ],
    softSkills: [
        'Empathy', 'Critical Thinking', 'Communication', 'Time Management', 'Leadership', 'TeamWork',
    ],
    willingToRelocate: true,
}

export const profile = {
    email: 'ouano.mal@gmail.com',
    workExperience,
    certifications,
    linkedIn,
    university,
    informations,
};
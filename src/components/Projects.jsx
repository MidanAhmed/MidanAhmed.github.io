import React from 'react'
import ProjectCard from './ui/ProjectCard'

const quotidian = [
    "Discover daily inspiration with Quotidian, where you'll receive a fresh and uplifting quote everyday delivered to your email. Users have the flexibility to choose the specific time they wish to receive these emails.",
    "This project was crafted using Next.js, React, Resend, and Defer."
]

const ht = [
    "Designed and implemented a straightforward chat application featuring rooms and integrated Google Sign-In for user authentication. The application was developed using React and deployed on Firebase for seamless accessibility.",
    "This project also marked my introduction to working with React, providing me with valuable hands-on experience in building user interfaces with this popular JavaScript library."
]

const nlp = [
    "This project showcases an Extractive Text Summarization model leveraging Natural Language Processing (NLP) techniques. By automatically identifying and extracting key sentences or phrases from a given document, the model produces coherent and concise summaries. Implemented in Python, the application offers both text input and image upload functionalities through a user-friendly GUI.",
    "Major libraries such as NumPy, EasyOCR, NLTK, and Flask contribute to its efficient execution."
]

const ddos = [
    "This project presents a robust approach to Distributed Denial-of-Service (DDoS) attack detection using machine learning algorithms. By leveraging multiple algorithms like Logistic Regression, Decision Tree Classifier, Random Forest Classifier, and Gaussian Naive Bayes, the system accurately identifies and mitigates potential DDoS threats.",
    "Implemented in Jupyter Notebook, the application provides a user-friendly Graphical User Interface (GUI) for easy interaction. Key Python libraries such as NumPy, Pandas, scikit-learn, and Tkinter facilitate efficient implementation."
]

function Projects() {
    return (
        <div className='max-w-3xl text-lg sm:text-xl mx-auto bg-slate-950 p-4 rounded-md'>
            <p className='text-2xl mb-8 font-bold'>Projects</p>
            <ProjectCard title="Quotidian" logosrc="quotidian.svg"
                deployedlink="https://www.quotidian.cloud"
                description={quotidian} />
            <ProjectCard title="hi there" logosrc="ht.svg"
                deployedlink="https://hi-there-chat-app.web.app"
                description={ht} />
            <ProjectCard title="Text Summarization using Natural Language Processing"
                description={nlp} />
            <ProjectCard title="DDoS Detection" description={ddos}/>
        </div>
    )
}

export default Projects
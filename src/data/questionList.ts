import { IQuestion } from './../types';

export const questionList:Array<IQuestion> = [
    {
        question: '1. The lifecycle methods are mainly used for _____',
        suggestions: [
            { suggestion: 'freeing up resources', correct: true },
            { suggestion: 'keeping track of event history' },
            { suggestion: 'enhancing components' },
            { suggestion: 'none of the above' },
        ],
    },
    {
        question: '2. In React.js, how we can pass the data from one component to another in React.js?',
        suggestions: [
            { suggestion: 'SetState' },
            { suggestion: 'Render with arguments' },
            { suggestion: 'Props', correct: true },
            { suggestion: 'PropTypes' },
        ],
    },
    {
        question: '3. Which of the following is true about key props?',
        suggestions: [
            { suggestion: '"Key" props are used to look beauty' },
            { suggestion: '"Key" prop is a way to identify the newly added element', correct: true },
            { suggestion: 'It is one type of attribute of HTML' },
            { suggestion: 'It is not used in the array' },
        ],
    },
    {
        question: '4. What is the best definition of React.js?',
        suggestions: [
            { suggestion: 'Server-side Framework' },
            { suggestion: 'A Library for building interaction interfaces', correct: true },
            { suggestion: 'User-interface framework' },
            { suggestion: 'None of These' },
        ],
    },
    {
        question: '5. Which of the following is a way to handle data in React.js?',
        suggestions: [
            { suggestion: 'State & Component' },
            { suggestion: 'State & Props', correct: true },
            { suggestion: 'Services & Components' },
            { suggestion: 'State & Services' },
        ],
    },
    {
        question: '6. React is mainly for building ________',
        suggestions: [
            { suggestion: 'Connectivity' },
            { suggestion: 'Database' },
            { suggestion: 'Design platform' },
            { suggestion: 'User Interface', correct: true },
        ],
    },
    {
        question: '7. How can we prevent default behavior in React?',
        suggestions: [
            { suggestion: 'using preventDefault()', correct: true },
            { suggestion: 'using revokeDefault()' },
            { suggestion: 'using avoidDefault()' },
            { suggestion: 'None of the options' },
        ],
    },
    {
        question: '8. JSX is faster because it performs _______ while compiling code to JavaScript',
        suggestions: [
            { suggestion: 'Modification' },
            { suggestion: 'Compression' },
            { suggestion: 'Optimization', correct: true },
            { suggestion: 'Encryption' },
        ],
    },
    {
        question: '9. ref is used to refer a element / component returned by ______',
        suggestions: [
            { suggestion: 'react()' },
            { suggestion: 'reduce()' },
            { suggestion: 'refer()' },
            { suggestion: 'render()', correct: true },
        ],
    },
    {
        question: '10. State can be initialized when code is loaded or state can be set on event changes.',
        suggestions: [
            { suggestion: 'False' },
            { suggestion: 'True', correct: true }
        ],
    },
];
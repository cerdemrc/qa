export interface IQuestion{
    question: string,
    suggestions: Array<IAnswers>
}

export type IAnswers = {
    correct?: boolean,
    suggestion: string
}

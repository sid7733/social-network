

export type MessageType = {
    id: number,
    message: string
}

export type DialogType = {
    id: number,
    name: string,
    avatar: string
}

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

export type DialogsActionType =  ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar: ''},
        {id: 2, name: 'Andrey', avatar: ''},
        {id: 3, name: 'Sveta', avatar: ''},
        {id: 4, name: 'Sasha', avatar: ''},
        {id: 5, name: 'Victor', avatar: ''},
        {id: 6, name: 'Valera', avatar: ''}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessageType>,
    newMessageBody: ""
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state:InitialStateType = initialState, action: DialogsActionType): InitialStateType => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
         return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE}) as const

export const updateNewMessageBodyCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
}) as const

export default dialogsReducer
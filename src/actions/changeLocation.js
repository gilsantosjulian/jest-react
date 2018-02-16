import { CHANGE_LOCATION, SET_SELECTED_DATE, SET_SELECTED_TEMP } from '../actionTypes'

export function changeLocation(newLocation) {
    return {
        type: CHANGE_LOCATION,
        location: newLocation
    }
}

export function setSelectedDate(newDate) {
    return {
        type: SET_SELECTED_DATE,
        date: newDate
    }
}

export function setSelectedTemp(newTemp) {
    return {
        type: SET_SELECTED_TEMP,
        temp: newTemp
    }
}
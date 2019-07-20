export const FETCH_BUSES_REQUEST = 'FETCH_BUSES_REQUEST'
export const IS_FETCHING_BUSES = 'IS_FETCHING_BUSES'
export const FETCHED_BUSES = 'FETCHED_BUSES'
export const FETCH_BUSES_FAILED = 'FETCH_BUSES_FAILED'

export const fetch = () => {
    return {
        type: FETCH_BUSES_REQUEST
    }
}

export const isFetching = () => {
    return {
        type: IS_FETCHING_BUSES
    }
}

export const fetched = (items) => {
    return {
        type: FETCHED_BUSES,
        payload: items
    }
}

export const fetchFailed = (error) => {
    return {
        type: FETCH_BUSES_FAILED,
        payload: error
    }
}

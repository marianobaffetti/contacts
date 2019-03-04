export const fetchData = (contacts) => {
  return {
    type: 'FETCH',
    payload: contacts
  }
}

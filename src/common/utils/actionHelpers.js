// helper function to print HTTP errors to console
// responses are structured in JSONAPI format
export const printError = (res, json) => {
  console.error("HTTP Error")
  console.error(
    `HTTP Response: ${res.status}
    Title: ${json.title}
    Detail: ${json.detail}`,
  )
}

// helper function to create Error objects for UI display
export const createErrorObj = (err, msg) => ({
  status: err,
  title: msg,
})

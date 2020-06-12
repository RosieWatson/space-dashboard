const shouldUseCachedData = (state, currentDateTime, obj) => {
  const timeLastFetched = state[obj].timestamp
  if (!timeLastFetched) return false

  const hasError = state[obj].error
  if (hasError) return false

  const timeNeedsUpdating = new Date(currentDateTime.setMinutes(currentDateTime.getMinutes() + 15))
  return Date.parse(timeNeedsUpdating) > Date.parse(timeLastFetched)
}

export default { shouldUseCachedData }

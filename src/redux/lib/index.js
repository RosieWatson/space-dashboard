const shouldUseCachedData = (state, currentDateTime, obj) => {
  const lastFetched = state[obj].timestamp
  if (!lastFetched) return false

  const hasError = state[obj].error
  if (hasError) return false

  const timeLastFetched = new Date(lastFetched)
  const timeNeedsUpdating = new Date(timeLastFetched.setMinutes(timeLastFetched.getMinutes() + 15))
  return Date.parse(timeNeedsUpdating) > Date.parse(currentDateTime)
}

export default { shouldUseCachedData }

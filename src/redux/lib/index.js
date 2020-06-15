const shouldUseCachedData = (state, currentDateTime, main, sub) => {
  const lastFetched = sub ? state[main][sub].timestamp : state[main].timestamp
  if (!lastFetched) return false

  const hasError = sub ? state[main][sub].error : state[main].error
  if (hasError) return false

  const timeLastFetched = new Date(lastFetched)
  const timeNeedsUpdating = new Date(timeLastFetched.setMinutes(timeLastFetched.getMinutes() + 15))
  return Date.parse(timeNeedsUpdating) > Date.parse(currentDateTime)
}

export default { shouldUseCachedData }

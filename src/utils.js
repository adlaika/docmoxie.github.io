export const importAll = (r) => r.keys().map(r)

export const fetchList = async function(urls) {
  return await Promise.all(urls.map(async url => {
    const response = await fetch(url)
    return await response.text()
  }))
}

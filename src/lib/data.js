export const getFechData = async () => {
  const res = await fetch('https://tiles-gallery-server-sksf.onrender.com/tiles')
  const data = await res.json()
  return data
}
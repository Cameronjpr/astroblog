export function groupByYear(photos: any[]) {
  return photos.reduce((acc, curr) => {
    const year = new Date(curr.data.shot).getFullYear()
    if (acc[year]) {
      acc[year].push(curr)
    } else {
      acc[year] = [curr]
    }
    return acc
  }, {})
}

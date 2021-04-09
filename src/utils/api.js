import { useQuery } from 'react-query'

export function useSearch(search) {
  const searchArray = search
    .replaceAll(',', ' ')
    .replaceAll('-', ' ')
    .replaceAll('(', ' ')
    .replaceAll(')', ' ')
    .split(' ')
  const searchSentence = searchArray
    .map(
      (term) =>
        `Nom_base_fran%C3%A7ais:(*${term.toLowerCase()}*%20OR%20*${term.toUpperCase()}*%20OR%20*${
          term.charAt(0).toUpperCase() + term.slice(1).toLowerCase()
        }*)%20AND%20`
    )
    .join('')
  return useQuery(
    ['search', search],
    () =>
      search.length > 2
        ? fetch(
            `https://koumoul.com/s/data-fair/api/v1/datasets/base-carbone(r)/lines?qs=${searchSentence}Statut_de_l%27%C3%A9l%C3%A9ment:%22Valide%20g%C3%A9n%C3%A9rique%22%20AND%20Type_de_l%27%C3%A9l%C3%A9ment:%22Facteur%20d%27%C3%A9mission%22%20AND%20Type_Ligne:%22El%C3%A9ment%22&size=2000`
          ).then((res) => res.json())
        : Promise.resolve({ results: [] }),
    {
      keepPreviousData: true,
    }
  )
}
export function useProduct(id) {
  return useQuery(['product', id], () =>
    fetch(
      `https://koumoul.com/s/data-fair/api/v1/datasets/base-carbone(r)/lines?qs=_id:"${id}"`
    ).then((res) => res.json())
  )
}

import React, { useState } from 'react'

import useDebounce from 'hooks/useDebounce'

import SearchContext from 'utils/SearchContext'

export default function SearchProvider(props) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  return (
    <SearchContext.Provider
      value={{
        search,
        debouncedSearch,
        setSearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}

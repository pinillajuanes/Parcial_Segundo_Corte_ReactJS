
export const SearchMealByName = async (name) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    const data = await response.json()
    return data.meals
}

export const FetchMealById = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await response.json()
    return data.meals[0]
}

export const FetchMealByFirstLetter = async (letter = 'b') => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    const data = await response.json()
    return data.meals
}

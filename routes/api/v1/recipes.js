const router = require('express').Router()

const recipes = require('../../../data/recipes.json')


//Map - Return all recipes in the database
router.get('/', async (request, response) => {
    const recipeList = recipes.map((recipes) => ({ 
        id: recipes.id, 
        title: recipes.title, 
        image: recipes.image, 
        prepTime: recipes.prepTime,
        difficulty: recipes.difficulty }))
    return response.json(recipeList)
})

//Id - Return full recipe object
router.get('/recipe/:id', async (request, response) => {
    const { id } = request.params
    const found = recipes.find(p => p.id.toString() === id.toString())
    if (found) response.send(found)
    else response.send({ error: {message: `Could not find recipe with id: ${id}`}})
})

//Add new recipe to the array of recipes - no "id" listed in endpoints
router.post('/recipe/add', (request, response) => {
    const { title, image, prepTime, difficulty, instructions } = request.body
    const recipeId = recipes.length + 1
    const found = recipes.find(p => p.title === title)
    if (found) response.send({error: { message: `Recipe with title: ${title}, already exists`}})
    else recipes.push({ id:recipeId, title, image, prepTime, difficulty, instructions })
})

module.exports = router
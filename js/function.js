const loadCategories = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json()
    showCategories(data.categories)
}


const showCategories = (categories) => {
    const container= document.getElementById('category-container')
    categories.forEach(item => {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerText = item.category
        container.append(btn)
        
    })
}

loadCategories()

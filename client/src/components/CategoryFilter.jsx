import DownArrow from '../assets/down-arrow-icon.svg?react'

function CategoryFilter() {
  return (
    <div id='category-filter' className='filter'>
      <div>
        <h3>Product Categories</h3>
        <DownArrow />
      </div>
      <input
        type='checkbox'
        name='men'
        id='men'
      />
      <label htmlFor='men'>Men</label>
      <input
        type='checkbox'
        name='women'
        id='women'
      />
      <label htmlFor='women'>Women</label>
      <input
        type='checkbox'
        name='jewelry'
        id='jewelry'
      />
      <label htmlFor='jewelry'>Jewelry</label>
      <input
        type='checkbox'
        name='electronics'
        id='electronics'
      />
      <label htmlFor='electronics'>Electronics</label>
    </div>
  )
}

export default CategoryFilter

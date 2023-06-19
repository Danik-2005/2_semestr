import React from 'react';
import { tableList } from '../sortTable.data'
import "../styles/table.css"

class SortTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sortMode: 'default',
            reverse: false
        }
    }
  render() {

    // фун-я для изменения текущего метода сортировки 
    const switchSortMode = (e) => {
        if (this.state.sortMode === e.target.dataset.value)
            this.setState((state) => { return {reverse: !state.reverse} })

        this.setState({
            sortMode: e.target.dataset.value
        })
    }
    
    // фун-я, возвращающая отсортированный массив товаров
    // сортировка по имени, цене и наличию
    const sortedList = () =>{
        let sortMode = this.state.sortMode
        let reverse = this.state.reverse
        let newList = [...tableList]

        if(reverse === false){
            if (sortMode === 'name'){
                newList = newList.sort((a, b) => a.name - b.name)
            }
            else if (sortMode === 'price'){
                newList = newList.sort((a, b) => a.price - b.price)
            }
            else if (sortMode === 'stock'){
                newList = newList.sort((a, b) => a.stock - b.stock)
            }
        }
        else{
            if (sortMode === 'name'){
                newList = newList.sort((a, b) => a.name - b.name).reverse()
            }
            else if (sortMode === 'price'){
                newList = newList.sort((a, b) => a.price - b.price).reverse()
            }
            else if (sortMode === 'stock'){
                newList = newList.sort((a, b) => a.stock - b.stock).reverse()
            }
        }
        return newList
    }

    return (
      <div> 
        <br />
        <hr />
        <br />


        {/* Кастомная таблица */}


        <div className='table'>
            <div className='th'> 
                <div className='td th id' data-value='default' onClick={(e) => switchSortMode(e)} >ID</div>
                <div className='td th' data-value='name' onClick={(e) => switchSortMode(e)} >Name</div>
                <div className='td th' data-value='price' onClick={(e) => switchSortMode(e)} >Price</div>
                <div className='td th' data-value='stock' onClick={(e) => switchSortMode(e)} >In Stock</div>
            </div>
            
        { sortedList().map((product, id) => 
            <div className='tr' key={id}>
                <div className='td id'>{id + 1}</div>
                <div className='td'>{product.name}</div>
                <div className='td'>${product.price}</div>
                <div 
                    className='td' 
                    style={ Number(product.stock) === 0 ? {backgroundColor : 'darkorange', borderRadius: '5px'}
                         : product.stock > 0 && product.stock < 3 ? {backgroundColor:"lightgreen", borderRadius: '5px'}
                         : null }
                >
                    {product.stock}
                </div>
            </div>
        )}
        </div>


      </div>
    );
  }
}

export default SortTable;
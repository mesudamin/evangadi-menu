import  { Component } from 'react'

export default class MenuBluePrint extends Component {
  render() {
    const { img,title,  price,desc } = this.props;
    return (
      <>
      
         <div class="single-food">
          <div class="img">
            <img
              src={img}
            />
          </div>
          <div class="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div class="food-desc">{desc}
          </div>
        </div>





      
      </>
    )
  }
}

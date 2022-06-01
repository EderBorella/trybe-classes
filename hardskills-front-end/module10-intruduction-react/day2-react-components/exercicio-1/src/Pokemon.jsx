import React from "react"

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;
    return (
      <div className="poke-card">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={image} alt={moreInfo}></img>
        </div>
      </div>
    )
  }
}
export default Pokemon
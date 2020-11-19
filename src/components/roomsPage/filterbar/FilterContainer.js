import React, { useContext } from "react";
import { RoomsContext } from "../../../globalState/contexts/RoomsProvider";
import { Title } from "../../layout/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export const FilterContainer = ({ rooms }) => {
  const context = useContext(RoomsContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    pets,
    breakfast,
    minSize,
    maxSize,
    minPrice,
    maxPrice
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");

  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              onChange={handleChange}
              checked={breakfast}
              id="breakfast"
              name="breakfast"
              type="checkbox"
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>{" "}
          <div className="single-extra">
            <input
              onChange={handleChange}
              checked={pets}
              id="pets"
              name="pets"
              type="checkbox"
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

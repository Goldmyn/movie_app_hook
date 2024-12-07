import React from "react";
import { Input, Rate } from "antd";

const Filter = ({
  titleQuery,
  setTitleQuery,
  selectedRating,
  setSelectedRating,
}) => {
  return (
    <>
      <h1 className="text-center font-bold uppercase mb-6">Filter Movies</h1>
      <div className="filter-container flex flex-col  gap-1  justify-center items-center">
        <Input
          placeholder="Search by Movie Title"
          value={titleQuery}
          onChange={(e) => setTitleQuery(e.target.value)}
          size="large"
          className="max-w-[550px]"
        />
        <div className="grid items-center justify-center align-middle">
          <span className="font-semibold uppercase ">Search by Rating</span>
          <Rate
            allowHalf
            value={selectedRating}
            onChange={setSelectedRating}
            style={{ marginBottom: 16 }}
            className="bg-white p-2 rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Filter;

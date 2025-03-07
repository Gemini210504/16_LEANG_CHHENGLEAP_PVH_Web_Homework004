import React from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";
import { useState } from "react";

export default function LearningMaterialsComponent() {
  const [starredItems, setStarredItems] = useState([]);
  const [sortItem, setSortItem] = useState(learningMaterials);
  const toggleStar = (id) => {
    setStarredItems(
      (prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id) 
          : [...prev, id] 
    );
  };
  
  const handleSortDataChange = (sortOption) => {
    let sorted = [...learningMaterials]; 
    sorted =
      sortOption === "A-Z"
        ? sorted.sort((a, b) => a.title.localeCompare(b.title)) 
        : sorted.sort((a, b) => b.title.localeCompare(a.title)); 

    setSortItem(sorted); 
  };


  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent  onSortChange={handleSortDataChange}/>

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}

      <div className="space-y-3 p-4">
        {sortItem.map((material, index) => (
          <div
            key={index}
            className="bg-light-gray px-4 py-2 flex gap-5 items-center"
          >
            <img
              src={material.image}
              alt={material.title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{material.title}</p>
                <Star
                  size={20}
                  className="cursor-pointer"
                  fill={`${
                    starredItems.includes(material.id) ? "#FAA300" : "none"
                  }`}
                  stroke={`${
                    starredItems.includes(material.id) ? "#FAA300" : "#2B343B"
                  }`}
                  onClick={() => toggleStar(material.id)} // Toggle favorite
                />
              </div>
              <p className="text-gray-400 text-sm">
                Posted at: {material.postedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


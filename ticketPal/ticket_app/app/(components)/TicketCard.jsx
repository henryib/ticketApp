import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import Status from "./Status";

const Ticket = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">Description</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">01/05/2024</p>
          <ProgressBar />
        </div>
        <div className="ml-auto flex items-end">
          <Status />
        </div>
      </div>
    </div>
  );
};

export default Ticket;

import React from "react";
import "./Card.css";
import backlog from '../../icons_FEtask/Backlog.svg'
import inprogress from '../../icons_FEtask/in-progress.svg'
import done from '../../icons_FEtask/Done.svg'
import close from '../../icons_FEtask/Cancelled.svg'
import todo from '../../icons_FEtask/To-do.svg'
import urgent from '../../icons_FEtask/SVG - Urgent Priority colour.svg'
import low from '../../icons_FEtask/Img - Low Priority.svg';
import medium from '../../icons_FEtask/Img - Medium Priority.svg';
import high from '../../icons_FEtask/Img - High Priority.svg';
import dot from '../../icons_FEtask/3 dot menu.svg'

const userLetters = {
  "usr-1": "AS",
  "usr-2": "Y",
  "usr-3": "SK",
  "usr-4": "R",
  "usr-5": "S",
};

const userColors = {
  "usr-1": "purple", 
  "usr-2": "blue",
  "usr-3": "green",
  "usr-4": "red",
  "usr-5": "orange",
};


const Card = ({ id, title,userId, tag, status, priority }) => {
  
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done'];

  const randomLetters = userLetters[userId] || "";
  const randomColor = userColors[userId] || "#FFFFFF";

  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
       <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        {localStorage.getItem("group") !== "user" &&
        <div
          className="imageContainer relative"
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: randomColor,
            color: "#fff",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
         <div
            style={{
              width: "95%",
              height: "95%",
              borderRadius: "50%",
              backgroundColor: randomColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {randomLetters}
          </div>
          <div className="showStatus"></div>
        </div>
      }
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus &&
          (
            status === "Backlog" ? (
              <img src={backlog} style={{ fontSize: "14px" }} />
            )
              : status === "Todo" ? (
                <img  src={todo} style={{ fontSize: "14px" }} />
              ) : status === "In progress" ? (
                <img src={inprogress} style={{ fontSize: "14px"}}/>
              ) : status === "Done" ? (
                 <img src={done} alt="done"/>
              )
                : (
                  <img src={close} alt="close" />
                ))}
        <span style={{ margin: "0.2px",padding:"5px"}}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
                    {priority=== 1 ? (
                        <img src={low} alt="Low Priority" style={{ width: '24px', height: '24px' }} />
                      ) : priority === 2 ? (
                        <img src={medium} alt="Medium Priority" style={{ width: '24px', height: '24px' }} />
                      ) : priority === 3? (
                        <img src={high} alt="High Priority" style={{ width: '24px', height: '24px' }} />
                      ) : priority === 4 ? (
              <img src={urgent} alt="urgent" />
            ) : (
              <p>...</p>
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;

import React from "react";
import "./Card.css";
import { FaUserCircle } from "react-icons/fa";
import backlog from '../../icons_FEtask/Backlog.svg'
import inprogress from '../../icons_FEtask/in-progress.svg'
import done from '../../icons_FEtask/Done.svg'
import close from '../../icons_FEtask/Cancelled.svg'
import todo from '../../icons_FEtask/To-do.svg'
import urgent from '../../icons_FEtask/SVG - Urgent Priority colour.svg'
import low from '../../icons_FEtask/Img - Low Priority.svg';
import medium from '../../icons_FEtask/Img - Medium Priority.svg';
import high from '../../icons_FEtask/Img - High Priority.svg';
const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done'];
  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
         
         <FaUserCircle  style={{ width: "95%", height: "95%", borderRadius: "50%" }} icon="fa-regular fa-user" />
          <div className="showStatus"></div>
        </div>
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
        <span style={{ margin: "0.2px" }}>{title}</span>
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

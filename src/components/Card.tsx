import React from "react";

const Card = (props: any) => {
  return (
    <div className="card">
      {" "}
      {/** div for img,name,tags can be made different component also */}
      <div className="card-img">
        {" "}
        {/** div for image */}
        <img src={props.record.avatar_url} alt="" />
      </div>
      <div className="card-info">
        <div>
          <div className="info-title">
            {" "}
            {/** div for username */}
            {props.record.login}
          </div>
          <div className="info-body">{`llowing{/other_user}`}</div>
        </div>
        <div className="info-tags">
          {" "}
          {/** div for tags */}
          <div className="tag">
            <div className="tag-name">Articles</div>
            <div className="tag-value">38</div>
          </div>
          <div className="tag">
            <div className="tag-name">Followers</div>
            <div className="tag-value">980</div>
          </div>
          <div className="tag">
            <div className="tag-name">Rating</div>
            <div className="tag-value">8.9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

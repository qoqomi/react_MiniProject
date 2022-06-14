import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deletePost } from "../redux/modules/post";
import {
  faHeart,
  faDeleteLeft,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const dispatch = useDispatch();
  const { title, description, image, user_id } = props;
  console.log(user_id);
  const [images, setImages] = React.useState(image);

  return (
    <>
      <Aarticle>
        <Contents>
          {images === "" ? (
            <div></div>
          ) : (
            <img
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
              src={image}
            />
          )}

          <TopName>
            <h4>{title}</h4>
            <Name>
              <span>
                <FontAwesomeIcon
                  icon={faFilePen}
                  style={{ color: "#1e1e1e", fontSize: "15px" }}
                />
              </span>
              <FontAwesomeIcon
                icon={faDeleteLeft}
                style={{
                  color: "#1e1e1e",
                  marginLeft: "10px",
                  fontSize: "18px",
                }}
                onClick={() => {
                  dispatch(deletePost(user_id));
                }}
              />
            </Name>
          </TopName>
          {images ? <p>{description}</p> : <P>{description}</P>}
        </Contents>
        <Name>
          <span>닉네임</span>
          <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#d1180b" }} />
          </div>
        </Name>
      </Aarticle>
    </>
  );
};
const Aarticle = styled.div`
  background-color: white;
  box-sizing: inherit;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.1);
    transform: translateY(-3px);
  }
`;
const Contents = styled.div`
  padding: 0.625rem;
  margin: 1rem;
  box-sizing: inherit;
  height: 70%;
  /* background: pink; */
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  padding: 0.625rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f1f3f5;
  line-height: 1.5;
  box-sizing: inherit;
  font-size: 0.75rem;
`;

const TopName = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;
const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
`;
export default Card;
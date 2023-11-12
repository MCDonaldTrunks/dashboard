import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PicturesModal from "./PicturesModal";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  z-index: 0;
  padding: 0 15px 15px 0;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  background-color: #1c244b;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #313f83;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
`;

const Picturebox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  img{
    height: 200px;
    width: 100px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

let pictures = [
  {
    albums: {
      album1: [],
      album2: [],
      album3: [],
      album4: [],
    },
  },

  {
    Picture: {
      
    },
  },
];

console.log(pictures[1].Picture.picture1);

function Pictures(props) {
  //const [image, setImage] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [picture, setPicture] = useState(null);

  const addPicture = (item) => {
    console.log("add picture innit");
    console.log(item);
    console.log(picture);

    setPicture(item);
    console.log("halfway point--------------------");
    let picsLength = () => {
      let count = 0
      for( let item in pictures[1].Picture){
        count++
      }
      return count + 1;
    }
    pictures[1].Picture[`picture${picsLength()}`] = item;
    console.log('Picture folder keys')
    console.log(pictures[1].Picture)
    console.log(item);
    console.log(picture);
    console.log("add picture finished");

    // useEffect(() => {
    //   console.log('use affct function')
    //   console.log(picture)
    // },[picture]);
  };

  return (
    <>
      <Title>Pictures</Title>
      <StyledButton onClick={() => setModalOpen(true)}>
        Add Picture
      </StyledButton>
      <Wrapper>
        <div className="albums"></div>
        <div className="latest" style={{ height: " 500px", width: "100%" }}>
          {picture && (
            
            <Picturebox id="picturebox">
              {console.log(pictures)}
              {
                Object.keys(pictures[1].Picture).map((item, i) => {
                  return (
                    <img key={i} src={pictures[1].Picture[`${item}`]} alt="picture"></img>

                  )
                })
              }
              {console.log(pictures)}
              {/* {console.log(picture)}
              <h1>Picture</h1>
              <img
                
                src={pictures[1].Picture.picture1} //pictures[1].Picture.picture1[0][0]
                alt="picture"
              /> */}
            </Picturebox>
          )}
        </div>
        <input
          type="file"
          id="myfile"
          //value={picture ? picture : null}
          name="myfile"
          onChange={(e) => {
            console.log('onChange input func')
            setPicture(e.target.files[0]);
            console.log(e.target.files)
            console.log(picture);
          }}
        ></input>
        <div className="pictures"></div>
      </Wrapper>
      <PicturesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        //onEventAdded={(event) => onEventAdded(event)}
        addPicture={(item) => addPicture(item)}
      ></PicturesModal>
    </>
  );
}

export default Pictures;

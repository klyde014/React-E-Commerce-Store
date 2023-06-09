import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import { sliderItems } from "../Data"
import { mobile, tablet, laptop } from "../Responsive"

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
    ${tablet({ height: "70vh" })}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props)=> props.direction === "left" && "10px"};
    right: ${(props)=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideindex  * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    ${tablet({ height: "70vh" })}
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    padding-top: 70px;
    ${tablet({ width: "50%" })}
`

const Image = styled.img`
    height: 80%;
    width: 80%;
    padding-left: 40px;
    object-fit: cover;
    ${tablet({ width: "500px", objectFit: "contain", paddingRight: "50px" })}
    ${laptop({ width: "450px", objectFit: "cover", paddingLeft: "20px" })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding-right: 50px;
`

const Title = styled.h1`
    font-size: 70px;
    ${'' /* ${tablet({ fontSize: "0px", paddingLeft: "30px" })} */}
    ${laptop({ fontSize: "50px", paddingLeft: "30px" })}
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 3px;
    ${'' /* ${tablet({ fontSize: "20px", paddingLeft: "30px" })} */}
    ${laptop({ fontSize: "20px", paddingLeft: "30px" })}
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    ${laptop({ fontSize: "15px", marginLeft: "30px" })}
`

const Slider = () => {
//For SlideShow Transition ==============================
const [slideindex, setSlideIndex] = useState(0);
const handleClick = (direction) => {
  if(direction === "left") {
    setSlideIndex(slideindex > 0 ? slideindex - 1 : 2)
  } else {
    setSlideIndex(slideindex < 2 ? slideindex + 1 : 0)
  }
//=======================================================
};

  return (
    <Container>
    <Arrow direction = "left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
    </Arrow>
    <Wrapper slideindex={slideindex}>
      {sliderItems.map((item) => (

      <Slide bg={item.bg} key={item.id}>
      <ImgContainer>
          <Image src={item.img} />
      </ImgContainer>
      <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>SHOW NOW</Button>
      </InfoContainer>
      </Slide>
      ))}
    </Wrapper>
    <Arrow direction = "right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
    </Arrow>
    </Container>
  )
}

export default Slider
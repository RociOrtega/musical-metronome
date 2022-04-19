import styled from "styled-components"

const StyledRhythmicHandler = styled.div`
  display: flex;
  flex-direction: column;
  .rhythm{
    width: 310px;
    display: flex;
    justify-content: space-evenly;
    margin: .5rem 0;
  }
  .rhythm__button{
    width: 40px;
    height: 40px;
    background-color: #DEDEDE;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    box-shadow: 1px 1px 6px #3b3b3b;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .rhythm__button:hover{
    background-color: #FAFAFA;
    transform: scale(1.05, 1.05);
    transition-duration: .15s;
  }
  .rhythm__button--redonda{
    background-image: url(https://www.kazu-classicalguitar.co.uk/kazu-suwa-guitar/sites/default/files/styles/mobile_1x/public/2022-02/semibreve.png?itok=r1WPM3Qa);
  }
  .rhythm__button--blanca{
    background-image: url(https://o.quizlet.com/3It3mme6lpsvN3EUO5XzrQ.png);
  }
  .rhythm__button--negra{
    background-image: url(https://1.bp.blogspot.com/-OhIzGsRWcw8/XW_yWCzEd8I/AAAAAAAACR8/q7T01Ys6P5gMhue2uyVrNHdLO1SojIkVACLcBGAs/s1600/nota-negra.png);
  }
  .rhythm__button--corchea{
    background-image: url(https://i0.wp.com/mirepertorio.com/wp-content/uploads/2020/07/923fa-2-corcheas.png?w=604&ssl=1);
  }
  .rhythm__button--semicorchea{
    background-image: url(https://d3lqdljps13i2n.cloudfront.net/recursos/94/3019694/1495641260.jpg);
  }
  .rhythm__button--tresillo{
    background-image: url(https://guitarristapasoapaso.com/wp-content/uploads/2020/07/tresillo_corcheas-compressor-1.png);
  }
  .rhythm__button--active{
    background-color: #FAFAFA;
    box-shadow: 4px 4px 8px #3b3b3b;
    transform: scale(1.1, 1.1);
  }
`
export default StyledRhythmicHandler
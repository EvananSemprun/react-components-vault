import './com/button_3.css';
import { Title, ActionIcon, ScrollArea, HoverCard, Code } from '@mantine/core';
import { IconInfoOctagonFilled } from '@tabler/icons-react';
function Button3() {
  const info1 =
    `
    ul {
      padding: 0;
      list-style-type: none;
    }
    li {
      font-size: 25px;
      width: 8em;
      height: 2em;
      text-align: center;
      line-height: 2em;
      font-family: sans-serif;
      text-transform: capitalize;
      position: relative;
      transition: 0.5s;
      margin: 0.8em;
    }
    
    li::before,
    li::after {
      content: '';
      position: absolute;
      width: 0.6em;
      height: 0.6em;
      background-color: gainsboro;
      border-radius: 50%;
      transition: 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5);
      top: calc(50% - 0.6em / 2);
    }
    
    li::before {left: 0; z-index: -1;}
    li::after {right: 0; z-index: -2;}
    
    li.color-1:hover {
      color: white;
    }
    
    li.color-1:hover::before,
    li.color-1:hover::after {
      width: 100%;
      height: 100%;
      border-radius: 0;
      background-color: crimson;
    }
    
    li.color-1:hover::before {
      top: 0;
    }
    
    li.color-1:hover::after {
      right: -0.4em;
      filter: brightness(0.8);
    }
    
    `;
  const info2 =
    `
.wrapper {
  display: flex;
  justify-content: center;

  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta {
    display: flex;
    padding: 10px 45px;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    color: white;
    background: blue;
    transition: 1s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
}

.cta:focus {
   outline: none; 
}

.cta:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 #FBC638;
}

.cta span:nth-child(2) {
    transition: 0.5s;
    margin-right: 0px;
}

.cta:hover  span:nth-child(2) {
    transition: 0.5s;
    margin-right: 45px;
}

  span {
    transform: skewX(15deg) 
  }

  span:nth-child(2) {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }
  

path.one {
    transition: 0.4s;
    transform: translateX(-60%);
}

path.two {
    transition: 0.5s;
    transform: translateX(-30%);
}

.cta:hover path.three {
    animation: color_anim 1s infinite 0.2s;
}

.cta:hover path.one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
}

.cta:hover path.two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
}


@keyframes color_anim {
    0% {
        fill: white;
    }
    50% {
        fill: #FBC638;
    }
    100% {
        fill: white;
    }
}
    
    `;
  const info3 =
    `
    .button {
      display: inline-block;
      text-align: center;
      background: black;
      color: #eee;
      font-weight: bold;
      padding: 1.18em 1.32em 1.03em;
      line-height: 1;
      border-radius: 1em;
      position: relative;
      min-width: 8.23em;
      text-decoration: none;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.25rem;
    }
    
    .button:before,
    .button:after {
      width: 4.4em;
      height: 2.95em;
      position: absolute;
      content: "";
      display: inline-block;
      background: black;
      border-radius: 50%;
      transition: transform 1s ease;
      transform: scale(0);
      z-index: -1;
    }
    
    .button:before {
      top: -25%;
      left: 20%;
    }
    
    .button:after {
      bottom: -25%;
      right: 20%;
    }
    
    .button:hover:before,
    .button:hover:after {
      transform: none;
    }
    
    
    `;
  return (
    <>
      <Title align='center' order={1}>Hover Effects</Title>

      <HoverCard width={610} shadow="md">
        <HoverCard.Target>
          <ActionIcon >
            <IconInfoOctagonFilled width={48} height={48} />
          </ActionIcon>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <ScrollArea h={250}>

            <Code block>{info1}</Code>
          </ScrollArea>
        </HoverCard.Dropdown>
      </HoverCard>

      <div style={{ marginBottom: "50px" }}>

        <ul>
          <li className="color-1">Inicio</li>
          <li className="color-2">Productos</li>
          <li className="color-3">Servicios</li>
          <li className="color-4">Cantactanos</li>
        </ul>
      </div>

      <HoverCard width={610} shadow="md">
        <HoverCard.Target>
          <ActionIcon >
            <IconInfoOctagonFilled width={48} height={48} />
          </ActionIcon>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <ScrollArea h={250}>

            <Code block>{info2}</Code>
          </ScrollArea>
        </HoverCard.Dropdown>
      </HoverCard>
      <div className="wrapper" style={{ marginBottom: "50px" }}>

        <a className="cta" href="#">
          <span>Siguiente</span>
          <span>
            <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" >
              <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
              </g>
            </svg>
          </span>
        </a>
      </div>
      <HoverCard width={810} shadow="md">
        <HoverCard.Target>
          <ActionIcon >
            <IconInfoOctagonFilled width={48} height={48} />
          </ActionIcon>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <ScrollArea h={250}>

            <Code block>{info3}</Code>
          </ScrollArea>

        </HoverCard.Dropdown>
      </HoverCard>
      <div className="wrapper">
        <a className="button" href="#">Hover me!</a>
        <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default Button3;

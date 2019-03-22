import React, { Component } from "react";
import "./ToolBar.css";

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.handlePdfDownload = this.handlePdfDownload.bind(this);
  }

  handlePdfDownload(event) {
    //remove all html elements with the class .remove and print page as PDF
    let removeNodes = document.getElementsByClassName("remove");
    // let sourceCode = document.getElementsByTagName('html')[0].innerHTML;
    // console.log(sourceCode);

    if (removeNodes.length == 1) {
      removeNodes[0].style.display = "none";

      window.print();
      removeNodes[0].style.display = "block";
    } else {
      removeNodes[0].style.display = "none";
      removeNodes[1].style.display = "none";

      window.print();
      //
      removeNodes[0].style.display = "block";
      removeNodes[1].style.display = "block";
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <svg
          onClick={this.handlePdfDownload}
          version="1.1"
          id="Layer_1"
          class="pdf-svg-layer1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
        >
          <path
            class="pdf-svg-layer2"
            d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z"
          />
          <path
            class="pdf-svg-layer3"
            d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z"
          />
          <polygon class="pdf-svg-layer4" points="480,224 384,128 480,128 " />
          <path
            class="pdf-svg-layer5"
            d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16
  	V416z"
          />
          <g>
            <path
              class="pdf-svg-layer6"
              d="M101.744,303.152c0-4.224,3.328-8.832,8.688-8.832h29.552c16.64,0,31.616,11.136,31.616,32.48
  		c0,20.224-14.976,31.488-31.616,31.488h-21.36v16.896c0,5.632-3.584,8.816-8.192,8.816c-4.224,0-8.688-3.184-8.688-8.816V303.152z
  		 M118.624,310.432v31.872h21.36c8.576,0,15.36-7.568,15.36-15.504c0-8.944-6.784-16.368-15.36-16.368H118.624z"
            />
            <path
              class="pdf-svg-layer7"
              d="M196.656,384c-4.224,0-8.832-2.304-8.832-7.92v-72.672c0-4.592,4.608-7.936,8.832-7.936h29.296
  		c58.464,0,57.184,88.528,1.152,88.528H196.656z M204.72,311.088V368.4h21.232c34.544,0,36.08-57.312,0-57.312H204.72z"
            />
            <path
              class="pdf-svg-layer8"
              d="M303.872,312.112v20.336h32.624c4.608,0,9.216,4.608,9.216,9.072c0,4.224-4.608,7.68-9.216,7.68
  		h-32.624v26.864c0,4.48-3.184,7.92-7.664,7.92c-5.632,0-9.072-3.44-9.072-7.92v-72.672c0-4.592,3.456-7.936,9.072-7.936h44.912
  		c5.632,0,8.96,3.344,8.96,7.936c0,4.096-3.328,8.704-8.96,8.704h-37.248V312.112z"
            />
          </g>
          <path
            class="pdf-svg-layer9"
            d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z"
          />
        </svg>
        <svg
          onClick={function() {
            window.open(
              "https://github.com/richiy/ReactResumeBuilder/blob/gh-pages/pdf_guide.pdf"
            );
          }}
          height="38pt"
          viewBox="0 0 512.00061 512"
          width="38pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m256 10c132.550781 0 246 113.449219 246 246s-113.449219 246-246 246c-47.160156 0-97.007812-13.800781-134.109375-37.300781l-111.890625 37.300781 37.300781-111.890625c-23.5-37.097656-37.300781-86.949219-37.300781-134.109375 0-132.550781 113.449219-246 246-246zm0 0"
            fill="#96c8ef"
          />
          <path
            d="m306 356v40h-100v-40h20v-100h-20v-40h80v140zm0 0"
            fill="#fff"
          />
          <path
            d="m286 146c0 16.570312-13.429688 30-30 30-16.566406 0-30-13.429688-30-30 0-16.566406 13.433594-30 30-30 16.570312 0 30 13.433594 30 30zm0 0"
            fill="#fff"
          />
          <path d="m412 136c0 5.519531 4.480469 10 10 10s10-4.480469 10-10-4.480469-10-10-10-10 4.480469-10 10zm0 0" />
          <path d="m452 256c0 12.808594-1.285156 25.59375-3.816406 38-1.105469 5.410156 2.386718 10.691406 7.796875 11.796875.675781.140625 1.347656.207031 2.011719.207031 4.652343 0 8.820312-3.269531 9.789062-8.003906 2.800781-13.722656 4.21875-27.851562 4.21875-42 0-31.488281-6.828125-61.789062-20.300781-90.0625-2.375-4.984375-8.339844-7.101562-13.328125-4.726562-4.988282 2.375-7.101563 8.34375-4.726563 13.332031 12.179688 25.5625 18.355469 52.96875 18.355469 81.457031zm0 0" />
          <path d="m306 346h-10v-130c0-5.523438-4.476562-10-10-10h-80c-5.523438 0-10 4.476562-10 10v40c0 5.523438 4.476562 10 10 10h10v80h-10c-5.523438 0-10 4.476562-10 10v40c0 5.523438 4.476562 10 10 10h100c5.523438 0 10-4.476562 10-10v-40c0-5.523438-4.476562-10-10-10zm-10 40h-80v-20h10c5.523438 0 10-4.476562 10-10v-100c0-5.523438-4.476562-10-10-10h-10v-20h60v130c0 5.523438 4.480469 10 10 10h10zm0 0" />
          <path d="m256 186c22.054688 0 40-17.945312 40-40s-17.945312-40-40-40-40 17.945312-40 40 17.945312 40 40 40zm0-60c11.027344 0 20 8.972656 20 20s-8.972656 20-20 20-20-8.972656-20-20 8.972656-20 20-20zm0 0" />
          <path d="m256 0c-137.976562 0-256 117.800781-256 256 0 47.207031 13.527344 97.410156 36.335938 135.382812l-35.824219 107.457032c-1.195313 3.589844-.261719 7.554687 2.417969 10.230468 2.691406 2.691407 6.660156 3.609376 10.234374 2.414063l107.457032-35.820313c37.96875 22.8125 88.171875 36.335938 135.378906 36.335938 138.011719 0 256-117.816406 256-256 0-138.011719-117.8125-256-256-256zm0 492c-45.285156 0-93.417969-13.363281-128.757812-35.746094-2.503907-1.585937-5.625-2.003906-8.515626-1.039062l-92.914062 30.972656 30.972656-92.914062c.953125-2.851563.570313-5.976563-1.039062-8.515626-22.382813-35.335937-35.746094-83.472656-35.746094-128.757812 0-127.925781 108.074219-236 236-236s236 108.074219 236 236-108.074219 236-236 236zm0 0" />
        </svg>
      </div>
    );
  }
}

export default ToolBar;

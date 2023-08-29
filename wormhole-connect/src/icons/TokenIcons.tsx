import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

import { CENTER } from '../utils/style';
import { Icon } from '../config/types';
import WBTC from './Tokens/WBTC';
import BUSD from './Tokens/BUSD';
import USDT from './Tokens/USDT';
import DAI from './Tokens/DAI';
import GLMR from './Tokens/GLMR';
import AVAX from './Tokens/AVAX';
import BNB from './Tokens/BNB';
import CELO from './Tokens/CELO';
import ETH from './Tokens/ETH';
import FTM from './Tokens/FTM';
import SOL from './Tokens/SOL';
import APT from './Tokens/APT';
import SUI from './Tokens/SUI';
import SEI from './Tokens/SEI';
import BASE from './Tokens/BASE';
import MATIC from './Tokens/MATIC';
import BSC from './Tokens/BSC';
import USDC from './Tokens/USDC';
import noIcon from './Tokens/noIcon';

const useStyles = makeStyles<{ size: number }>()((theme, { size }) => ({
  container: {
    height: size,
    width: size,
    ...CENTER,
  },
  icon: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
}));

export const getIcon = (icon: Icon) => {
  switch (icon) {
    case Icon.WBTC: {
      return WBTC;
    }
    case Icon.BUSD: {
      return BUSD;
    }
    case Icon.USDT: {
      return USDT;
    }
    case Icon.DAI: {
      return DAI;
    }
    case Icon.GLMR: {
      return GLMR;
    }
    case Icon.AVAX: {
      return AVAX;
    }
    case Icon.BNB: {
      return BNB;
    }
    case Icon.BSC: {
      return BSC;
    }
    case Icon.CELO: {
      return CELO;
    }
    case Icon.ETH: {
      return ETH;
    }
    case Icon.FANTOM: {
      return FTM;
    }
    case Icon.POLYGON: {
      return MATIC;
    }
    case Icon.SOLANA: {
      return SOL;
    }
    case Icon.USDC: {
      return USDC;
    }
    case Icon.SUI: {
      return SUI;
    }
    case Icon.APT: {
      return APT;
    }
    case Icon.SEI: {
      return SEI;
    }
    case Icon.BASE: {
      return BASE;
    }
    case Icon.OSMO: {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxHeight: '100%', maxWidth: '100%' }}
          width="256"
          height="256"
          fill="none"
          viewBox="0 0 800 800"
        >
          <g clipPath="url(#clip0)">
            <path
              fill="#5E12A0"
              d="M673.964 193.237C667.62 168.805 647.227 144.373 610.519 117.174C581.062 95.5081 549.792 83.0615 524.867 83.0615C519.882 83.0615 515.35 83.5225 510.819 84.4445C499.489 86.7494 489.519 95.0471 483.174 107.494C475.47 122.245 473.658 142.068 478.643 154.053C480.455 157.741 482.721 162.351 485.44 166.5C461.422 181.251 447.826 185.4 446.013 185.861C508.553 207.067 560.669 251.321 593.298 308.944L593.751 303.413C595.111 288.2 599.642 270.683 605.987 252.704C612.332 254.548 618.676 255.47 625.021 255.47C641.788 255.47 656.29 248.555 665.354 236.109C674.418 223.662 678.043 207.067 673.964 193.237Z"
            />
            <path
              fill="url(#paint0_radial)"
              d="M608.706 239.342C649.945 250.867 666.713 218.598 661.275 196.932C655.383 175.265 636.35 153.138 602.814 128.245C569.279 103.352 535.29 93.2098 513.537 97.8197C491.784 102.43 485.44 136.081 490.878 148.989C493.144 154.06 498.129 161.436 504.927 169.733C496.316 175.726 488.159 180.336 481.361 184.485C523.054 203.385 559.309 232.888 586.5 269.767C589.672 257.321 594.204 246.257 598.282 236.576C601.455 237.037 605.08 237.959 608.706 239.342Z"
            />
            <path
              fill="url(#paint1_radial)"
              d="M372.594 691.101C512.504 691.101 625.924 575.729 625.924 433.41C625.924 291.091 512.504 175.719 372.594 175.719C232.685 175.719 119.265 291.091 119.265 433.41C119.265 575.729 232.685 691.101 372.594 691.101Z"
            />
            <path
              fill="#A98698"
              d="M640.427 175.721C605.985 138.842 576.982 129.161 542.087 121.325C514.896 114.871 522.146 99.1973 555.229 102.424C539.367 96.8924 524.412 95.5094 513.536 97.8143C491.783 102.424 485.439 136.076 490.877 148.984C493.143 154.055 498.128 161.43 504.925 169.728C492.69 178.026 482.266 184.019 473.656 188.629C477.735 190.472 482.72 192.777 488.611 196.004C504.019 204.302 520.787 218.132 520.787 218.132C495.409 196.004 500.847 185.863 535.742 160.969C546.618 153.133 566.558 154.055 585.139 163.735C603.719 173.416 625.472 197.848 625.472 197.848L604.626 238.415C605.985 238.876 607.345 239.337 608.704 239.798C621.847 243.486 632.27 242.564 640.427 239.337C649.944 233.344 674.869 213.061 640.427 175.721Z"
              opacity=".6"
            />
            <path
              fill="#5E12A0"
              d="M541.631 143.45C550.695 147.138 562.478 153.592 576.979 163.273C594.2 174.797 609.155 187.705 618.672 197.847C602.811 219.052 592.388 248.094 586.043 268.377C589.215 272.987 592.841 277.597 596.013 282.207C599.185 270.682 604.624 253.626 611.875 236.569C613.687 237.03 615.953 237.03 618.219 237.03C623.657 237.03 630.002 236.108 634.987 231.96C638.612 229.194 642.691 224.123 642.238 214.903C642.238 206.144 635.44 195.081 621.391 181.712C611.421 172.031 597.826 161.429 584.23 151.748C545.257 125.472 518.066 118.096 505.83 130.543C497.672 138.84 498.579 148.982 501.298 156.358C486.796 166.039 474.56 172.953 466.403 177.563C471.841 179.407 476.826 181.712 482.264 184.017C496.766 176.18 517.613 162.812 541.631 143.45ZM627.283 209.371C628.642 211.676 629.095 213.981 629.095 215.364C629.095 219.513 627.736 220.896 626.83 221.818C625.017 223.201 621.391 224.123 618.219 224.123C620.938 218.591 624.11 213.981 627.283 209.371ZM515.347 140.684C516.706 139.301 520.332 138.379 526.223 139.301C521.691 142.989 517.159 146.216 512.628 149.443C512.174 146.216 512.627 142.989 515.347 140.684Z"
            />
            <path
              fill="#5E12A0"
              d="M372.596 160.503C224.405 160.503 104.311 282.664 104.311 433.406C104.311 584.149 224.405 706.31 372.596 706.31C520.786 706.31 640.88 584.149 640.88 433.406C640.88 282.664 520.333 160.503 372.596 160.503ZM372.596 691.098C232.562 691.098 119.266 575.851 119.266 433.406C119.266 290.962 232.562 175.715 372.596 175.715C512.629 175.715 625.925 290.962 625.925 433.406C625.925 575.851 512.176 691.098 372.596 691.098Z"
            />
            <path
              fill="url(#paint2_linear)"
              d="M372.594 691.101C512.504 691.101 625.924 575.729 625.924 433.41C625.924 291.091 512.504 175.719 372.594 175.719C232.685 175.719 119.265 291.091 119.265 433.41C119.265 575.729 232.685 691.101 372.594 691.101Z"
              opacity=".6"
            />
            <path
              fill="#A98698"
              d="M370.783 659.75C232.562 637.161 138.754 504.858 161.413 364.258C171.383 302.025 202.199 249.011 245.705 210.75C182.259 248.089 135.128 313.088 122.439 392.378C100.233 532.978 194.042 665.281 331.809 687.87C408.851 700.777 483.173 676.345 538.008 628.403C489.517 656.984 430.603 669.43 370.783 659.75Z"
              opacity=".6"
            />
            <path
              fill="url(#paint3_linear)"
              d="M412.93 179.411C349.031 168.808 286.945 183.56 236.189 216.29C235.282 217.212 234.376 218.133 234.376 218.133C253.863 206.148 282.413 195.545 282.413 195.545C208.998 238.878 186.339 288.203 186.339 288.203C214.889 231.963 298.728 192.318 364.439 189.552C430.151 186.786 473.203 206.609 525.772 249.481C578.342 292.813 610.064 381.322 606.892 451.392C604.173 521.462 567.918 578.163 567.918 578.163C592.844 545.433 607.799 521.462 617.315 497.03C619.128 489.654 620.941 482.278 621.847 474.441C644.506 334.302 551.151 201.999 412.93 179.411Z"
              opacity=".6"
            />
            <path
              fill="url(#paint4_linear)"
              d="M613.235 431.104C613.235 566.173 505.377 675.887 372.595 675.887C239.812 675.887 131.501 566.173 131.501 431.104H613.235Z"
            />
            <g opacity=".6">
              <path
                fill="url(#paint5_linear)"
                d="M594.201 431.104C594.201 562.946 491.781 670.817 363.077 675.887C366.25 675.887 369.422 675.887 372.594 675.887C505.377 675.887 613.234 566.173 613.234 431.104H594.201Z"
                opacity=".6"
              />
            </g>
            <g opacity=".7">
              <path
                fill="url(#paint6_linear)"
                d="M165.49 431.104H131.501C131.501 566.173 239.359 675.887 372.142 675.887C378.033 675.887 383.471 675.887 388.909 675.426C264.284 666.207 165.49 560.18 165.49 431.104Z"
                opacity=".7"
              />
            </g>
            <path
              fill="url(#paint7_linear)"
              d="M612.781 433.407C612.781 405.287 564.744 389.153 500.845 383.621C454.621 379.933 407.943 384.543 354.467 401.138C308.243 414.968 266.55 412.663 236.187 408.975C168.662 401.138 131.501 400.216 131.501 433.407C131.501 481.35 227.576 541.278 371.688 520.533C444.651 509.931 482.265 488.264 525.317 473.513C571.995 457.839 612.781 458.3 612.781 433.407Z"
            />
            <path
              fill="#fff"
              d="M451.448 317.236C473.974 317.236 492.234 298.661 492.234 275.747C492.234 252.833 473.974 234.258 451.448 234.258C428.922 234.258 410.661 252.833 410.661 275.747C410.661 298.661 428.922 317.236 451.448 317.236Z"
            />
            <path
              fill="#fff"
              d="M518.067 348.13C527.578 348.13 535.288 340.287 535.288 330.612C535.288 320.938 527.578 313.095 518.067 313.095C508.556 313.095 500.846 320.938 500.846 330.612C500.846 340.287 508.556 348.13 518.067 348.13Z"
            />
            <g opacity=".6">
              <path
                fill="url(#paint8_linear)"
                d="M579.703 242.563C579.25 242.563 578.796 242.563 578.796 242.563C576.077 242.102 574.265 239.336 574.718 236.109C578.796 214.904 596.017 194.62 596.924 193.698C598.736 191.393 602.362 191.393 604.175 193.237C606.441 195.081 606.44 198.769 604.628 200.613C604.175 201.074 588.313 219.975 584.688 238.414C584.235 241.18 581.969 242.563 579.703 242.563Z"
                opacity=".6"
              />
            </g>
            <path
              fill="#fff"
              d="M355.905 625.64C362.913 625.64 368.594 619.861 368.594 612.732C368.594 605.604 362.913 599.825 355.905 599.825C348.897 599.825 343.216 605.604 343.216 612.732C343.216 619.861 348.897 625.64 355.905 625.64Z"
              opacity=".2"
            />
            <g opacity=".4">
              <path
                fill="url(#paint9_linear)"
                d="M348.577 621.135C343.592 616.065 343.592 607.767 348.577 602.696C349.484 601.774 350.39 601.313 351.296 600.391C349.484 600.852 348.124 601.774 346.765 603.157C341.78 608.228 341.78 616.526 346.765 621.596C350.843 625.745 357.188 626.667 362.173 623.901C357.641 625.745 352.203 624.823 348.577 621.135Z"
                opacity=".6"
              />
            </g>
            <path
              fill="#fff"
              d="M360.361 609.042C361.863 609.042 363.08 607.804 363.08 606.276C363.08 604.749 361.863 603.51 360.361 603.51C358.859 603.51 357.642 604.749 357.642 606.276C357.642 607.804 358.859 609.042 360.361 609.042Z"
              opacity=".3"
            />
            <path
              fill="#fff"
              d="M422.07 619.19C429.078 619.19 434.759 613.411 434.759 606.282C434.759 599.153 429.078 593.375 422.07 593.375C415.062 593.375 409.381 599.153 409.381 606.282C409.381 613.411 415.062 619.19 422.07 619.19Z"
              opacity=".2"
            />
            <g opacity=".4">
              <path
                fill="url(#paint10_linear)"
                d="M414.742 614.685C409.757 609.614 409.757 601.317 414.742 596.246C415.648 595.324 416.555 594.863 417.461 593.941C415.648 594.402 414.289 595.324 412.929 596.707C407.944 601.778 407.944 610.075 412.929 615.146C417.008 619.295 423.352 620.217 428.337 617.451C423.806 619.295 418.367 618.373 414.742 614.685Z"
                opacity=".6"
              />
            </g>
            <path
              fill="#fff"
              d="M426.526 602.592C428.027 602.592 429.245 601.354 429.245 599.826C429.245 598.298 428.027 597.06 426.526 597.06C425.024 597.06 423.806 598.298 423.806 599.826C423.806 601.354 425.024 602.592 426.526 602.592Z"
              opacity=".3"
            />
            <path
              fill="#fff"
              d="M389.361 649.153C394.617 649.153 398.878 644.819 398.878 639.472C398.878 634.126 394.617 629.792 389.361 629.792C384.105 629.792 379.845 634.126 379.845 639.472C379.845 644.819 384.105 649.153 389.361 649.153Z"
              opacity=".2"
            />
            <g opacity=".4">
              <path
                fill="url(#paint11_linear)"
                d="M383.923 645.57C380.298 641.882 380.298 635.429 383.923 631.741C384.376 631.28 385.283 630.819 385.736 630.358C384.376 630.819 383.47 631.741 382.564 632.663C378.938 636.351 378.938 642.805 382.564 646.492C385.736 649.719 390.268 650.18 394.346 647.875C390.721 649.258 386.642 648.336 383.923 645.57Z"
                opacity=".6"
              />
            </g>
            <path
              fill="#fff"
              d="M392.532 636.243C393.534 636.243 394.345 635.418 394.345 634.4C394.345 633.381 393.534 632.556 392.532 632.556C391.531 632.556 390.72 633.381 390.72 634.4C390.72 635.418 391.531 636.243 392.532 636.243Z"
              opacity=".3"
            />
            <path
              fill="#fff"
              d="M447.825 642.238C453.081 642.238 457.342 637.904 457.342 632.558C457.342 627.211 453.081 622.877 447.825 622.877C442.569 622.877 438.308 627.211 438.308 632.558C438.308 637.904 442.569 642.238 447.825 642.238Z"
              opacity=".2"
            />
            <g opacity=".4">
              <path
                fill="url(#paint12_linear)"
                d="M442.387 638.656C438.761 634.968 438.761 628.514 442.387 624.826C442.84 624.365 443.746 623.904 444.199 623.443C442.84 623.904 441.934 624.826 441.027 625.748C437.402 629.436 437.402 635.89 441.027 639.578C444.199 642.805 448.731 643.266 452.81 640.961C449.184 642.344 445.106 641.422 442.387 638.656Z"
                opacity=".6"
              />
            </g>
            <path
              fill="#fff"
              d="M450.996 629.338C451.997 629.338 452.809 628.512 452.809 627.494C452.809 626.475 451.997 625.65 450.996 625.65C449.995 625.65 449.183 626.475 449.183 627.494C449.183 628.512 449.995 629.338 450.996 629.338Z"
              opacity=".3"
            />
            <path
              fill="#fff"
              d="M301.896 621.034C313.41 621.034 322.743 611.54 322.743 599.829C322.743 588.118 313.41 578.624 301.896 578.624C290.383 578.624 281.05 588.118 281.05 599.829C281.05 611.54 290.383 621.034 301.896 621.034Z"
              opacity=".2"
            />
            <g opacity=".4">
              <path
                fill="url(#paint13_linear)"
                d="M290.128 613.192C281.971 604.895 281.971 591.526 290.128 583.228C291.488 581.845 292.847 580.923 294.66 580.001C291.941 580.923 289.675 582.767 287.409 584.611C279.252 592.909 279.252 606.278 287.409 614.575C294.207 621.49 304.63 622.873 312.787 617.802C305.083 621.029 296.019 619.646 290.128 613.192Z"
                opacity=".6"
              />
            </g>
            <path
              fill="#fff"
              d="M309.15 593.372C311.653 593.372 313.682 591.308 313.682 588.762C313.682 586.216 311.653 584.152 309.15 584.152C306.647 584.152 304.618 586.216 304.618 588.762C304.618 591.308 306.647 593.372 309.15 593.372Z"
              opacity=".3"
            />
            <path
              fill="#fff"
              d="M488.23 568.936C499.743 568.936 509.076 559.442 509.076 547.731C509.076 536.019 499.743 526.525 488.23 526.525C476.717 526.525 467.383 536.019 467.383 547.731C467.383 559.442 476.717 568.936 488.23 568.936Z"
              opacity=".2"
            />
            <g opacity=".4">
              <path
                fill="url(#paint14_linear)"
                d="M475.92 561.103C467.763 552.805 467.763 539.436 475.92 531.139C477.28 529.756 478.639 528.834 480.452 527.912C477.733 528.834 475.467 530.678 473.201 532.521C465.044 540.819 465.044 554.188 473.201 562.486C479.999 569.4 490.422 570.783 498.579 565.713C490.875 568.939 482.265 567.556 475.92 561.103Z"
                opacity=".6"
              />
            </g>
            <path
              fill="#fff"
              d="M495.407 541.282C497.91 541.282 499.939 539.218 499.939 536.672C499.939 534.126 497.91 532.062 495.407 532.062C492.904 532.062 490.875 534.126 490.875 536.672C490.875 539.218 492.904 541.282 495.407 541.282Z"
              opacity=".3"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(653.009 167.889) scale(202.547 206.035)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFEAFF" stopOpacity=".6" />
              <stop offset=".681" stopColor="#A087C9" />
              <stop offset="1" stopColor="#10002F" />
            </radialGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(540.32 255.753) scale(495.56 504.093)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFEAFF" stopOpacity=".6" />
              <stop offset=".681" stopColor="#A087C9" />
              <stop offset="1" stopColor="#10002F" />
            </radialGradient>
            <linearGradient
              id="paint2_linear"
              x1="331.959"
              x2="415.726"
              y1="687.445"
              y2="179.399"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#81FFFF" />
              <stop offset=".62" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="551.129"
              x2="338.385"
              y1="258.408"
              y2="450.302"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".289" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="131.705"
              x2="613.118"
              y1="553.353"
              y2="553.353"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0002E9" />
              <stop offset=".995" stopColor="#FF00C7" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="635.906"
              x2="369.659"
              y1="452.584"
              y2="699.942"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".289" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear"
              x1="131.705"
              x2="389.259"
              y1="553.352"
              y2="553.352"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#000292" />
              <stop offset=".995" stopColor="#7D00C7" />
            </linearGradient>
            <linearGradient
              id="paint7_linear"
              x1="132.029"
              x2="612.795"
              y1="453.743"
              y2="453.743"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#000292" />
              <stop offset=".995" stopColor="#BE00C7" />
            </linearGradient>
            <linearGradient
              id="paint8_linear"
              x1="604.91"
              x2="569.494"
              y1="191.453"
              y2="248.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".289" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear"
              x1="343.013"
              x2="362.187"
              y1="613.233"
              y2="613.233"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".289" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear"
              x1="409.132"
              x2="428.305"
              y1="606.695"
              y2="606.695"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".289" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint11_linear"
              x1="379.785"
              x2="394.18"
              y1="639.688"
              y2="639.688"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".289" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint12_linear"
              x1="438.053"
              x2="452.447"
              y1="632.755"
              y2="632.755"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".289" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint13_linear"
              x1="281.083"
              x2="312.395"
              y1="600.365"
              y2="600.365"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".289" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint14_linear"
              x1="467.049"
              x2="498.361"
              y1="548.259"
              y2="548.259"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".289" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="800" height="800" fill="#fff" />
            </clipPath>
          </defs>
        </svg>
      );
    }
    case Icon.BONK: {
      return (
        <img
          style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: '100%' }}
          alt="BONK token"
          src="https://quei6zhlcfsxdfyes577gy7bkxmuz7qqakyt72xlbkyh7fysmoza.arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I"
        />
      );
    }
    case Icon.TBTC: {
      return (
        <svg
          width="144"
          height="144"
          viewBox="0 0 144 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M71.85 143.7C111.532 143.7 143.7 111.532 143.7 71.85C143.7 32.1683 111.532 0 71.85 0C32.1683 0 0 32.1683 0 71.85C0 111.532 32.1683 143.7 71.85 143.7Z"
            fill="#1D2229"
          />
          <path
            d="M59.5621 65.1122H47.531V77.1433H59.5621V65.1122Z"
            fill="white"
          />
          <path
            d="M47.5309 53.081H35.4997V65.1121L47.531 65.1122L47.5309 53.081Z"
            fill="white"
          />
          <path
            d="M35.4978 65.1122H23.4667V77.1433H35.4978V65.1122Z"
            fill="white"
          />
          <path
            d="M47.531 77.1433L35.4997 77.1427V89.1738H47.5309L47.531 77.1433Z"
            fill="white"
          />
          <path
            d="M115.922 55.6723C115.074 46.824 107.437 43.8538 97.791 43.0056V37.3377H90.3225V42.6822C88.3601 42.6822 86.3535 42.7198 84.3579 42.7575V37.3333H76.8938V42.9989C75.2769 43.0299 65.3433 43.0211 65.3433 43.0211L65.3211 49.6058L71.5538 49.6413V92.7977H65.3233L65.268 99.2895C67.0775 99.2895 75.1308 99.3249 76.8761 99.336V104.931H84.3401V99.4689C86.3867 99.5132 88.3712 99.5309 90.307 99.5287V104.933H97.7777V99.3626C110.338 98.6472 119.133 95.4866 120.225 83.6947C121.111 74.1974 116.646 69.9626 109.516 68.2394C113.849 66.0246 116.558 62.1463 115.926 55.6701L115.922 55.6723ZM105.457 82.2129C105.457 91.491 89.5739 90.4301 84.5063 90.4323V73.9847C89.5716 73.9847 105.448 72.5384 105.45 82.2129H105.457ZM101.99 59.0057C101.99 67.4465 88.7366 66.4565 84.5173 66.4565V51.5372C88.7433 51.5394 101.995 50.2016 101.99 59.0057Z"
            fill="white"
          />
        </svg>
      );
    }
    case Icon.WSTETH: {
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="512" height="512" rx="256" fill="#00A3FF" />
          <path
            opacity="0.6"
            d="M361.012 237.812L363.878 242.209C396.204 291.798 388.984 356.742 346.52 398.348C321.539 422.826 288.798 435.066 256.056 435.069C256.056 435.069 256.056 435.069 361.012 237.812Z"
            fill="white"
          />
          <path
            opacity="0.2"
            d="M256.044 297.764L361 237.812C256.045 435.069 256.044 435.069 256.044 435.069C256.044 392.108 256.044 342.88 256.044 297.764Z"
            fill="white"
          />
          <path
            d="M150.988 237.812L148.122 242.209C115.796 291.798 123.016 356.742 165.48 398.348C190.461 422.826 223.202 435.066 255.944 435.069C255.944 435.069 255.944 435.069 150.988 237.812Z"
            fill="white"
          />
          <path
            opacity="0.6"
            d="M255.914 297.764L150.958 237.812C255.914 435.069 255.914 435.069 255.914 435.069C255.914 392.108 255.914 342.88 255.914 297.764Z"
            fill="white"
          />
          <path
            opacity="0.2"
            d="M256.083 163.833V267.233L346.491 215.566L256.083 163.833Z"
            fill="white"
          />
          <path
            opacity="0.6"
            d="M256.056 163.833L165.583 215.565L256.056 267.233V163.833Z"
            fill="white"
          />
          <path
            d="M256.056 76.875L165.583 215.599L256.056 163.722V76.875Z"
            fill="white"
          />
          <path
            opacity="0.6"
            d="M256.083 163.706L346.56 215.585L256.083 76.7916V163.706Z"
            fill="white"
          />
        </svg>
      );
    }
    default: {
      return noIcon;
    }
  }
};

type Props = {
  name?: Icon;
  height?: number;
};

function TokenIcon(props: Props) {
  const size = props.height || 32;
  const { classes } = useStyles({ size });

  const [icon, setIcon] = useState(noIcon);

  useEffect(() => {
    if (props.name) {
      setIcon(getIcon(props.name!)!);
    } else {
      setIcon(noIcon);
    }
  }, [props.name]);

  return <div className={classes.container}>{icon}</div>;
}

export default TokenIcon;

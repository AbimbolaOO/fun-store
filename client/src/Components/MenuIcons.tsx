interface ISvgDimensions {
  width?: string;
  height?: string;
}

export const Love: React.FC<ISvgDimensions> = ({
  width = '20px',
  height = '20px',
}) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
    >
      <g id="Layer_1">
        <path
          d="M45.281,25.915c4.949-5.004,4.949-13.146,0-18.15C42.881,5.337,39.688,4,36.292,4c-0.001,0-0.001,0-0.001,0
                c-3.396,0-6.59,1.337-8.991,3.765L25,10.09l-2.3-2.325C20.299,5.337,17.106,4,13.709,4c-3.396,0-6.589,1.337-8.99,3.765
                c-4.949,5.004-4.949,13.146,0,18.15L25,46.422L45.281,25.915z M6.141,9.171C8.163,7.126,10.852,6,13.709,6
                c2.858,0,5.547,1.126,7.569,3.171L25,12.935l3.722-3.764C30.744,7.126,33.433,6,36.291,6c2.858,0,5.546,1.126,7.568,3.171
                c4.183,4.229,4.183,11.109,0,15.338L25,43.578L6.141,24.509C1.958,20.28,1.958,13.399,6.141,9.171z"
        />
      </g>
      <g></g>
    </svg>
  );
};

export const Profile: React.FC<ISvgDimensions> = ({
  width = '20px',
  height = '20px',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>@1xIconly/Bold/Profile</title>
      <desc>Created with Sketch.</desc>
      <g id="Iconly/Bold/Profile" stroke="none" fill="none">
        <g
          id="Profile"
          transform="translate(4.000000, 2.000000)"
          fill="#200E32"
        >
          <path d="M5.84846399,13.5498221 C7.28813318,13.433801 8.73442297,13.433801 10.1740922,13.5498221 C10.9580697,13.5955225 11.7383286,13.6935941 12.5099314,13.8434164 C14.1796238,14.1814947 15.2696821,14.7330961 15.73685,15.6227758 C16.0877167,16.317132 16.0877167,17.1437221 15.73685,17.8380783 C15.2696821,18.727758 14.2228801,19.3149466 12.4926289,19.6174377 C11.7216312,19.7729078 10.9411975,19.873974 10.1567896,19.9199288 C9.43008411,20 8.70337858,20 7.96802179,20 L6.64437958,20 C6.36753937,19.9644128 6.09935043,19.9466192 5.83981274,19.9466192 C5.05537891,19.9062698 4.27476595,19.8081536 3.50397353,19.6530249 C1.83428106,19.3327402 0.744222763,18.7633452 0.277054922,17.8736655 C0.0967111971,17.5290284 0.00163408158,17.144037 0.000104217816,16.752669 C-0.00354430942,16.3589158 0.0886574605,15.9704652 0.268403665,15.6227758 C0.72692025,14.7330961 1.81697855,14.1548043 3.50397353,13.8434164 C4.27816255,13.6914539 5.06143714,13.5933665 5.84846399,13.5498221 Z M8.00262682,-1.16351373e-13 C10.9028467,-1.16351373e-13 13.2539394,2.41782168 13.2539394,5.40035587 C13.2539394,8.38289006 10.9028467,10.8007117 8.00262682,10.8007117 C5.10240696,10.8007117 2.75131423,8.38289006 2.75131423,5.40035587 C2.75131423,2.41782168 5.10240696,-1.16351373e-13 8.00262682,-1.16351373e-13 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const Search: React.FC<ISvgDimensions> = ({
  width = '20px',
  height = '20px',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Page-1" stroke="none" fill="none">
        <g id="icon-111-search" fill="#000000">
          <path
            d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z"
            id="search"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const Cart: React.FC<ISvgDimensions> = ({
  width = '20px',
  height = '20px',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.8401 17.77C59.442 17.2201 58.9188 16.7728 58.3137 16.465C57.7086 16.1573 57.039 15.9979 56.3601 16H15.8901L14.7701 9.99995C14.6069 9.01073 14.0985 8.11132 13.3351 7.46141C12.5717 6.8115 11.6027 6.45314 10.6001 6.44995H4.6001C4.26858 6.44995 3.95063 6.58165 3.71621 6.81607C3.48179 7.05049 3.3501 7.36843 3.3501 7.69995C3.3501 8.03147 3.48179 8.34941 3.71621 8.58383C3.95063 8.81826 4.26858 8.94995 4.6001 8.94995H10.6001C11.0081 8.95199 11.4027 9.09572 11.7165 9.35657C12.0302 9.61742 12.2436 9.97917 12.3201 10.38L19.2601 48.08C19.3179 48.3631 19.472 48.6175 19.6963 48.7999C19.9206 48.9822 20.2011 49.0812 20.4901 49.08H23.3001C22.8378 49.7931 22.5481 50.6042 22.4539 51.4488C22.3597 52.2935 22.4635 53.1485 22.7573 53.946C23.0511 54.7435 23.5266 55.4615 24.1463 56.0432C24.7659 56.6249 25.5125 57.0542 26.327 57.2971C27.1414 57.54 28.0012 57.5897 28.8383 57.4424C29.6753 57.2951 30.4665 56.9548 31.149 56.4485C31.8316 55.9421 32.3868 55.2837 32.7706 54.5254C33.1544 53.7671 33.3563 52.9298 33.3601 52.08C33.3626 51.016 33.0569 49.974 32.4801 49.08H38.0901C37.5548 49.9057 37.2522 50.8606 37.2142 51.844C37.1762 52.8273 37.4041 53.8027 37.8741 54.6674C38.344 55.532 39.0385 56.2539 39.8843 56.7569C40.7301 57.2598 41.696 57.5253 42.6801 57.5253C43.6642 57.5253 44.6301 57.2598 45.4759 56.7569C46.3217 56.2539 47.0162 55.532 47.4861 54.6674C47.9561 53.8027 48.184 52.8273 48.146 51.844C48.108 50.8606 47.8054 49.9057 47.2701 49.08H49.0001C49.3316 49.08 49.6496 48.9483 49.884 48.7138C50.1184 48.4794 50.2501 48.1615 50.2501 47.83C50.2501 47.4984 50.1184 47.1805 49.884 46.9461C49.6496 46.7116 49.3316 46.58 49.0001 46.58H21.5301L20.6301 41.68H50.0901C50.9623 41.6803 51.8135 41.4129 52.5288 40.914C53.2442 40.415 53.7891 39.7085 54.0901 38.8899L60.3601 21.64C60.5874 21 60.6588 20.3151 60.5684 19.642C60.4779 18.969 60.2283 18.3272 59.8401 17.77ZM30.8401 52.08C30.8401 52.6733 30.6642 53.2533 30.3345 53.7467C30.0049 54.24 29.5363 54.6245 28.9881 54.8516C28.44 55.0787 27.8368 55.1381 27.2548 55.0223C26.6729 54.9065 26.1383 54.6208 25.7188 54.2013C25.2992 53.7817 25.0135 53.2472 24.8977 52.6652C24.782 52.0833 24.8414 51.4801 25.0685 50.9319C25.2955 50.3837 25.68 49.9152 26.1734 49.5855C26.6667 49.2559 27.2468 49.08 27.8401 49.08C28.2357 49.0773 28.628 49.153 28.9943 49.3025C29.3606 49.4521 29.6937 49.6727 29.9744 49.9515C30.2551 50.2304 30.4778 50.562 30.6298 50.9273C30.7819 51.2925 30.8601 51.6843 30.8601 52.08H30.8401ZM45.6301 52.08C45.6301 52.6733 45.4542 53.2533 45.1245 53.7467C44.7949 54.24 44.3263 54.6245 43.7781 54.8516C43.23 55.0787 42.6268 55.1381 42.0448 55.0223C41.4629 54.9065 40.9283 54.6208 40.5088 54.2013C40.0892 53.7817 39.8035 53.2472 39.6877 52.6652C39.572 52.0833 39.6314 51.4801 39.8585 50.9319C40.0855 50.3837 40.47 49.9152 40.9634 49.5855C41.4567 49.2559 42.0368 49.08 42.6301 49.08C43.0257 49.0773 43.418 49.153 43.7843 49.3025C44.1506 49.4521 44.4837 49.6727 44.7644 49.9515C45.0451 50.2304 45.2678 50.562 45.4198 50.9273C45.5719 51.2925 45.6501 51.6843 45.6501 52.08H45.6301ZM58.0001 20.81L51.7301 38.0499C51.6073 38.3864 51.3842 38.6771 51.0909 38.8828C50.7976 39.0884 50.4483 39.1991 50.0901 39.2H20.1701L16.3501 18.46H56.3501C56.6307 18.4573 56.9078 18.5233 57.157 18.6523C57.4063 18.7813 57.6202 18.9693 57.7801 19.2C57.945 19.4302 58.0512 19.6971 58.0896 19.9777C58.1279 20.2583 58.0972 20.5439 58.0001 20.81V20.81Z"
        fill="black"
      />
    </svg>
  );
};

export const HamburgerMenuIcon: React.FC<ISvgDimensions> = ({
  width = '20px',
  height = '20px',
}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
    >
      <g>
        <path
          d="M34.063,10.625H5.938C5.419,10.625,5,10.204,5,9.688C5,9.17,5.419,8.75,5.938,8.75h28.125C34.58,8.75,35,9.17,35,9.688
		C35,10.204,34.58,10.625,34.063,10.625"
        />
        <path
          d="M34.063,20.938H5.938C5.419,20.938,5,20.517,5,20c0-0.518,0.419-0.938,0.938-0.938h28.125C34.58,19.063,35,19.482,35,20
		C35,20.517,34.58,20.938,34.063,20.938"
        />
        <path
          d="M34.063,31.25H5.938C5.419,31.25,5,30.829,5,30.313c0-0.518,0.419-0.938,0.938-0.938h28.125
		c0.518,0,0.938,0.42,0.938,0.938C35,30.829,34.58,31.25,34.063,31.25"
        />
        <path
          d="M34.063,20.938H5.938C5.419,20.938,5,20.517,5,20c0-0.518,0.419-0.938,0.938-0.938h28.125C34.58,19.063,35,19.482,35,20
		C35,20.517,34.58,20.938,34.063,20.938"
        />
      </g>
    </svg>
  );
};

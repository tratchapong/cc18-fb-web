export function FacebookLogo(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={14} fill="url(#a)" />
      <path
        d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="a"
          x1={16}
          y1={2}
          x2={16}
          y2={29.917}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18ACFE" />
          <stop offset={1} stopColor="#0163E0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function HomeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path
          d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11"
          strokeLinecap="round"
        />
        <path
          opacity={0.5}
          d="M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5"
          strokeLinecap="round"
        />
        <path d="M4 22V9.5M20 22V9.5" strokeLinecap="round" />
        <path
          opacity={0.5}
          d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </g>
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.465 3.923A1 1 0 004 4.81V19.19a1 1 0 001.465.886l13.697-7.192a1 1 0 000-1.77L5.465 3.923zM2 4.81c0-2.256 2.397-3.705 4.395-2.656l13.697 7.19c2.14 1.125 2.14 4.19 0 5.313L6.395 21.847C4.397 22.897 2 21.447 2 19.191V4.81z"
        fill="#0F0F0F"
      />
    </svg>
  )
}

export function ShopIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path d="M22 22H2M20 22V11M4 22V11" strokeLinecap="round" />
        <path
          d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 006 9a2 2 0 104 0 2 2 0 104 0 2 2 0 104 0 2 2 0 003.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2z"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75v3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export function GroupIcon(props) {
  return (
    <svg viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1807.059 1270.091c-68.668 48.452-188.725 116.556-343.906 158.57-18.861-102.55-92.725-187.37-196.066-219.106-91.708-28.235-185.11-48.339-279.53-61.666 71.944-60.762 121.638-145.807 135.982-243.162 21.91-.791 44.837-1.243 71.04-1.243 166.023.904 331.143 26.316 490.955 75.445 72.621 22.362 121.525 87.755 121.525 162.861v128.301zm-451.765 338.824c-114.183 80.753-330.24 198.099-621.176 198.099-129.43 0-379.144-26.203-621.177-198.1v-128.752c0-74.993 49.017-140.499 121.75-162.861 162.41-49.694 330.354-74.88 499.427-74.88h8.47c166.588.79 331.821 26.09 491.407 75.106 72.509 22.249 121.3 87.642 121.3 162.635v128.753zm-903.53-761.901V734.072c0-155.632 126.608-282.352 282.354-282.352 155.746 0 282.353 126.72 282.353 282.352v112.942c0 155.746-126.607 282.353-282.353 282.353S451.765 1002.76 451.765 847.014zm734.118-734.118c75.22 0 146.146 29.478 199.567 82.899 53.309 53.421 82.786 124.235 82.786 199.454V508.19c0 155.746-126.607 282.353-282.353 282.353-19.651 0-38.4-2.598-56.47-6.438v-50.033c0-156.423-92.047-290.71-224.188-354.748 8.357-148.066 130.447-266.428 280.658-266.428zm532.857 758.061c-91.37-28.01-184.546-48.226-279.755-61.666 86.174-72.508 142.192-179.802 142.192-301.1V395.248c0-105.374-41.11-204.65-115.877-279.304-74.767-74.767-173.93-115.99-279.417-115.99-200.696 0-365.138 151.002-390.211 345.148-20.217-3.275-40.433-6.325-61.553-6.325-217.977 0-395.294 177.43-395.294 395.294v112.942c0 121.298 56.018 228.593 142.305 301.214-94.305 13.214-188.16 33.092-279.529 61.1C81.092 1246.375 0 1355.249 0 1480.163v185.675l22.588 16.941c275.238 206.344 563.803 237.177 711.53 237.177 344.244 0 593.618-148.63 711.53-237.177l22.587-16.94v-120.51c205.214-50.597 355.652-146.032 429.177-201.373l22.588-16.941V1141.79c0-125.026-80.979-233.901-201.261-270.833z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4 opacity-70"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function MessengerIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.002 2C6.369 2 2 6.126 2 11.701c0 2.916 1.195 5.435 3.14 7.174.162.146.26.349.268.57l.056 1.78a.798.798 0 001.121.705l1.986-.875a.81.81 0 01.533-.04c.912.25 1.883.386 2.894.386C17.631 21.4 22 17.275 22 11.7 22 6.125 17.632 2 12.002 2zm5.25 7.579L14.75 13.55a1.279 1.279 0 01-1.85.342l-1.992-1.493a.513.513 0 00-.615 0l-2.688 2.04c-.357.273-.828-.157-.589-.536L9.52 9.932a1.28 1.28 0 011.85-.342l1.992 1.493a.514.514 0 00.614 0l2.688-2.04c.36-.277.832.153.589.536z"
        stroke="#000"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NotificationIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.713 7.15a.75.75 0 00-.037-1.5l.037 1.5zm-5.406 5.043h.75v-.017l-.75.017zm0 2.317l.039.749a.75.75 0 00.71-.749h-.75zm0 3.09l-.04.749.04.001v-.75zm3.113.75a.75.75 0 000-1.5v1.5zM10.944 6.4a.75.75 0 001.5 0h-1.5zm1.5-2.4a.75.75 0 00-1.5 0h1.5zm-.731 1.65a.75.75 0 00-.037 1.5l.037-1.5zm5.37 6.543l-.75-.017v.017h.75zm0 2.317h-.75a.75.75 0 00.71.749l.04-.749zm0 3.09v.75l.039-.001-.04-.749zm-3.114-.75a.75.75 0 000 1.5v-1.5zm-3.8.753a.75.75 0 10-1.5-.006l1.5.006zm-.084 1.697l.547-.513-.001-.001-.546.514zm3.217 0l-.546-.514-.001.001.547.513zm1.416-1.703a.75.75 0 00-1.5.006l1.5-.006zm-5.3-.747a.75.75 0 000 1.5v-1.5zm4.551 1.5a.75.75 0 000-1.5v1.5zm-2.293-12.7c-3.478.086-6.198 3.04-6.12 6.56l1.5-.034c-.06-2.73 2.041-4.962 4.657-5.026l-.037-1.5zm-6.12 6.543v2.317h1.5v-2.317h-1.5zm.712 1.568c-1.217.064-2.143 1.088-2.143 2.294h1.5c0-.441.333-.776.72-.796l-.077-1.498zm-2.143 2.294c0 1.206.926 2.23 2.143 2.294l.078-1.498c-.388-.02-.721-.355-.721-.796h-1.5zm2.182 2.295H9.42v-1.5H6.307v1.5zM12.444 6.4V4h-1.5v2.4h1.5zm-.768.75c2.616.064 4.718 2.297 4.656 5.026l1.5.034c.08-3.52-2.641-6.474-6.119-6.56l-.037 1.5zm4.656 5.043v2.317h1.5v-2.317h-1.5zm.711 3.066c.388.02.721.355.721.796h1.5c0-1.206-.925-2.23-2.142-2.294l-.079 1.498zm.721.796c0 .441-.333.776-.72.796l.078 1.498c1.216-.064 2.142-1.088 2.142-2.294h-1.5zm-.682.795H13.97v1.5h3.113v-1.5zm-8.413.747a3.218 3.218 0 00.87 2.217l1.092-1.028a1.72 1.72 0 01-.462-1.183l-1.5-.006zm.868 2.216c.56.598 1.339.94 2.156.94v-1.5c-.396 0-.78-.166-1.06-.466l-1.096 1.026zm2.156.94c.818 0 1.596-.342 2.157-.94l-1.095-1.026c-.281.3-.665.466-1.062.466v1.5zm2.155-.939a3.218 3.218 0 00.87-2.217l-1.5.006c.002.444-.166.868-.462 1.183l1.092 1.028zm-4.43-1.464h4.551v-1.5H9.418v1.5z"
        fill="#000"
      />
    </svg>
  )
}

export function FriendIcon(props) {
  return (
    <svg
      fill="#697cb5"
      viewBox="-3 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#697cb5"
      {...props}
    >
      <path d="M17.25 20.5c1.281.719 2 1.906 1.875 3.125-.063.75-.031.75-1 .875-.594.063-4.375.094-8.219.094-4.375 0-8.938-.031-9.281-.125-1.281-.344-.531-2.719 1.156-3.844 1.344-.844 4.063-2.156 4.813-2.313 1.031-.219 1.156-.875 0-2.844-.25-.469-.531-1.813-.563-3.25C6 9.905 6.406 8.343 8.437 7.562a3.977 3.977 0 011.219-.188c1.344 0 2.594.75 3.125 1.844.719 1.469.375 5.313-.375 6.719-.906 1.594-.813 2.094.188 2.344.625.156 2.688 1.125 4.656 2.219zm6.844-1.969c1 .531 1.563 1.5 1.469 2.438-.031.563-.031.594-.781.688-.375.063-2.344.094-4.656.094-.406-.969-1.188-1.844-2.25-2.406a41.827 41.827 0 00-3.75-1.875c.719-.344 1.344-.625 1.625-.688.781-.188.875-.625 0-2.188-.219-.375-.469-1.438-.5-2.563-.031-1.813.375-3.063 1.938-3.656.313-.094.656-.156.969-.156 1.031 0 2 .563 2.406 1.438.531 1.156.281 4.156-.281 5.281-.688 1.25-.625 1.625.156 1.813.5.125 2.094.906 3.656 1.781z" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.7 13.5l-2-2-2 2M21 12a9 9 0 11-1.245-4.57M12 7v5l3 2"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BookmarkIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 6.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C6.52 3 7.08 3 8.2 3h7.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C19 4.52 19 5.08 19 6.2V21l-7-5-7 5V6.2z"
        stroke="#000"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MoreIcon(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" />
    </svg>
  )
}



